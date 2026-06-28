#!/usr/bin/env python3
"""
edu-web version_manager.py — 版本管理工具

为 spelling-drill.html 等教育工具提供自动备份和版本回滚。
调用方式：

  查看版本列表：            python3 version_manager.py list
  备份当前版本：            python3 version_manager.py backup [备注信息]
  回滚到指定版本：          python3 version_manager.py restore <版本号>
  比较两个版本差异：        python3 version_manager.py diff <v1> <v2>
  清理旧版本(保留N个)：      python3 version_manager.py prune [保留个数=20]
"""

import os, sys, json, shutil, datetime, re, difflib
from pathlib import Path

# 配置
HERE = Path(__file__).parent.resolve()
WORD_GAME_DIR = HERE.parent / "英语" / "word-game"
VERSIONS_DIR = HERE / "versions"
VERSIONS_DIR.mkdir(parents=True, exist_ok=True)

# 受管理的文件
MANAGED_FILES = ["spelling-drill.html"]


def _version_file(filename):
    """该文件的版本索引JSON路径"""
    return VERSIONS_DIR / f"{filename}.versions.json"


def _load_versions(filename):
    """读取某个文件的版本列表"""
    vf = _version_file(filename)
    if vf.exists():
        return json.loads(vf.read_text(encoding="utf-8"))
    return []


def _save_versions(filename, versions):
    """保存版本列表"""
    vf = _version_file(filename)
    vf.write_text(json.dumps(versions, ensure_ascii=False, indent=2), encoding="utf-8")


def cmd_list():
    """列出所有可管理的文件及其版本"""
    found = False
    for fname in MANAGED_FILES:
        filepath = WORD_GAME_DIR / fname
        if not filepath.exists():
            continue
        found = True
        versions = _load_versions(fname)
        print(f"📄 {fname}")
        print(f"   当前文件: {filepath}")
        if not versions:
            print(f"   ⚠️  尚未备份过，执行 backup 创建第一个版本")
        else:
            print(f"   共 {len(versions)} 个版本:")
            for v in reversed(versions):
                marker = " ← 当前" if v.get("is_current") else ""
                note = f" — {v['note']}" if v.get("note") else ""
                date_str = v.get("date", "")
                size_str = f" ({v.get('size', 0)}B)" if v.get("size") else ""
                print(f"     v{v['version']:03d}  {date_str}{size_str}{note}{marker}")
        print()
    if not found:
        print("⚠️  没有找到受管理的文件")


def cmd_backup(note=""):
    """备份当前文件"""
    for fname in MANAGED_FILES:
        filepath = WORD_GAME_DIR / fname
        if not filepath.exists():
            print(f"⚠️  {fname} 不存在，跳过")
            continue

        versions = _load_versions(fname)
        next_ver = (versions[-1]["version"] + 1) if versions else 1

        # 确定备份文件名
        bak_name = f"{fname}.v{next_ver:03d}.bak"
        bak_path = VERSIONS_DIR / bak_name

        # 复制文件
        shutil.copy2(str(filepath), str(bak_path))

        # 检查是否和上一个版本一致（无变化则跳过）
        if versions:
            prev_bak = VERSIONS_DIR / f"{fname}.v{versions[-1]['version']:03d}.bak"
            if prev_bak.exists():
                if filepath.read_bytes() == prev_bak.read_bytes():
                    print(f"⏭️  {fname}: 内容无变化，跳过备份")
                    bak_path.unlink()  # 删除刚创建的
                    return

        # 取消所有 is_current 标记
        for v in versions:
            v["is_current"] = False

        # 添加新版本
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        new_ver = {
            "version": next_ver,
            "date": timestamp,
            "size": filepath.stat().st_size,
            "note": note or f"Auto backup at {timestamp}",
            "is_current": True,
            "backup_file": bak_name
        }
        versions.append(new_ver)
        _save_versions(fname, versions)
        print(f"✅ {fname}: v{next_ver:03d} 已备份 ({timestamp})")


