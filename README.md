# Kaitlin Portfolio

面向服务运营、品类运营与数据分析岗位的静态个人网站。采用真人分层首屏、图解经历、两张重点作品卡及可展开的完整履历。

2026-10-28 视觉更新：实现已审核 Demo 的米白、蓝、黄配色与紧凑布局；接入小黑返修分析配图；小绿书与 AI 任务看板并列重点展示。本版人物交互为轻微分层视差，尚未接入真实转头视频；移动端及减少动态效果模式保留静态展示。

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
- 真人照片：`assets/kaitlin-portrait-cutout.png` 是透明人物图；修改 `hero.portrait.image` 可替换，原照片保留为 `hero.portrait.fallbackImage`
- 影石经历配图：`assets/illustrations/ai-repair-human-review.png`
- 全部实习经历、研究内容、本硕教育、课程与证书均保留，可通过对应展开入口查看

## 在线地址

[https://kaitlin2220.github.io/wangying-homepage/](https://kaitlin2220.github.io/wangying-homepage/)

网站通过 GitHub Pages 从 `main` 分支根目录自动发布。
