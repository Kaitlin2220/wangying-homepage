/**
 * 网站内容配置（唯一推荐编辑入口）
 * ------------------------------------------------------------
 * 修改引号中的文字即可更新网站；不要删除字段名、逗号或括号。
 * 图片路径相对于 kaitlin-portfolio 文件夹，例如：assets/avatar.jpg
 * 项目 visible 改为 false 可隐藏；调整 projects 顺序即可调整卡片顺序。
 */
window.SITE_CONTENT = {
  meta: {
    language: "zh-CN",
    title: "Kaitlin · 个人网站",
    description: "Kaitlin 的过往经历，记录点滴成长",
    themeColor: "#f7f1e7",
  },

  notice: {
    visible: true,
    badge: "WORK IN PROGRESS",
  },

  brand: {
    mark: "K",
    name: "Kaitlin",
    suffix: "studio",
  },

  navigation: [
    { label: "个人资料", href: "#profile" },
    { label: "作品", href: "#work" },
    { label: "技能", href: "#about" },
    { label: "聊一聊", href: "#contact", primary: true },
  ],

  hero: {
    availability: "Open to opportunities · 2026",
    titleBefore: "AI时代",
    titleHighlight: "VibeCoding",
    titleAfter: "选手",
    introLine1: "嗨，我是王莹 Kaitlin。",
    introLine2: "善于用数据理解问题、借助 AI 提升效率，并推动想法落地的经济学硕士生。",
    primaryButton: { label: "了解我", href: "#profile" },
    secondaryButton: { label: "GitHub", href: "https://github.com/Kaitlin2220" },
    skills: ["产品运营", "服务运营", "AI 产品实践"],
    portrait: {
      // 填入图片路径即可替换插画，例如 assets/avatar.jpg；留空则保留插画。
      image: "assets/kaitlin-portrait.jpg",
      imageAlt: "Kaitlin 在绿色山坡前的户外照片",
      placeholderLabel: "替换为你的真人照片",
      captionLeft: "Kaitlin / Product & Data",
      captionRight: "📍 广州",
    },
    floatingMetric: { label: "公开作品", value: "4 / 4" },
    floatingNoteLine1: "2027届硕士，",
    floatingNoteLine2: "暨南大学 ✦",
  },

  stats: [
    { value: "4", label: "个公开项目" },
    { value: "3", label: "段实习" },
    { value: "TOP 10%", label: "硕士专业排名" },
  ],

  profile: {
    index: "01 / PROFILE",
    titleBefore: "关于",
    titleHighlight: "王莹 Kaitlin",
    description: "2027 届经济学硕士，具备产品运营、服务策略与 AI 工具落地经验。关注如何把业务问题拆成清晰流程，再用数据和自动化推动解决。",
    role: "产品运营 / 服务运营 ",
    location: "广州",
    status: "Open to opportunities · 2027 届",
    highlights: [
      { value: "20%", label: "AI 质检录入效率提升，并推广至团队使用" },
      { value: "4个", label: "小小的AIcoding产品" },
      { value: "4 / 63", label: "硕士 GPA 排名，专业前 10%" },
      { value: "2 次", label: "校级优秀学生一等奖学金" },
    ],
    education: [
      {
        school: "暨南大学",
        degree: "经济学硕士 · 西方经济学",
        period: "2024.09 — 2027.07（预计）",
        detail: "GPA 3.84 / 5.0 · 排名 4 / 63（前 10%）",
        courses: ["高级计量经济学（88）", "高级宏观经济学（96）", "高级微观经济学", "行为经济学", "消费者理论"],
      },
      {
        school: "暨南大学",
        degree: "经济学学士 · 国际经济与贸易（全英）",
        period: "2020.09 — 2024.07",
        detail: "全英授课，可独立读写英文行业报告与学术文献",
        courses: ["金融学", "财务管理", "证券投资学", "国际金融", "货币银行学"],
      },
    ],
    certificates: ["CET-6 · 560", "基金从业资格证", "计算机二级 · Python"],
    experience: [
      {
        company: "影石创新 Insta360",
        role: "服务运营实习生",
        period: "2026.07 — 2026.08",
        location: "深圳",
        bullets: [
          {
            title: "履约质量监控",
            text: "依据售后质检 SOP 每日抽检约 10 单维修工单，从服务时效、维修操作规范、图片清晰度与标签准确性等维度识别异常，协助区域服务点运营及周会数据支持。",
          },
          {
            title: "异常归因与闭环",
            text: "结合维修工单、非满分评价与 UGC 反馈建立一级、二级、子标签归因，按产品型号、区域和服务点追踪高频问题；跟进服务点差评反馈与处理闭环。",
          },
          {
            title: "流程诊断与需求推进",
            text: "分析寄修、自助寄件及官网指引等体验问题并提出优化方向；针对某型号“按键异响”拆分类型、区域与服务点形成专项分析，推进至产品会议排期讨论。",
          },
          {
            title: "AI 质检提效",
            text: "使用Codex与飞书CLI搭建 AI 辅助质检工具，自动处理正常工单评分与标签填写；填写效率提升约 20%，由 3 位同事持续使用 2 周。",
          },
        ],
      },
      {
        company: "龙腾出行",
        role: "产品运营实习生",
        period: "2026.03 — 2026.06",
        location: "广州",
        bullets: [
          "系统需求与项目推进：参与海外本地生活频道建设，覆盖需求评审、PRD 撰写、Figma 原型审查、功能验收、上线反馈及迭代跟进",
          "流程与标准建设：梳理酒店预订、核销及异常处理等 20+ 类高频问题，完成分类归档和标准化应答 SOP；使用 Dify 搭建知识库问答 demo",
          "跨团队协同：负责 5 家海外供应商需求与问题协调，使用英文邮件联动产品、运营及技术团队；用影刀 RPA 自动化约 1/3 重复录入流程，每周节省人工 3 小时以上"

        ],
      },
      {
        company: "钛动科技",
        role: "政府事务实习生",
        period: "2023.10 — 2024.02",
        location: "广州",
        bullets: [
          "追踪广州软件与人工智能产业政策，连续完成 4 期月度政策简报。",
          "协助 10 余项政府资助项目材料准备与申报，深度参与 3 个项目成功立项。",
          "参与市级行业协会会议，整理行业动态并输出结构化研究报告。",
        ],
      },
    ],
  },

  work: {
    index: "02 / SELECTED WORK",
    titleBefore: "从想法到",
    titleHighlight: "可运行产品",
    description: "4 个公开项目，覆盖 AI 知识管理、效率工具、企业 RAG 与学习产品。点击任一项目，查看问题、方案与真实交付。",
    filters: [
      { id: "all", label: "全部项目" },
      { id: "ai", label: "AI 产品" },
      { id: "product", label: "产品实践" },
    ],
  },

  projects: [
    {
      id: "xiaolvshu",
      displayOrder: 1,
      visible: true,
      featured: true,
      themeClass: "project-mint",
      filters: ["product", "ai"],
      card: {
        category: "本地优先 AI 产品 · 2026",
        caseNumber: "CASE 01",
        title: "小绿书 · 私人知识库",
        description: "把小红书公开笔记一键收进本地知识库：图片 OCR、标签批注、全文搜索，再按需同步到 IMA。",
        status: "持续迭代中",
        tags: ["Chrome MV3", "PaddleOCR", "IMA API", "隐私设计"],
        visual: {
          type: "image",
          src: "assets/projects/xiaolvshu-feature-guide-v0324.png",
          alt: "小绿书功能导览图，标注搜索、收藏、IMA 同步、导出、标签索引与卡片整理等功能",
          caption: "FEATURE GUIDE · 12 个核心功能一图看懂",
          wide: true,
        },
      },
      detail: {
        kicker: "CASE 01 · LOCAL-FIRST AI PRODUCT · 2026",
        title: "小绿书 · 私人知识库",
        summary: "一个本地优先的 Chrome 扩展：主动收藏小红书公开笔记，用本机 OCR 找回图片里的信息，再按需同步到 IMA。",
        accent: "#70b991",
        tags: ["Chrome MV3", "PaddleOCR", "IMA API", "隐私设计"],
        metrics: [
          { value: "30 张", label: "单篇正文图片上限" },
          { value: "15 min", label: "失败队列自动重试" },
          { value: "2 种", label: "JSON / Markdown 导出" },
        ],
        story: [
          { title: "Problem / 问题", text: "收藏内容常常停留在平台列表里：难以搜索、图片文字不可检索，也无法和自己的判断、标签及其他知识工具连接。" },
          { title: "Product / 方案", text: "设计“主动采集—本地整理—重新遇见—按需同步”的完整闭环。扩展保存标题、正文、作者、图片与互动信息，支持收藏夹、标签、批注、全文搜索和每日灵感。" },
          { title: "AI / 智能能力", text: "使用本机 PaddleOCR 识别正文轮播图，提供快速与高精度模式；图片任务在后台执行，可失败重试、人工修订，并在 OCR 完成后再同步完整内容。" },
          { title: "Boundary / 产品边界", text: "默认数据存放在 chrome.storage.local，不导出 Cookie；只有用户主动开启时才同步到 IMA。OCR 图片临时下载、识别后删除，模型推理留在本机。" },
          { title: "Delivery / 交付", text: "已完成 Chrome 扩展、知识库管理页、本机 OCR 助手、IMA 同步服务、自动重试队列和 JSON/Markdown 导出，并持续维护公开仓库。" },
        ],
        links: [
          { label: "查看 GitHub", href: "https://github.com/Kaitlin2220/xiaolvshu-extension", primary: true },
        ],
        preview: {
          src: "assets/projects/xiaolvshu-daily.png",
          alt: "小绿书每日灵感功能，从个人档案中随机重现一条旧笔记",
          caption: "DAILY SPARK · 从私人档案中随机重逢一条旧灵感",
        },
      },
    },

    {
      id: "taskboard",
      displayOrder: 4,
      visible: true,
      featured: false,
      wide: true,
      themeClass: "project-orange",
      filters: ["product", "ai"],
      card: {
        category: "AI 效率工具 · 2026",
        caseNumber: "CASE 04",
        title: "my成长计划 · AI 任务看板",
        description: "面向研究生多线任务的 Windows 桌面工具，用 Claude 完成任务拆解、夜间复盘与成长反馈。",
        status: "",
        tags: ["Python", "Claude CLI", "本地数据"],
        visual: {
          type: "image",
          src: "assets/projects/taskboard-overview.png",
          alt: "my成长计划桌面任务看板，左侧为任务分类，右侧为 AI 助手",
          caption: "",
          wide: false,
        },
      },
      detail: {
        kicker: "CASE 04 · AI PRODUCTIVITY TOOL · 2026",
        title: "my成长计划 · AI 任务看板",
        summary: "一个陪伴研究生处理多线任务的 Windows 桌面看板，把任务、日历、成长记录和 Claude 助手放进同一个本地工作流。",
        accent: "#ff653e",
        tags: ["Python", "Claude CLI", "Tkinter", "本地数据"],
        metrics: [
          { value: "22:30", label: "每日自动复盘" },
          { value: "6 维", label: "成长雷达评估" },
          { value: "15 个", label: "阶段成就节点" },
        ],
        story: [
          { title: "Problem / 问题", text: "毕业论文、小论文、求职和生活任务并行时，普通待办工具只负责记录，却很少帮助用户复盘、拆解和看见长期成长。" },
          { title: "Product / 方案", text: "用一周日历、分类任务、自动结转、成就时间轴和成长雷达组成每日工作台；全部进度写入 Markdown 与 JSON，便于回溯和迁移。" },
          { title: "AI / 智能能力", text: "Claude 助手支持自然语言问答、任务改期、步骤拆解和文件创建；每天 22:30 基于当日记录生成总结与次日建议。" },
          { title: "Experience / 体验", text: "通过每日语录、盲盒插图、祝贺语和成长雷达降低长期计划的压迫感，让反馈既有用，也更有人情味。" },
          { title: "Delivery / 交付", text: "完成约 2,000 行单文件桌面应用、系统托盘、全局热键、高 DPI 适配，以及去私密化的公开版本。" },
        ],
        links: [
          { label: "查看 GitHub", href: "https://github.com/Kaitlin2220/when_my_mbti_includes_j", primary: true },
        ],
        preview: {
          src: "assets/projects/taskboard-overview.png",
          alt: "my成长计划桌面任务看板界面",
          caption: "DESKTOP WORKSPACE · 任务、周历与 AI 助手同屏协作",
        },
      },
    },

    {
      id: "knowledge",
      displayOrder: 3,
      visible: true,
      featured: false,
      themeClass: "project-yellow",
      filters: ["product", "ai"],
      card: {
        category: "RAG 应用 · 2026",
        caseNumber: "CASE 03",
        title: "点子开关 · 企业知识库助手",
        description: "将产品、合同、售后与流程资料整理成可检索、可测试、守边界的 Dify 问答助手。",
        status: "",
        tags: ["Dify", "RAG", "知识架构", "Prompt"],
        visual: {
          type: "knowledge",
          brand: "点子开关",
          state: "知识库在线",
          question: "轻装版和认真版有什么区别？",
          answer: "我会严格根据企业知识库，从交付内容、周期和适用场景三个方面回答。",
          flow: ["文档", "分段", "召回", "回答"],
        },
      },
      detail: {
        kicker: "CASE 03 · RAG APPLICATION · 2026",
        title: "点子开关 · 企业知识库助手",
        summary: "一个基于 Dify 的企业知识库 Demo，把企业介绍、产品、价格、合同、售后与流程资料整理成有边界的问答服务。",
        accent: "#ffd84c",
        tags: ["Dify", "RAG", "知识架构", "Prompt 设计"],
        metrics: [
          { value: "30 个", label: "召回测试问题" },
          { value: "8 张", label: "结构化业务表" },
          { value: "1 个", label: "在线聊天 Demo" },
        ],
        story: [
          { title: "Problem / 问题", text: "企业资料散落在长文档和业务表格里，客服、销售与内部员工需要反复翻找，也容易给出不一致或越界的答案。" },
          { title: "Knowledge / 知识设计", text: "围绕公司、产品套餐、客户需求、合同付款、售后时效、角色权限与 FAQ 建立主题结构，并准备结构化 CSV 表支持精确检索。" },
          { title: "Guardrails / 回答边界", text: "提示词要求只依据知识库回答；价格、合同、财务、隐私等敏感问题不得猜测，证据不足时明确转人工确认。" },
          { title: "Evaluation / 验证", text: "设计 30 个测试问题验证召回与回答质量，同时覆盖同义表达、套餐对比、流程查询和知识库外问题。" },
          { title: "Delivery / 交付", text: "完成知识库文档、8 张业务表、Dify 聊天应用和 GitHub Pages 嵌入页。" },
        ],
        links: [
          { label: "查看 GitHub", href: "https://github.com/Kaitlin2220/Enterprise-Knowledge-Base", primary: true },
        ],
        preview: null,
      },
    },

    {
      id: "words",
      displayOrder: 2,
      visible: true,
      featured: false,
      wide: false,
      themeClass: "project-blue",
      filters: ["product"],
      card: {
        category: "学习产品 · 2026",
        caseNumber: "CASE 02",
        title: "初中英语词汇学习网站",
        description: "覆盖学习、测试、游戏与进度反馈的纯前端产品，承载 46 个单元、1,332 条词汇。",
        status: "",
        tags: ["JavaScript", "Web Speech", "本地进度"],
        visual: {
          type: "image",
          src: "assets/projects/words-practice.png",
          alt: "初中英语词汇网站的四种练习模式",
          caption: "",
          wide: false,
        },
      },
      detail: {
        kicker: "CASE 02 · LEARNING PRODUCT · 2026",
        title: "初中英语词汇学习网站",
        summary: "一个无需安装、打开即用的纯前端词汇学习产品，覆盖单词学习、练习测试、游戏和学习进度。",
        accent: "#2864ed",
        tags: ["JavaScript", "Web Speech API", "游戏化", "localStorage"],
        metrics: [
          { value: "1,332", label: "条词汇记录" },
          { value: "46", label: "个教材单元" },
          { value: "4", label: "个完整学习模块" },
        ],
        story: [
          { title: "Problem / 问题", text: "单纯按词表背诵缺少即时反馈，也很难针对薄弱词汇安排不同类型的练习。" },
          { title: "Product / 方案", text: "围绕“学习—测试—游戏—进度”设计四个页面，支持卡片翻转、难度标记、英中互译、听力和限时挑战。" },
          { title: "Experience / 体验", text: "使用浏览器发音、动画、图表和小游戏降低重复练习的枯燥感；按教材册别和 Unit 组织内容，保持低学习门槛。" },
          { title: "Data / 数据", text: "整理 46 个单元、1,332 条词汇，并编写转换脚本将原始文本生成前端可直接加载的结构化数据。" },
          { title: "Delivery / 交付", text: "采用 HTML、原生 JavaScript 与 localStorage，无需后端和构建工具，已部署至 GitHub Pages。" },
        ],
        links: [
          { label: "查看 GitHub", href: "https://github.com/Kaitlin2220/words-website", primary: true },
          { label: "在线体验", href: "https://kaitlin2220.github.io/words-website/", primary: false },
        ],
        preview: {
          src: "assets/projects/words-practice.png",
          alt: "英语词汇学习网站的练习模式选择页",
          caption: "PRACTICE MODES · 英译中、中译英、听力与限时挑战",
        },
      },
    },
  ],

  about: {
    index: "03 / SKILLS",
    titleLine1: "AI、产品与",
    titleHighlight: "数据工具栈",
    description: "能够使用 AI Agent、产品设计与数据分析工具完成需求梳理、原型设计、知识库搭建、流程自动化和业务分析。",
    linkLabel: "联系我",
    linkHref: "#contact",
    toolboxLabel: "MY TOOLBOX",
    toolboxNote: "持续学习中 ↗",
    tools: [
      { label: "Dify / RAG", color: "blue" },
      { label: "Python", color: "yellow" },
      { label: "Codex", color: "orange" },
      { label: "ClaudeCode", color: "orange" },
      { label: "Figma", color: "white" },
      { label: "Tableau", color: "blue" },
      { label: "SQL", color: "purple" },
      { label: "Prompt", color: "green" },
    ],
  },

  contact: {
    index: "04 / LET'S TALK",
    kicker: "HR，看到这里辛苦啦。",
    titleLine1: "可以给我",
    titleHighlight: "一个面试机会吗？",
    email: "m18302012220@163.com",
    emailButtonLabel: "复制邮箱",
    copiedLabelPrefix: "已复制：",
    githubLabel: "github.com/Kaitlin2220",
    githubUrl: "https://github.com/Kaitlin2220",
  },

  footer: {
    leftText: "Designed & built with curiosity.",
    owner: "Kaitlin",
    backToTop: "回到顶部 ↑",
  },
};
