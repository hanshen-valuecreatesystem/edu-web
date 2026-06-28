"""
edu-web server.py — 韩佑心/韩佑安 教育AI工具独立后端
完全独立于 invest-system，只服务于拼写/语义/其他学习工具

API:
  GET  /api/spelling/data           → 所有单词数据（读取 word-game/data_u*.js）
  GET  /api/spelling/speak?word=X   → 生成/返回MP3语音
  POST /api/spelling/diagnose       → AI诊断拼写错误
  GET  /versions/<filename>         → 版本管理页面（Web界面）
  POST /api/versions/backup         → 手动备份
  POST /api/versions/restore        → 回滚到指定版本
"""

import os, sys, json, re, subprocess
from pathlib import Path
from flask import Flask, jsonify, request, send_file, render_template_string

app = Flask(__name__)

# 路径常量
HERE = Path(__file__).parent.resolve()
WORD_GAME_DIR = HERE.parent / "英语" / "word-game"
SPEECH_CACHE_DIR = HERE / "speech_cache"
SPEECH_CACHE_DIR.mkdir(parents=True, exist_ok=True)

# ============================================================
# 单词数据 API
# ============================================================

@app.route("/api/spelling/data")
def api_spelling_data():
    """返回 word-game 下所有 data_u*.js 的单词数据"""
    words = []
    if not WORD_GAME_DIR.exists():
        return jsonify({"error": f"word-game directory not found: {WORD_GAME_DIR}"}), 500

    for js_file in sorted(WORD_GAME_DIR.glob("data_u*.js")):
        try:
            fpath = str(js_file).replace("\\", "/")
            result = subprocess.run(
                ["node", "-e",
                 f'const fs=require("fs");const c=fs.readFileSync("{fpath}","utf8");'
                 f'const m=c.match(/=\\s*(\\[[\\s\\S]*?\\])\\s*;/);'
                 f'if(m){{try{{const d=eval(m[1]);console.log(JSON.stringify(d));}}'
                 f'catch(e){{console.log("[]");}}}}else{{console.log("[]");}}'],
                capture_output=True, text=True, timeout=10
            )
            if result.stdout.strip().startswith("["):
                data = json.loads(result.stdout.strip())
                words.extend(data)
                print(f"[data] loaded {len(data)} words from {js_file.name}")
        except Exception as e:
            print(f"[data] failed {js_file.name}: {e}")

    return jsonify(words)


# ============================================================
# 语音 API (edge-tts)
# ============================================================

@app.route("/api/spelling/speak")
def api_spelling_speak():
    word = request.args.get("word", "")
    if not word:
        return jsonify({"error": "word required"}), 400

    cache_file = SPEECH_CACHE_DIR / f"{word.lower().replace(' ','_')}.mp3"

    if not cache_file.exists():
        try:
            result = subprocess.run(
                ["edge-tts", "--voice", "en-US-JennyNeural",
                 "--text", word, "--write-media", str(cache_file),
                 "--rate=+0%"],
                capture_output=True, text=True, timeout=30
            )
            if result.returncode != 0:
                return jsonify({"error": f"TTS failed: {result.stderr[:100]}"}), 500
        except FileNotFoundError:
            return jsonify({"error": "edge-tts not installed"}), 500
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return send_file(str(cache_file.resolve()), mimetype="audio/mpeg")


# ============================================================
# AI 拼写诊断 API
# ============================================================

def _get_deepseek_config():
    """读取 deepseek API 配置"""
    api_key = None
    base_url = "https://api.deepseek.com/v1"

    env_path = os.path.expanduser("~/.hermes/.env")
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line.startswith("DEEPSEEK_API_KEY="):
                    api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
                elif line.startswith("OPENAI_API_KEY=") and not api_key:
                    api_key = line.split("=", 1)[1].strip().strip('"').strip("'")

    config_path = os.path.expanduser("~/.hermes/config.yaml")
    if not api_key and os.path.exists(config_path):
        import yaml
        with open(config_path) as f:
            cfg = yaml.safe_load(f)
        models = cfg.get("models", {})
        m = models.get("deepseek-v4-flash", {})
        base_url = m.get("base_url", base_url)
        creds = cfg.get("credential_pool", {})
        deep_creds = creds.get("deepseek", {})
        if isinstance(deep_creds, list) and deep_creds:
            api_key = deep_creds[0].get("api_key", api_key)
        elif isinstance(deep_creds, dict):
            api_key = deep_creds.get("api_key", api_key)

    return api_key, base_url