def cmd_restore(ver_str):
    """回滚到指定版本"""
    ver = int(ver_str.lstrip("v").lstrip("0") or "0")
    for fname in MANAGED_FILES:
        filepath = WORD_GAME_DIR / fname
        if not filepath.exists():
            continue
        versions = _load_versions(fname)
        target = None
        for v in versions:
            if v["version"] == ver:
                target = v
                break
        if not target:
            print(f"❌ {fname}: 版本 v{ver:03d} 不存在")
            continue
        bak_path = VERSIONS_DIR / target["backup_file"]
        if not bak_path.exists():
            print(f"❌ {fname}: 备份文件 {target['backup_file']} 丢失")
            continue

        # 先自动备份当前版本（以防回滚后悔）
        cmd_backup(f"Auto backup before restore to v{ver:03d}")

        # 执行回滚
        shutil.copy2(str(bak_path), str(filepath))

        # 更新标记
        versions = _load_versions(fname)
        for v in versions:
            v["is_current"] = (v["version"] == ver)
        _save_versions(fname, versions)

        print(f"✅ {fname}: 已回滚到 v{ver:03d} ({target['date']}) — {target.get('note','')}")


def cmd_diff(v1_str, v2_str):
    """比较两个版本"""
    v1, v2 = int(v1_str.lstrip("v")), int(v2_str.lstrip("v"))
    for fname in MANAGED_FILES:
        versions = _load_versions(fname)
        f1 = f2 = None
        for v in versions:
            if v["version"] == v1: f1 = v
            if v["version"] == v2: f2 = v
        if not f1 or not f2:
            print(f"⚠️  版本 v{v1:03d} 或 v{v2:03d} 不存在")
            return
        p1 = VERSIONS_DIR / f1["backup_file"]
        p2 = VERSIONS_DIR / f2["backup_file"]
        if not p1.exists() or not p2.exists():
            print("⚠️  备份文件丢失")
            return
        c1 = p1.read_text(encoding="utf-8").splitlines()
        c2 = p2.read_text(encoding="utf-8").splitlines()
        diff = list(difflib.unified_diff(c1, c2, fromfile=f"v{v1:03d}", tofile=f"v{v2:03d}", lineterm=""))
        print(f"\n📊 {fname}: v{v1:03d} vs v{v2:03d}")
        print(f"   {f1['date']} → {f2['date']}")
        print(f"   {len(diff)} lines changed\n")
        for line in diff[:100]:  # 最多100行
            print(line)
        if len(diff) > 100:
            print(f"... and {len(diff)-100} more lines")


def cmd_prune(keep=20):
    """清理旧版本，保留最新N个"""
    keep = int(keep)
    for fname in MANAGED_FILES:
        versions = _load_versions(fname)
        if len(versions) <= keep:
            print(f"⏭️  {fname}: 只有 {len(versions)} 个版本，无需清理")
            continue
        removed = versions[:-keep]
        kept = versions[-keep:]
        for v in removed:
            bak_path = VERSIONS_DIR / v["backup_file"]
            if bak_path.exists():
                bak_path.unlink()
                print(f"   🗑️  v{v['version']:03d}: {bak_path.name}")
        _save_versions(fname, kept)
        print(f"✅ {fname}: 清理了 {len(removed)} 个旧版本，保留 {keep} 个")


def cmd_migrate_existing():
    """第一次运行：备份当前文件作为v001"""
    for fname in MANAGED_FILES:
        filepath = WORD_GAME_DIR / fname
        if not filepath.exists():
            continue
        versions = _load_versions(fname)
        if versions:
            print(f"⏭️  {fname}: 已有 {len(versions)} 个版本，跳过迁移")
            continue
        cmd_backup("Initial version")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)

    cmd = sys.argv[1]
    args = sys.argv[2:]

    if cmd == "list":
        cmd_list()
    elif cmd == "backup":
        note = " ".join(args) if args else ""
        cmd_backup(note)
    elif cmd == "restore":
        if not args:
            print("❌ 请指定版本号: restore <版本号>")
            sys.exit(1)
        cmd_restore(args[0])
    elif cmd == "diff":
        if len(args) < 2:
            print("❌ 请指定两个版本号: diff <v1> <v2>")
            sys.exit(1)
        cmd_diff(args[0], args[1])
    elif cmd == "prune":
        keep = args[0] if args else 20
        cmd_prune(keep)
    elif cmd == "migrate":
        cmd_migrate_existing()
    else:
        print(f"❌ 未知命令: {cmd}")
        print(__doc__)
