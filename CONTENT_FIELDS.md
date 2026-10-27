# 网站字段修改指南

网站的可编辑内容集中在 [`site-content.js`](./site-content.js)。日常改文字、数字、链接或项目顺序时，只需要编辑这一份文件。

## 最常修改的个人信息

| 配置路径 | 页面用途 | 修改提示 |
|---|---|---|
| `meta.title` | 浏览器标签页标题 | 建议包含姓名和求职方向 |
| `meta.description` | 搜索引擎摘要 | 用一句话概括个人定位 |
| `hero.availability` | 首屏求职状态 | 可写毕业年份、到岗时间 |
| `hero.titleBefore` / `titleHighlight` / `titleAfter` | 首屏大标题 | 三段会组合成一句标题 |
| `hero.introLine1` / `introLine2` | 首屏个人介绍 | 建议控制在两行内 |
| `hero.skills` | 首屏能力标签 | 可自由增删 |
| `hero.portrait.image` | 透明真人图路径 | 当前为 `assets/kaitlin-portrait-cutout.png` |
| `hero.portrait.fallbackImage` | 图片加载失败时的备用照片 | 保留原始户外照片 |
| `hero.portrait.locationLabel` | 人物前景地点贴片 | 当前为广州 · 暨南大学 |
| `hero.portrait.sticker` | 黄色贴片 | 用 `\n` 表示换行 |
| `profile.featuredExperience.metricValue` | 影石重点成果人数 | 当前为 `5 名`；同步修改 `experience` 中的正文 |
| `profile.supportingExperiences` | 龙腾与研究的简要成果 | 每项有标题、数字、说明及展开链接 |
| `contact.email` | 复制邮箱按钮 | 当前为 `m18302012220@163.com` |
| `contact.githubLabel` / `githubUrl` | GitHub 文案与链接 | 链接必须以 `https://` 开头 |
| `footer.owner` | 页脚署名 | 当前为 Kaitlin |

出于公开展示的隐私考虑，当前页面没有放手机号、出生日期和性别。如果以后需要增加，建议优先放在单独的 PDF 简历中。

## 字段分组

### `notice`

页面最上方的提示条。将 `visible` 改成 `false` 可隐藏。`badge` 是左侧小标签，`text` 是后面的说明文字；不填写 `text` 时只显示标签。

### `brand` 与 `navigation`

左上角品牌名和导航菜单。导航项可以增删或调整顺序；`href` 应与页面区块的 id 对应，如 `#profile`、`#work`。

### `hero`

首屏的状态、三行标题、介绍、按钮、能力标签、透明真人图、地点贴片和黄色贴片。

更换真人照片：

1. 把透明背景人物图放入 `assets/`，建议使用 PNG；普通照片也能展示，但不具备透明分层效果。
2. 将 `hero.portrait.image` 改为图片相对路径，例如 `"assets/my-cutout.png"`；调整构图需同时检查 `styles.css` 中的 `.portrait-photo`。
3. 修改 `hero.portrait.imageAlt`，用一句话描述图片。

### `stats`

首屏下方浅色数据条。每项包含 `value` 和 `label`，当前布局采用 3 项。

### `profile`

经历区及教育资料的数据来源，分为：

- `featuredExperience`：影石图解主卡；`experienceIndex` 指向完整实习数组，其他字段控制配图、短描述、数字和标签
- `supportingExperiences`：两张补充成果卡，`href` 对应要展开的详细经历
- `research`：完整研究经历，包含论文角色、时间、简介及要点
- `education`：教育背景，每项含 `school`、`degree`、`period`、`detail`、`courses`（主修课程）
- `certificates`：教育背景下方的证书标签
- `experience`：实习经历，每项含 `company`、`role`、`period`、`location`、`bullets`

完整实习经历在经历区的展开项中显示；本硕教育、主修课程与证书在教育与技能区的展开项中显示。调整 `experience` 数组顺序时，需同步检查 `featuredExperience.experienceIndex`。

兼容旧版本而保留的 `profile.role`、`location`、`status`、`highlights`，以及 `hero.floatingMetric`、`floatingNoteLine1`、`floatingNoteLine2`、`portrait.captionLeft` 等字段不再控制新版展示。优先编辑本指南列出的新字段。

### `work`

作品区标题、介绍和筛选按钮。筛选项的 `id` 必须与项目的 `filters` 对应。

### `projects`

完整项目数组。当前展示 4 个项目：小绿书、my成长计划、点子开关、初中英语词汇学习网站。

每个项目包含：

- `id`：唯一英文标识
- `visible`：`true` 显示，`false` 隐藏
- `displayOrder`：首页展示顺序，数字越小越靠前
- `featured`：重点展示卡，桌面上两张并排，手机上各占一行；当前为小绿书与任务看板
- `wide`：旧版兼容字段，新布局不使用
- `themeClass`：卡片颜色
- `filters`：所属筛选分类
- `card`：首页卡片内容
- `detail`：点击卡片后弹出的完整案例

重点卡使用 `card.visual.src` 与 `alt` 显示真实截图；非重点卡采用紧凑文字入口，仍可打开完整案例。`detail.metrics` 是案例数据，`detail.story` 是案例叙事，`detail.links` 是外部链接，`detail.preview` 是弹窗大图。不要把页面效果图里重绘的截图替代实际项目截图。

隐藏某个项目：

```js
{
  id: "words",
  visible: false,
  // 其余字段保持不变
}
```

### `about`

教育与技能区。`titleLine1`、`titleHighlight` 控制区块标题，`description` 是工具说明，`tools[].label` 控制工具名称；旧版 `color` 字段保留但不再决定颜色，所有工具统一使用蓝色浅底标签。

### `contact` 与 `footer`

- `contact`：联系区标题、邮箱、GitHub 地址及复制后的提示文字
- `footer`：页脚文字、署名和返回顶部文案

## 修改示例

```js
contact: {
  email: "yourname@example.com",
  githubLabel: "github.com/Kaitlin2220",
  githubUrl: "https://github.com/Kaitlin2220",
}
```

修改后刷新浏览器即可看到结果。如果页面突然空白，通常是上一行漏了逗号，或引号、括号没有成对闭合。