def _rule_based_diagnose(word, user_attempt):
    """离线规则分析"""
    word = word.lower().strip()
    user_attempt = user_attempt.lower().strip()

    error_positions = []
    for i in range(max(len(word), len(user_attempt))):
        c1 = word[i] if i < len(word) else ''
        c2 = user_attempt[i] if i < len(user_attempt) else ''
        if c1 != c2:
            error_positions.append(i)

    error_positions = sorted(set(error_positions))

    if not error_positions:
        return {"correct": True, "error_positions": [], "drills": [],
                "feedback": "Perfect! No mistakes!"}

    drills = []
    if len(error_positions) > 0:
        drills.append({
            "blank_positions": error_positions,
            "hint": "These letters need practice"
        })
    if len(error_positions) >= 3:
        mid = len(error_positions) // 2
        drills.append({
            "blank_positions": error_positions[:mid],
            "hint": "First part"
        })
        drills.append({
            "blank_positions": error_positions[mid:],
            "hint": "Second part"
        })

    return {
        "correct": False,
        "error_positions": error_positions,
        "drills": drills,
        "feedback": f"{len(error_positions)} letter(s) need practice"
    }


@app.route("/api/spelling/diagnose", methods=["POST"])
def api_spelling_diagnose():
    data = request.get_json()
    if not data:
        return jsonify({"error": "no data"}), 400

    word = data.get("word", "").lower().strip()
    cn = data.get("cn", "")
    attempt = data.get("attempt", "").lower().strip()

    if not word or not attempt:
        return jsonify({"error": "word and attempt required"}), 400

    if word == attempt:
        return jsonify({
            "correct": True,
            "error_positions": [],
            "drills": [],
            "feedback": "Perfect! No mistakes!"
        })

    api_key, base_url = _get_deepseek_config()
    if not api_key:
        return jsonify(_rule_based_diagnose(word, attempt))

    try:
        from openai import OpenAI
        client = OpenAI(api_key=api_key, base_url=base_url)
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[
                {
                    "role": "system",
                    "content": """You are a spelling tutor for Chinese children learning English.
Given the correct word and the child's attempt, analyze errors and generate targeted drills.

Output ONLY valid JSON, no other text:
{
  "correct": false,
  "error_positions": [0, 3],
  "error_analysis": "short description in SIMPLE Chinese",
  "drills": [
    {
      "blank_positions": [0, 3],
      "hint": "why this letter is tricky (in Chinese)"
    }
  ]
}

Rules:
- Compare letter by letter. If user is shorter, extra letters in word are errors.
- Generate 2-3 drills at most. Each drill blanks a different subset.
- Focus on commonly confused letters.
- Keep descriptions in SIMPLE Chinese for a child."""
                },
                {
                    "role": "user",
                    "content": f"Word: '{word}' ({cn})\nChild wrote: '{attempt}'"
                }
            ],
            temperature=0.1,
            max_tokens=300,
        )

        text = response.choices[0].message.content.strip()
        json_match = re.search(r'\{.*\}', text, re.DOTALL)
        if json_match:
            result = json.loads(json_match.group())
            result["correct"] = False
            for drill in result.get("drills", []):
                drill["blank_positions"] = [p for p in drill["blank_positions"]
                                            if 0 <= p < len(word)]
            return jsonify(result)
    except Exception as e:
        print(f"[diagnose] API error: {e}")

    return jsonify(_rule_based_diagnose(word, attempt))


# ============================================================
# 版本管理 API + 页面
# ============================================================

VERSIONS_FILE = HERE / "versions.json"

def _load_global_versions():
    if VERSIONS_FILE.exists():
        return json.loads(VERSIONS_FILE.read_text(encoding="utf-8"))
    return []

def _save_global_versions(versions):
    VERSIONS_FILE.write_text(json.dumps(versions, ensure_ascii=False, indent=2), encoding="utf-8")


@app.route("/api/versions/list")
def api_versions_list():
    """返回所有版本列表"""
    return jsonify(_load_global_versions())


