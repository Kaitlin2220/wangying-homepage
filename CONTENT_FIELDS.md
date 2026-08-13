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
| `hero.portrait.image` | 真人照片路径 | 当前为 `assets/kaitlin-portrait.jpg` |
| `hero.portrait.captionLeft` | 照片下方定位 | 职位或个人标签 |
| `hero.portrait.captionRight` | 所在城市 | 当前为广州 |
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

首屏的状态、标题、介绍、按钮、能力标签、照片、照片说明和两张悬浮便签。

更换真人照片：

1. 把图片放入 `assets/`。
2. 将 `hero.portrait.image` 改为图片相对路径，例如 `"assets/my-photo.jpg"`。
3. 修改 `hero.portrait.imageAlt`，用一句话描述图片。

### `stats`

首屏下方黄色数据条。每项包含 `value` 和 `label`，建议保留 3–5 项，优先放可验证的结果。

### `profile`

首页第一部分的个人资料，分为：

- `role`、`location`、`status`：岗位方向、城市和求职状态
- `highlights`：四个快速扫读的履历数据，每项含 `value` 与 `label`
- `education`：教育背景，每项含 `school`、`degree`、`period`、`detail`、`courses`（主修课程）
- `certificates`：教育背景下方的证书标签
- `experience`：实习经历，每项含 `company`、`role`、`period`、`location`、`bullets`

调整数组顺序即可改变页面中的展示顺序。删除一项时，要连同这一项外层的 `{}` 和相邻逗号一起处理。

### `work`

作品区标题、介绍和筛选按钮。筛选项的 `id` 必须与项目的 `filters` 对应。

### `projects`

完整项目数组。当前展示 4 个项目：小绿书、my成长计划、点子开关、初中英语词汇学习网站。

每个项目包含：

- `id`：唯一英文标识
- `visible`：`true` 显示，`false` 隐藏
- `displayOrder`：首页展示顺序，数字越小越靠前
- `featured`：是否占满整行作为主案例
- `wide`：是否使用横向通栏卡片
- `themeClass`：卡片颜色
- `filters`：所属筛选分类
- `card`：首页卡片内容
- `detail`：点击卡片后弹出的完整案例

`card.visual.type` 支持 `image` 和 `knowledge`。`detail.metrics` 是案例数据，`detail.story` 是案例叙事，`detail.links` 是外部链接，`detail.preview` 是弹窗大图。

隐藏某个项目：

```js
{
  id: "words",
  visible: false,
  // 其余字段保持不变
}
```

### `about`

技能工具区。`tools` 中每项包含 `label` 和 `color`；可选颜色为 `blue`、`yellow`、`white`、`orange`、`green`。

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
