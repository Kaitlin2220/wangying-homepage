/**
 * 网站内容配置（唯一推荐编辑入口）
 * ------------------------------------------------------------
 * 修改引号中的文字即可更新网站；不要删除字段名、逗号或括号。
 * 图片路径相对于 kaitlin-portfolio 文件夹，例如：assets/avatar.jpg
 * 项目 visible 改为 false 可隐藏；displayOrder 控制顺序，featured 控制重点展示。
 */
window.SITE_CONTENT = {
  meta: {
    language: "zh-CN",
    title: "王莹 Kaitlin · 运营与 AI 实践",
    description: "王莹 Kaitlin 的个人主页：服务运营、品类运营、数据分析与 AI 工具落地实践。",
    themeColor: "#f7f1e7",
  },

  notice: {
    visible: false,
    badge: "WORK IN PROGRESS",
  },

  brand: {
    mark: "K",
    name: "Kaitlin",
    suffix: "studio",
  },

  navigation: [
    { label: "关于我", href: "#top" },
    { label: "经历", href: "#profile" },
    { label: "作品", href: "#work" },
    { label: "教育与技能", href: "#about" },
    { label: "联系", href: "#contact", primary: true },
  ],

  hero: {
    availability: "2027 届 · OPEN TO OPPORTUNITIES",
    titleBefore: "看懂真实问题",
    titleHighlight: "让数据与 AI",
    titleAfter: "真正落地",
    introLine1: "嗨，我是王莹 Kaitlin。",
    introLine2: "具备服务运营、品类运营与 AI 工具落地经验，习惯从用户反馈和业务数据中定位问题、推进协同与改进。",
    primaryButton: { label: "了解我", href: "#profile" },
    secondaryButton: { label: "看作品", href: "#work" },
    skills: ["服务与品类运营", "数据分析", "AI 提效实践"],
    portrait: {
      // 填入图片路径即可替换插画，例如 assets/avatar.jpg；留空则保留插画。
      image: "assets/kaitlin-portrait-cutout.png",
      fallbackImage: "assets/kaitlin-portrait.jpg",
      imageAlt: "王莹 Kaitlin 的真人照片，身穿白蓝花纹连衣裙，微笑回望",
      placeholderLabel: "替换为你的真人照片",
      captionLeft: "Kaitlin / Operations & AI",
      captionRight: "📍 广州",
      locationLabel: "广州 · 暨南大学",
      sticker: "KEEP\nEXPLORING",
    },
    floatingMetric: { label: "公开作品", value: "4 / 4" },
    floatingNoteLine1: "2027届硕士，",
    floatingNoteLine2: "暨南大学 ✦",
  },

  stats: [
    { value: "4", label: "个公开项目" },
    { value: "3", label: "段实习" },
    { value: "15%", label: "硕士专业前" },
  ],

  profile: {
    index: "01 / EXPERIENCE",
    titleBefore: "把经历，做成",
    titleHighlight: "看得见的能力",
    description: "2027 届经济学硕士，具备服务点运营、海外品类运营与 AI 工具落地经验。能从 VOC、业务指标和一线流程中定位问题，并推动跨团队协同与闭环。",
    role: "服务运营 / 品类运营 / AI 提效",
    location: "广州",
    status: "Open to opportunities · 2027 届",
    highlights: [
      { value: "5 名", label: "AI 返修分析插件已进入组内试用" },
      { value: "140+", label: "国家及城市的海外供给分布分析" },
      { value: "51.3 万", label: "关系性证言文本批量推理" },
      { value: "6 / 44", label: "硕士排名，专业前 15%" },
    ],
    featuredExperience: {
      experienceIndex: 0,
      image: "assets/illustrations/ai-repair-human-review.png",
      imageAlt: "小黑对照一返与二返检测记录，提供标签建议并保留人工复核",
      headline: "让 AI 帮忙读，让判断有依据。",
      description: "从服务点指标和用户反馈出发，把重复的返修比对做成辅助工具，业务规则与人工复核始终保留。",
      metricValue: "5 名",
      metricLabel: "同事试用 AI 返修分析工具",
      tags: ["指标监控", "VOC 分析", "人工复核"],
    },
    supportingExperiences: [
      { icon: "globe", title: "龙腾出行 · 品类运营", value: "140+", label: "国家及城市供给分析", description: "对接 5 家海外供应商，识别区域与品类覆盖空白。", href: "#resume-details" },
      { icon: "document", title: "文本研究 · AI 实践", value: "51.3 万", label: "条文本批量推理", description: "从标签定义、训练集构建到多标签模型微调。", href: "#research-details" },
    ],
    detailsLabel: "展开完整实习经历",
    research: {
      title: "关系性证言与医疗众筹结果研究",
      role: "论文第三作者 · China Economic Review",
      period: "2026.09.30 见刊",
      description: "基于 7,385 个众筹项目与 37.7 万条关系性证言，研究社会关系成员的证言和叙事策略如何影响筹款结果。",
      bullets: [
        { title: "文本分析", text: "负责文本分析模块，定义身份构建、人格评价、境况细节、同情表达等多标签内容策略；使用 DeepSeek API 与 Few-Shot Prompt 构建训练集。" },
        { title: "模型训练", text: "微调 BERT 多标签文本分类模型，针对弱标签补充人工样本，并在验证集优化分类阈值；完成约 51.3 万条文本批量推理，生成结构化文本特征。" },
      ],
    },
    education: [
      {
        school: "暨南大学",
        degree: "经济学硕士 · 西方经济学",
        period: "2024.09 — 2027.07（预计）",
        detail: "均分 89 / 100 · 排名 6 / 44（前 15%）· 校级一等奖学金",
        courses: ["高级计量经济学（88）", "高级宏观经济学（96）"],
      },
      {
        school: "暨南大学",
        degree: "经济学学士 · 国际经济与贸易（全英）",
        period: "2020.09 — 2024.07",
        detail: "GPA 3.87 / 5.0 · 排名 4 / 63（前 10%）· 全英授课",
        courses: ["计量经济学（98）", "宏观经济学（95）", "货币银行学（94）"],
      },
    ],
    certificates: ["CET-6 · 560", "计算机二级 · Python"],
    experience: [
      {
        company: "影石创新 Insta360",
        role: "服务运营实习生",
        period: "2026.07 — 2026.09",
        location: "深圳",
        bullets: [
          {
            title: "服务点运营与指标监控",
            text: "负责北京服务点日常运营支持，跟踪满意度、时效及在制工单等指标；根据 CRM 工单节点识别超时和客诉风险，协同客服、报价、检测及维修人员推进异常工单处理，并定期同步指标达成。",
          },
          {
            title: "VOC 分析与流程改善",
            text: "结合维修工单、用户评价、客服录音及内部沟通记录分析中差评根因；识别报价必修与选修口径不清、正常设备缺少检测附件等风险，推动服务点完善报价及检测留痕规范。",
          },
          {
            title: "AI 返修分析工具",
            text: "针对二返与多返案例人工对比效率低的问题，基于 CRM 场景搭建浏览器插件，自动抓取前后两次检测结果、附件及维修信息，通过“业务硬规则 + AI 模型”生成标签建议与置信度并保留人工复核；已由组内 5 名同事试用。",
          },
          {
            title: "会议与跨团队协同",
            text: "负责部分服务点周会数据准备及会议主持，汇报各服务点指标达成情况，并组织时效或满意度异常服务点说明原因、跟进问题，支持服务问题持续闭环。",
          },
        ],
      },
      {
        company: "龙腾出行",
        role: "品类运营实习生",
        period: "2026.03 — 2026.06",
        location: "广州",
        bullets: [
          "海外供给与市场分析：对接 5 家海外供应商，协调优惠、展示及上线信息；分析全球 140 余个国家及城市的资源分布，识别区域和品类覆盖空白并提出拓展优先级建议。",
          "产品需求协同：参与海外本地生活频道需求评审、PRD 撰写、Figma 原型审查、功能验收及上线反馈，将供应商诉求转化为页面字段与展示逻辑。",
          "AI 与流程提效：使用影刀 RPA 优化重复录入流程，覆盖约 1/3 业务流程，每周节省人工 3 小时以上；使用 Dify 搭建覆盖 20 余类预订、核销及异常问题的知识库问答 Demo。"

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
    titleBefore: "想法落地，",
    titleHighlight: "也亲手做出来",
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
      displayOrder: 2,
      visible: true,
      featured: true,
      wide: false,
      themeClass: "project-orange",
      filters: ["product", "ai"],
      card: {
        category: "AI 效率工具 · 2026",
        caseNumber: "CASE 02",
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
        kicker: "CASE 02 · AI PRODUCTIVITY TOOL · 2026",
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
      displayOrder: 4,
      visible: true,
      featured: false,
      wide: false,
      themeClass: "project-blue",
      filters: ["product"],
      card: {
        category: "学习产品 · 2026",
        caseNumber: "CASE 04",
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
        kicker: "CASE 04 · LEARNING PRODUCT · 2026",
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
    index: "03 / EDUCATION & TOOLS",
    titleLine1: "学习是底色，",
    titleHighlight: "工具让想法往前走",
    description: "能做用户反馈与市场分析、供应商协同、SOP 梳理和跨团队推进，也能使用数据与 AI 工具完成流程优化、知识库搭建和业务分析。",
    linkLabel: "联系我",
    linkHref: "#contact",
    toolboxLabel: "MY TOOLBOX",
    toolboxNote: "持续学习中 ↗",
    tools: [
      { label: "Excel", color: "green" },
      { label: "Python / Stata", color: "yellow" },
      { label: "SQL", color: "purple" },
      { label: "Tableau", color: "blue" },
      { label: "Figma", color: "white" },
      { label: "Dify / RAG", color: "blue" },
      { label: "Codex / Claude", color: "orange" },
      { label: "影刀 RPA", color: "green" },
    ],
  },

  contact: {
    index: "04 / LET'S TALK",
    kicker: "亲爱的HR，看到这里辛苦啦。",
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