@app.route("/api/versions/backup", methods=["POST"])
def api_versions_backup():
    """手动备份"""
    data = request.get_json() or {}
    note = data.get("note", "")

    src = WORD_GAME_DIR / "spelling-drill.html"
    if not src.exists():
        return jsonify({"error": "spelling-drill.html not found"}), 404

    versions = _load_global_versions()
    next_ver = (versions[-1]["version"] + 1) if versions else 1

    bak_name = f"spelling-drill.v{next_ver:03d}.bak"
    bak_path = HERE / "versions" / bak_name
    HERE.joinpath("versions").mkdir(parents=True, exist_ok=True)

    import shutil, datetime
    shutil.copy2(str(src), str(bak_path))

    # 检查是否与上一版本重复
    if versions:
        prev_bak = HERE / "versions" / f"spelling-drill.v{versions[-1]['version']:03d}.bak"
        if prev_bak.exists() and src.read_bytes() == prev_bak.read_bytes():
            bak_path.unlink()
            return jsonify({"message": "No changes since last version, skipped", "version": versions[-1]["version"]})

    # 取消旧标记
    for v in versions:
        v["is_current"] = False

    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    new_ver = {
        "version": next_ver,
        "date": ts,
        "note": note or f"Backup at {ts}",
        "is_current": True,
        "file": bak_name
    }
    versions.append(new_ver)
    _save_global_versions(versions)

    return jsonify({"message": f"Version v{next_ver:03d} saved", "version": next_ver})


@app.route("/api/versions/restore", methods=["POST"])
def api_versions_restore():
    """回滚到指定版本"""
    data = request.get_json() or {}
    ver = int(data.get("version", 0))

    versions = _load_global_versions()
    target = None
    for v in versions:
        if v["version"] == ver:
            target = v
            break

    if not target:
        return jsonify({"error": f"Version v{ver:03d} not found"}), 404

    bak_path = HERE / "versions" / target["file"]
    if not bak_path.exists():
        return jsonify({"error": f"Backup file {target['file']} lost"}), 404

    import shutil, datetime

    # 自动备份当前版本
    src = WORD_GAME_DIR / "spelling-drill.html"
    if src.exists():
        next_ver = (versions[-1]["version"] + 1) if versions else 1
        auto_bak = HERE / "versions" / f"spelling-drill.v{next_ver:03d}.bak"
        shutil.copy2(str(src), str(auto_bak))
        for v in versions:
            v["is_current"] = False
        ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        versions.append({
            "version": next_ver,
            "date": ts,
            "note": f"Auto backup before restore to v{ver:03d}",
            "is_current": False,
            "file": f"spelling-drill.v{next_ver:03d}.bak"
        })

    # 执行回滚
    shutil.copy2(str(bak_path), str(src))

    for v in versions:
        v["is_current"] = (v["version"] == ver)
    _save_global_versions(versions)

    return jsonify({
        "message": f"Restored to v{ver:03d} ({target['date']})",
        "version": ver,
        "note": target.get("note", "")
    })


