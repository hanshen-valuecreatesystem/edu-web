# edu-web — 韩佑心/韩佑安 教育AI工具后端

独立 Flask 后端服务，专供韩佑心（小学高年级）和韩佑安（一年级）的学习工具使用。

> ⚠️ **与 invest-system 完全分离**  
> 投资分析系统用 `localhost:5000`，edu-web 用 `localhost:5001`，互不干扰。

---

## 启动

```bash
cd /mnt/e/韩佑心/edu-web
python3 server.py
```

服务在 `http://0.0.0.0:5001` 监听。启动后，`spelling-drill.html` 等前端文件即可正常调用 API。

---

## API 接口

### 1. 单词数据

```
GET /api/spelling/data
```

返回 `E:\韩佑心\英语\word-game\data_u*.js` 中所有单词（JSON 数组）。

### 2. 语音朗读

```
GET /api/spelling/speak?word=firefighter
```

返回 MP3 音频文件。通过 edge-tts 生成，首次访问后自动缓存到 `speech_cache/`。

### 3. AI 拼写诊断

```
POST /api/spelling/diagnose
Content-Type: application/json

{
  "word": "firefighter",     // 正确单词
  "cn": "消防员",            // 中文释义
  "attempt": "firefigher"    // 孩子的输入
}
```

返回：

```json
{
  "correct": false,
  "error_positions": [10],
  "error_analysis": "漏写了字母 't'，'fighter' 中 't' 是容易忘记的。",
  "drills": [
    {
      "blank_positions": [10],
      "hint": "注意 'fighter' 中间有一个 't'，像 'fight' 加上 'er'。"
    }
  ]
}
```

无 API Key 时自动降级为规则分析（逐字母对比）。

---

## 目录结构

```
E:\韩佑心\
├── edu-web\               ← 本服务（后端）
│   ├── server.py           ← Flask 主程序
│   ├── speech_cache\       ← MP3 语音缓存（自动生成）
│   └── README.md
│
├── 英语\
│   ├── word-game\          ← 拼写练习 HTML + 单词数据
│   │   ├── spelling-drill.html  ← 主练习页面
│   │   ├── data_u3.js           ← Unit 3 单词
│   │   ├── data_u6.js           ← Unit 6 单词
│   │   └── data_u78.js          ← Unit 7-8 单词
│   └── ...
│
├── 语文\
├── 数学\
└── 互动学习工具\
```

---

## 多用户支持（规划中）

当前只服务韩佑心，未来韩佑安也会用。两兄弟数据需完全独立。

**设计思路：**

```
E:\韩佑心\  ← 佑心的所有学习数据
└── edu-web\
    ├── server.py
    ├── users\
    │   ├── youxin\          ← 韩佑心的学习数据
    │   │   ├── progress.json   ← 正确率/进度
    │   │   ├── mistakes.json   ← 错词库
    │   │   └── ...
    │   └── youan\           ← 韩佑安的学习数据
    │       ├── progress.json
    │       └── ...
    └── speech_cache\   ← 语音缓存（共享，节省空间）
```

- 前端加用户切换界面
- API 加 `?user=youxin` 参数区分
- 各自单词库、错词库、练习进度互不干扰
- 韩佑安的数据文件放在 `E:\韩佑安\` 还是统一在 `edu-web/` 下，到时候再定

## 扩展其他科目

加新科目只需两步：

1. **加 API 路由**：在 `server.py` 里加一个新的 `@app.route(...)`，比如 `/api/chinese/fill-blank`
2. **写前端 HTML**：放在对应科目目录下，API 地址写 `http://127.0.0.1:5001/api/...`

重启服务后即可使用。

---

## 版本管理（版本回滚）

每次修改 `spelling-drill.html` 前自动备份，支持随时回滚到任一历史版本。

### 方式一：Web 页面（推荐）

打开浏览器访问：

```
http://localhost:5001/versions/spelling-drill.html
```

可查看所有版本、手动备份、一键回滚。回滚前会自动备份当前版本。

### 方式二：命令行

```bash
# 查看版本列表
cd /mnt/e/韩佑心/edu-web && python3 version_manager.py list

# 手动备份（加备注）
cd /mnt/e/韩佑心/edu-web && python3 version_manager.py backup "加了分批功能"

# 回滚到指定版本（自动备份当前版本）
cd /mnt/e/韩佑心/edu-web && python3 version_manager.py restore 3

# 比较两个版本差异
cd /mnt/e/韩佑心/edu-web && python3 version_manager.py diff 1 3

# 清理旧版本（保留最新20个）
cd /mnt/e/韩佑心/edu-web && python3 version_manager.py prune 20
```

### 存储位置

- 备份文件：`edu-web/versions/spelling-drill.v*.bak`
- 版本索引：`edu-web/versions.json`

### 版本策略

- 每次修改页面后，修改前**自动备份**（通过命令行 backup）
- **回滚时**也会自动备份当前版本（双重保险）
- **版本去重**：如果内容无变化，跳过备份
- 可手动清理旧版本，保留最近N个

---

## 依赖

| 依赖 | 用途 |
|------|------|
| `flask` | Web 框架 |
| `edge-tts` | 英语单词语音合成 |
| `openai` | 调用 deepseek API 进行拼写诊断 |

安装：

```bash
pip install flask edge-tts openai
```
