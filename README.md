# Kaitlin Portfolio

面向产品运营、AI 产品与策略运营岗位的静态个人网站。首页优先展示个人资料、教育背景和实习经历，随后呈现 4 个公开项目与技能工具栈。

## 已整合项目

- 小绿书：本地优先的 Chrome 私人知识库，支持 PaddleOCR 与 IMA 同步
- my成长计划：集成 Claude 的 Windows 桌面任务看板
- 点子开关：基于 Dify / RAG 的企业知识库聊天助手
- 初中英语词汇学习网站：覆盖学习、测试、游戏与进度的纯前端产品

`wo-xi` 是小绿书早期开发与验收产物，未作为独立项目重复展示。私有 GitHub 仓库未接入公开网站。

## 本地预览

无需安装依赖。可以直接打开 `index.html`，或在当前目录启动静态服务器：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 修改内容

- 所有文案、个人信息、统计数字、项目详情与外链：编辑 `site-content.js`
- 完整字段解释与修改示例：查看 `CONTENT_FIELDS.md`
- 主色、字体与布局：编辑 `styles.css`
- 真人照片：替换 `assets/kaitlin-portrait.jpg`，或修改 `hero.portrait.image`

## 部署到 GitHub Pages

可创建名为 `Kaitlin2220.github.io` 的公开仓库，把本目录内文件推送到仓库根目录。在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，再选择 `main` 分支和 `/ (root)`。

发布地址将是 `https://Kaitlin2220.github.io`。