VERSIONS_PAGE_HTML = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>edu-web 版本管理</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,'Microsoft YaHei',sans-serif;background:#1a1a2e;color:#eee;padding:20px;max-width:800px;margin:0 auto}
h1{font-size:22px;color:#FF6B35;margin-bottom:16px}
h2{font-size:16px;color:#999;margin-bottom:12px}
.version-list{list-style:none}
.version-item{background:#16213e;border-radius:10px;padding:14px 18px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center}
.version-item.current{border:2px solid #FF6B35}
.version-info .vid{font-weight:700;color:#FF6B35;font-size:16px}
.version-info .vdate{font-size:12px;color:#999;margin-top:2px}
.version-info .vnote{font-size:13px;color:#ccc;margin-top:4px}
.actions{display:flex;gap:8px}
.btn{background:#333;color:#eee;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px}
.btn:hover{background:#444}
.btn.restore{background:#FF6B35;color:#fff;font-weight:600}
.btn.restore:disabled{background:#555;cursor:not-allowed}
.btn.backup{background:#4fc3f7;color:#fff;font-weight:600;width:100%;padding:12px;font-size:15px;margin-bottom:16px}
.toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#16213e;border:1px solid #4fc3f7;padding:12px 24px;border-radius:8px;font-size:14px;display:none;z-index:999}
.status-ok{color:#00B894}
.status-err{color:#E17055}
.loading{opacity:0.6;pointer-events:none}
</style>
</head>
<body>
<h1>📚 edu-web 版本管理</h1>
<p style="color:#999;margin-bottom:16px;font-size:13px">
  spelling-drill.html 版本历史。每次修改前自动备份，可随时回滚。
</p>

<button class="btn backup" onclick="manualBackup()">📦 手动备份当前版本</button>

<div id="versionList">
  <p style="color:#666">Loading...</p>
</div>

<div class="toast" id="toast"></div>

<script>
async function loadVersions(){
  var el=document.getElementById('versionList');
  el.classList.add('loading');
  try{
    var resp=await fetch('/api/versions/list');
    var versions=await resp.json();
    if(versions.length===0){
      el.innerHTML='<p style="color:#666">No versions yet.</p>';
      return;
    }
    var h='<h2>'+versions.length+' versions</h2><ul class="version-list">';
    for(var i=versions.length-1;i>=0;i--){
      var v=versions[i];
      var isCur=v.is_current?' current':'';
      var note=v.note?'<div class="vnote">'+v.note+'</div>':'';
      var btnDisabled=v.is_current?' disabled':'';
      var btnText=v.is_current?'Current':'Restore';
      h+='<li class="version-item'+isCur+'">'+
        '<div class="version-info">'+
        '<span class="vid">v'+String(v.version).padStart(3,'0')+'</span> '+
        '<span class="vdate">'+v.date+'</span>'+
        note+
        '</div>'+
        '<div class="actions">'+
        '<button class="btn restore" onclick="restoreVersion('+v.version+')"'+btnDisabled+'>'+btnText+'</button>'+
        '</div>'+
        '</li>';
    }
    h+='</ul>';
    el.innerHTML=h;
  }catch(e){
    el.innerHTML='<p style="color:#E17055">Error: '+e.message+'</p>';
  }
  el.classList.remove('loading');
}

async function restoreVersion(ver){
  if(!confirm('确定回滚到 v'+String(ver).padStart(3,'0')+'？当前版本会自动备份。')) return;
  var btn=event.target; btn.disabled=true; btn.textContent='...';
  try{
    var resp=await fetch('/api/versions/restore',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({version:ver})
    });
    var result=await resp.json();
    if(result.error){
      showToast('❌ '+result.error,'err');
    }else{
      showToast('✅ '+result.message,'ok');
      loadVersions();
    }
  }catch(e){
    showToast('❌ '+e.message,'err');
  }
  btn.disabled=false; btn.textContent='Restore';
}

async function manualBackup(){
  var btn=event.target; btn.disabled=true; btn.textContent='Backing up...';
  try{
    var resp=await fetch('/api/versions/backup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({note:'Manual backup'})
    });
    var result=await resp.json();
    if(result.message){
      showToast('✅ '+result.message,'ok');
      loadVersions();
    }
  }catch(e){
    showToast('❌ '+e.message,'err');
  }
  btn.disabled=false; btn.textContent='📦 手动备份当前版本';
}

function showToast(msg,type){
  var el=document.getElementById('toast');
  el.textContent=msg;
  el.className='toast '+(type==='ok'?'status-ok':'status-err');
  el.style.display='block';
  setTimeout(function(){el.style.display='none';},3000);
}

loadVersions();
</script>
</body>
</html>"""


@app.route("/versions/<filename>")
def versions_page(filename):
    """版本管理Web页面"""
    return render_template_string(VERSIONS_PAGE_HTML)


@app.route("/")
def index():
    return jsonify({
        "service": "edu-web — 韩佑心/韩佑安 教育AI工具",
        "apis": {
            "spelling/data": "GET /api/spelling/data",
            "spelling/speak": "GET /api/spelling/speak?word=X",
            "spelling/diagnose": "POST /api/spelling/diagnose",
            "versions": "GET /versions/spelling-drill.html  (Web UI)",
            "versions/backup": "POST /api/versions/backup",
            "versions/restore": "POST /api/versions/restore"
        }
    })


@app.route("/<path:filename>")
def static_files(filename):
    """从 word-game 目录提供静态文件（HTML, JS 等）"""
    fpath = WORD_GAME_DIR / filename
    if fpath.exists() and fpath.is_file():
        return send_file(str(fpath.resolve()))
    return jsonify({"error": "not found"}), 404


# ============================================================
# 启动
# ============================================================

def run_dev(host="0.0.0.0", port=5001, debug=True):
    print(f"📚 edu-web (教育工具) 启动: http://{host}:{port}")
    print(f"   单词数据: {WORD_GAME_DIR}")
    print(f"   语音缓存: {SPEECH_CACHE_DIR}")
    print(f"   API:")
    print(f"     GET  /api/spelling/data")
    print(f"     GET  /api/spelling/speak?word=X")
    print(f"     POST /api/spelling/diagnose")
    app.run(host=host, port=port, debug=debug)


if __name__ == "__main__":
    run_dev()
