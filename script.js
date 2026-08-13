const fallbackProjectData = {
  xiaolvshu: {
    kicker: "CASE 01 · LOCAL-FIRST AI PRODUCT · 2026",
    title: "小绿书 · 私人知识库",
    summary: "一个本地优先的 Chrome 扩展：主动收藏小红书公开笔记，用本机 OCR 找回图片里的信息，再按需同步到 IMA。",
    accent: "#70b991",
    tags: ["Chrome MV3", "PaddleOCR", "IMA API", "隐私设计"],
    metrics: [
      ["30 张", "单篇正文图片上限"],
      ["15 min", "失败队列自动重试"],
      ["2 种", "JSON / Markdown 导出"],
    ],
    story: [
      ["Problem / 问题", "收藏内容常常停留在平台列表里：难以搜索、图片文字不可检索，也无法和自己的判断、标签及其他知识工具连接。"],
      ["Product / 方案", "设计“主动采集—本地整理—重新遇见—按需同步”的完整闭环。扩展保存标题、正文、作者、图片与互动信息，支持收藏夹、标签、批注、全文搜索和每日灵感。"],
      ["AI / 智能能力", "使用本机 PaddleOCR 识别正文轮播图，提供快速与高精度模式；图片任务在后台执行，可失败重试、人工修订，并在 OCR 完成后再同步完整内容。"],
      ["Boundary / 产品边界", "默认数据存放在 chrome.storage.local，不导出 Cookie；只有用户主动开启时才同步到 IMA。OCR 图片临时下载、识别后删除，模型推理留在本机。"],
      ["Delivery / 交付", "已完成 Chrome 扩展、知识库管理页、本机 OCR 助手、IMA 同步服务、自动重试队列和 JSON/Markdown 导出，并持续维护公开仓库。"],
    ],
    repo: "https://github.com/Kaitlin2220/xiaolvshu-extension",
    preview: "assets/projects/xiaolvshu-daily.png",
    previewAlt: "小绿书每日灵感功能，从个人档案中随机重现一条旧笔记",
    previewCaption: "DAILY SPARK · 从私人档案中随机重逢一条旧灵感",
  },
  taskboard: {
    kicker: "CASE 04 · AI PRODUCTIVITY TOOL · 2026",
    title: "my成长计划 · AI 任务看板",
    summary: "一个陪伴研究生处理多线任务的 Windows 桌面看板，把任务、日历、成长记录和 Claude 助手放进同一个本地工作流。",
    accent: "#ff653e",
    tags: ["Python", "Claude CLI", "Tkinter", "本地数据"],
    metrics: [
      ["22:30", "每日自动复盘"],
      ["6 维", "成长雷达评估"],
      ["15 个", "阶段成就节点"],
    ],
    story: [
      ["Problem / 问题", "毕业论文、小论文、求职和生活任务并行时，普通待办工具只负责记录，却很少帮助用户复盘、拆解和看见长期成长。"],
      ["Product / 方案", "用一周日历、分类任务、自动结转、成就时间轴和成长雷达组成每日工作台；全部进度写入 Markdown 与 JSON，便于回溯和迁移。"],
      ["AI / 智能能力", "Claude 助手支持自然语言问答、任务改期、步骤拆解和文件创建；每天 22:30 基于当日记录生成总结与次日建议。"],
      ["Experience / 体验", "通过每日语录、盲盒插图、祝贺语和成长雷达降低长期计划的压迫感，让反馈既有用，也更有人情味。"],
      ["Delivery / 交付", "完成约 2,000 行单文件桌面应用、系统托盘、全局热键、高 DPI 适配，以及去私密化的公开版本。"],
    ],
    repo: "https://github.com/Kaitlin2220/when_my_mbti_includes_j",
    preview: "assets/projects/taskboard-overview.png",
    previewAlt: "my成长计划桌面任务看板界面",
    previewCaption: "DESKTOP WORKSPACE · 任务、周历与 AI 助手同屏协作",
  },
  knowledge: {
    kicker: "CASE 03 · RAG APPLICATION · 2026",
    title: "点子开关 · 企业知识库助手",
    summary: "一个基于 Dify 的企业知识库 Demo，把企业介绍、产品、价格、合同、售后与流程资料整理成有边界的问答服务。",
    accent: "#ffd84c",
    tags: ["Dify", "RAG", "知识架构", "Prompt 设计"],
    metrics: [
      ["30 个", "召回测试问题"],
      ["8 张", "结构化业务表"],
      ["1 个", "在线聊天 Demo"],
    ],
    story: [
      ["Problem / 问题", "企业资料散落在长文档和业务表格里，客服、销售与内部员工需要反复翻找，也容易给出不一致或越界的答案。"],
      ["Knowledge / 知识设计", "围绕公司、产品套餐、客户需求、合同付款、售后时效、角色权限与 FAQ 建立主题结构，并准备结构化 CSV 表支持精确检索。"],
      ["Guardrails / 回答边界", "提示词要求只依据知识库回答；价格、合同、财务、隐私等敏感问题不得猜测，证据不足时明确转人工确认。"],
      ["Evaluation / 验证", "设计 30 个测试问题验证召回与回答质量，同时覆盖同义表达、套餐对比、流程查询和知识库外问题。"],
      ["Delivery / 交付", "完成知识库文档、8 张业务表、Dify 聊天应用和 GitHub Pages 嵌入页。"],
    ],
    repo: "https://github.com/Kaitlin2220/Enterprise-Knowledge-Base",
  },
  words: {
    kicker: "CASE 02 · LEARNING PRODUCT · 2026",
    title: "初中英语词汇学习网站",
    summary: "一个无需安装、打开即用的纯前端词汇学习产品，覆盖单词学习、练习测试、游戏和学习进度。",
    accent: "#2864ed",
    tags: ["JavaScript", "Web Speech API", "游戏化", "localStorage"],
    metrics: [
      ["1,332", "条词汇记录"],
      ["46", "个教材单元"],
      ["4", "个完整学习模块"],
    ],
    story: [
      ["Problem / 问题", "单纯按词表背诵缺少即时反馈，也很难针对薄弱词汇安排不同类型的练习。"],
      ["Product / 方案", "围绕“学习—测试—游戏—进度”设计四个页面，支持卡片翻转、难度标记、英中互译、听力和限时挑战。"],
      ["Experience / 体验", "使用浏览器发音、动画、图表和小游戏降低重复练习的枯燥感；按教材册别和 Unit 组织内容，保持低学习门槛。"],
      ["Data / 数据", "整理 46 个单元、1,332 条词汇，并编写转换脚本将原始文本生成前端可直接加载的结构化数据。"],
      ["Delivery / 交付", "采用 HTML、原生 JavaScript 与 localStorage，无需后端和构建工具，已部署至 GitHub Pages。"],
    ],
    repo: "https://github.com/Kaitlin2220/words-website",
    live: "https://kaitlin2220.github.io/words-website/",
    preview: "assets/projects/words-practice.png",
    previewAlt: "英语词汇学习网站的练习模式选择页",
    previewCaption: "PRACTICE MODES · 英译中、中译英、听力与限时挑战",
  },
};

const siteContent = window.SITE_CONTENT || {};
const visibleProjects = Array.isArray(siteContent.projects)
  ? siteContent.projects
      .filter((project) => project.visible !== false)
      .sort((left, right) => (left.displayOrder ?? 999) - (right.displayOrder ?? 999))
  : [];
const projectData = visibleProjects.length
  ? Object.fromEntries(visibleProjects.map((project) => [project.id, project.detail]))
  : fallbackProjectData;

const escapeHTML = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const setMixedTitle = (element, before, highlight, after, addBreak = false) => {
  if (!element) return;
  const highlightElement = document.createElement("span");
  highlightElement.className = element.classList.contains("hero-title") ? "word-highlight" : "serif-accent";
  highlightElement.textContent = highlight || "";
  const nodes = [document.createTextNode(before || "")];
  if (addBreak) nodes.push(document.createElement("br"));
  nodes.push(highlightElement, document.createTextNode(after || ""));
  element.replaceChildren(...nodes);
};

const renderProjectVisual = (visual = {}) => {
  if (visual.type === "knowledge") {
    const flow = (visual.flow || []).map((item) => `<span>${escapeHTML(item)}</span>`).join("<b>→</b>");
    return `
      <div class="knowledge-mockup" aria-hidden="true">
        <div class="knowledge-top"><b>${escapeHTML(visual.brand)}</b><span>${escapeHTML(visual.state)}</span></div>
        <div class="chat-bubble chat-user">${escapeHTML(visual.question)}</div>
        <div class="chat-bubble chat-ai"><i>AI</i><p>${escapeHTML(visual.answer)}</p></div>
        <div class="rag-flow">${flow}</div>
      </div>`;
  }

  const classes = ["project-shot"];
  if (visual.wide) classes.push("project-shot-wide");
  if (visual.chart) classes.push("project-shot-chart");
  const caption = visual.caption ? `<figcaption>${escapeHTML(visual.caption)}</figcaption>` : "";
  const callout = visual.calloutValue
    ? `<span class="chart-callout">${escapeHTML(visual.calloutLabel)}<strong>${escapeHTML(visual.calloutValue)}</strong></span>`
    : "";
  return `
    <figure class="${classes.join(" ")}">
      <img src="${escapeHTML(visual.src)}" alt="${escapeHTML(visual.alt)}" loading="lazy" />
      ${caption}${callout}
    </figure>`;
};

const renderProjectCards = (projects) => {
  const grid = document.querySelector(".project-grid");
  if (!grid || !projects.length) return;
  grid.innerHTML = projects
    .map((project) => {
      const card = project.card || {};
      const classes = ["project-card", project.themeClass || "project-blue", "reveal"];
      if (project.featured) classes.push("project-featured");
      if (project.wide) classes.push("project-wide");
      const status = card.status ? `<span class="project-status">${escapeHTML(card.status)}</span>` : "";
      const tags = (card.tags || []).map((tag) => `<li>${escapeHTML(tag)}</li>`).join("");
      return `
        <article class="${classes.join(" ")}" data-tags="${escapeHTML((project.filters || []).join(" "))}">
          <button class="project-hitarea" type="button" data-project="${escapeHTML(project.id)}" aria-label="查看${escapeHTML(card.title)}案例"></button>
          <div class="project-meta">
            <span>${escapeHTML(card.category)}</span>
            <span class="case-number">${escapeHTML(card.caseNumber)}</span>
          </div>
          ${renderProjectVisual(card.visual)}
          <div class="project-copy">
            <div>${status}<h3>${escapeHTML(card.title)}</h3><p>${escapeHTML(card.description)}</p></div>
            <span class="circle-arrow" aria-hidden="true">↗</span>
          </div>
          <ul class="tag-list">${tags}</ul>
        </article>`;
    })
    .join("");
};

const applySiteContent = () => {
  if (!window.SITE_CONTENT) return;
  const content = siteContent;

  document.documentElement.lang = content.meta?.language || "zh-CN";
  document.title = content.meta?.title || document.title;
  const description = document.querySelector('meta[name="description"]');
  if (description && content.meta?.description) description.content = content.meta.description;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor && content.meta?.themeColor) themeColor.content = content.meta.themeColor;

  const notice = document.querySelector(".demo-ribbon");
  if (notice) {
    notice.hidden = content.notice?.visible === false;
    notice.innerHTML = `<span>${escapeHTML(content.notice?.badge)}</span>${escapeHTML(content.notice?.text)}`;
  }

  const brandMark = document.querySelector(".brand-mark");
  const brandName = document.querySelector(".brand > span:last-child");
  if (brandMark) brandMark.textContent = content.brand?.mark || "";
  if (brandName) brandName.innerHTML = `${escapeHTML(content.brand?.name)}<span class="brand-dot">.</span>${escapeHTML(content.brand?.suffix)}`;

  const nav = document.querySelector("[data-nav]");
  if (nav && content.navigation) {
    nav.innerHTML = content.navigation.map((item) =>
      `<a${item.primary ? ' class="nav-cta"' : ""} href="${escapeHTML(item.href)}">${escapeHTML(item.label)}${item.primary ? ' <span aria-hidden="true">↗</span>' : ""}</a>`,
    ).join("");
  }

  const hero = content.hero || {};
  const eyebrow = document.querySelector(".eyebrow");
  if (eyebrow) eyebrow.innerHTML = `<span class="status-dot" aria-hidden="true"></span>${escapeHTML(hero.availability)}`;
  setMixedTitle(document.querySelector(".hero-title"), hero.titleBefore, hero.titleHighlight, hero.titleAfter, true);
  const heroIntro = document.querySelector(".hero-intro");
  if (heroIntro) heroIntro.innerHTML = `${escapeHTML(hero.introLine1)}<br />${escapeHTML(hero.introLine2)}`;
  const heroButtons = document.querySelectorAll(".hero-actions a");
  if (heroButtons[0] && hero.primaryButton) {
    heroButtons[0].href = hero.primaryButton.href;
    heroButtons[0].innerHTML = `${escapeHTML(hero.primaryButton.label)}<span class="button-arrow" aria-hidden="true">↓</span>`;
  }
  if (heroButtons[1] && hero.secondaryButton) {
    heroButtons[1].href = hero.secondaryButton.href;
    heroButtons[1].innerHTML = `${escapeHTML(hero.secondaryButton.label)} <span aria-hidden="true">↗</span>`;
  }
  const skillPills = document.querySelector(".skill-pills");
  if (skillPills) skillPills.innerHTML = (hero.skills || []).map((skill) => `<li>${escapeHTML(skill)}</li>`).join("");

  const portrait = hero.portrait || {};
  const portraitPlaceholder = document.querySelector(".portrait-placeholder");
  const photoLabel = document.querySelector(".photo-label");
  if (portraitPlaceholder && portrait.image) {
    portraitPlaceholder.innerHTML = `<img class="portrait-photo" src="${escapeHTML(portrait.image)}" alt="${escapeHTML(portrait.imageAlt)}" />`;
  } else if (photoLabel) {
    photoLabel.textContent = portrait.placeholderLabel || "";
  }
  const portraitCaptions = document.querySelectorAll(".portrait-caption span");
  if (portraitCaptions[0]) portraitCaptions[0].textContent = portrait.captionLeft || "";
  if (portraitCaptions[1]) portraitCaptions[1].textContent = portrait.captionRight || "";
  const floatingMetric = document.querySelector(".mini-card-data");
  if (floatingMetric) {
    const label = floatingMetric.querySelector("span");
    const value = floatingMetric.querySelector("strong");
    if (label) label.textContent = hero.floatingMetric?.label || "";
    if (value) value.textContent = hero.floatingMetric?.value || "";
  }
  const floatingNote = document.querySelector(".mini-card-note");
  if (floatingNote) floatingNote.innerHTML = `${escapeHTML(hero.floatingNoteLine1)}<br />${escapeHTML(hero.floatingNoteLine2)}`;

  const statsTrack = document.querySelector(".signal-track");
  if (statsTrack && content.stats) {
    statsTrack.innerHTML = content.stats.map((stat, index) =>
      `${index ? '<span class="signal-star" aria-hidden="true">✦</span>' : ""}<div class="signal-item"><strong>${escapeHTML(stat.value)}</strong><span>${escapeHTML(stat.label)}</span></div>`,
    ).join("");
  }

  const profile = content.profile || {};
  const profileHeading = document.querySelector(".profile-section .section-heading");
  if (profileHeading) {
    profileHeading.querySelector(".section-index").textContent = profile.index || "";
    setMixedTitle(profileHeading.querySelector("h2"), profile.titleBefore, profile.titleHighlight, "");
    profileHeading.querySelector(":scope > p").textContent = profile.description || "";
  }
  const profileStatus = document.querySelector(".profile-status");
  const profileRole = document.querySelector("[data-profile-role]");
  const profileLocation = document.querySelector("[data-profile-location]");
  if (profileStatus) profileStatus.textContent = profile.status || "";
  if (profileRole) profileRole.textContent = profile.role || "";
  if (profileLocation) profileLocation.textContent = profile.location ? `📍 ${profile.location}` : "";

  const profileHighlights = document.querySelector("[data-profile-highlights]");
  if (profileHighlights) {
    profileHighlights.innerHTML = (profile.highlights || []).map((item) => `
      <div class="profile-highlight">
        <strong>${escapeHTML(item.value)}</strong>
        <span>${escapeHTML(item.label)}</span>
      </div>`).join("");
  }

  const profileEducation = document.querySelector("[data-profile-education]");
  if (profileEducation) {
    profileEducation.innerHTML = (profile.education || []).map((item) => `
      <article class="education-item">
        <div class="profile-item-topline">
          <h4>${escapeHTML(item.school)}</h4>
          <span>${escapeHTML(item.period)}</span>
        </div>
        <p class="profile-item-role">${escapeHTML(item.degree)}</p>
        <p class="profile-item-detail">${escapeHTML(item.detail)}</p>
        ${(item.courses || []).length ? `
          <div class="education-courses">
            <span>主修课程</span>
            <p>${item.courses.map((course) => escapeHTML(course)).join(" · ")}</p>
          </div>` : ""}
      </article>`).join("");

    if ((profile.certificates || []).length) {
      const certificates = document.createElement("section");
      certificates.className = "certificate-block";
      certificates.innerHTML = `
        <div class="certificate-heading"><span>CERTIFICATES</span><h4>证书</h4></div>
        <ul>${profile.certificates.map((certificate) => `<li>${escapeHTML(certificate)}</li>`).join("")}</ul>`;
      profileEducation.append(certificates);
    }
  }

  const profileExperience = document.querySelector("[data-profile-experience]");
  if (profileExperience) {
    profileExperience.innerHTML = (profile.experience || []).map((item, index) => `
      <article class="experience-item">
        <span class="experience-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <div class="profile-item-topline">
            <h4>${escapeHTML(item.company)}</h4>
            <span>${escapeHTML(item.period)}</span>
          </div>
          <p class="profile-item-role">${escapeHTML(item.role)} · ${escapeHTML(item.location)}</p>
          <ul>${(item.bullets || []).map((bullet) => {
            if (typeof bullet === "string") return `<li>${escapeHTML(bullet)}</li>`;
            return `<li><strong>${escapeHTML(bullet.title)}：</strong>${escapeHTML(bullet.text)}</li>`;
          }).join("")}</ul>
        </div>
      </article>`).join("");
  }

  const work = content.work || {};
  const workHeading = document.querySelector(".work-section .section-heading");
  if (workHeading) {
    workHeading.querySelector(".section-index").textContent = work.index || "";
    setMixedTitle(workHeading.querySelector("h2"), work.titleBefore, work.titleHighlight, "");
    workHeading.querySelector(":scope > p").textContent = work.description || "";
  }
  const filterRow = document.querySelector(".filter-row");
  if (filterRow && work.filters) {
    filterRow.innerHTML = work.filters.map((filter, index) => {
      const count = filter.id === "all" ? visibleProjects.length : visibleProjects.filter((project) => project.filters?.includes(filter.id)).length;
      return `<button class="filter-button${index === 0 ? " is-active" : ""}" type="button" data-filter="${escapeHTML(filter.id)}">${escapeHTML(filter.label)}${filter.id === "all" ? ` <sup>${String(count).padStart(2, "0")}</sup>` : ""}</button>`;
    }).join("");
  }
  renderProjectCards(visibleProjects);

  const about = content.about || {};
  const aboutIntro = document.querySelector(".about-intro");
  if (aboutIntro) {
    aboutIntro.querySelector(".section-index").textContent = about.index || "";
    setMixedTitle(aboutIntro.querySelector("h2"), about.titleLine1, about.titleHighlight, "", true);
    aboutIntro.querySelector("p").textContent = about.description || "";
    const aboutLink = aboutIntro.querySelector(".text-link");
    aboutLink.href = about.linkHref || "#contact";
    aboutLink.innerHTML = `${escapeHTML(about.linkLabel)} <span aria-hidden="true">→</span>`;
  }
  const toolboxLabel = document.querySelector(".toolbox-label");
  const toolboxNote = document.querySelector(".toolbox-note");
  if (toolboxLabel) toolboxLabel.textContent = about.toolboxLabel || "";
  if (toolboxNote) toolboxNote.textContent = about.toolboxNote || "";
  const toolCloud = document.querySelector(".tool-cloud");
  if (toolCloud && about.tools) {
    toolCloud.innerHTML = about.tools.map((tool) => `<span class="tool tool-${escapeHTML(tool.color)}">${escapeHTML(tool.label)}</span>`).join("");
  }

  const contact = content.contact || {};
  const contactContent = document.querySelector(".contact-content");
  if (contactContent) {
    contactContent.querySelector(".section-index").textContent = contact.index || "";
    contactContent.querySelector(".contact-kicker").textContent = contact.kicker || "";
    setMixedTitle(contactContent.querySelector("h2"), contact.titleLine1, contact.titleHighlight, "", true);
    const emailButton = contactContent.querySelector("[data-copy-email]");
    emailButton.dataset.email = contact.email || "";
    emailButton.querySelector("[data-copy-label]").textContent = contact.emailButtonLabel || "复制邮箱";
    const githubLink = contactContent.querySelector(".github-link");
    githubLink.href = contact.githubUrl || "#";
    githubLink.innerHTML = `${escapeHTML(contact.githubLabel)} <span aria-hidden="true">↗</span>`;
  }

  const footer = content.footer || {};
  const footerItems = document.querySelectorAll(".site-footer > *");
  if (footerItems[0]) footerItems[0].textContent = footer.leftText || "";
  if (footerItems[1]) footerItems[1].innerHTML = `© <span data-year></span> ${escapeHTML(footer.owner)}`;
  if (footerItems[2]) footerItems[2].textContent = footer.backToTop || "";
};

applySiteContent();

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const dialog = document.querySelector("[data-dialog]");
const dialogClose = document.querySelector("[data-dialog-close]");
let lastFocusedElement = null;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "打开菜单" : "关闭菜单");
  nav.classList.toggle("is-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开菜单");
    nav.classList.remove("is-open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    document.querySelectorAll("[data-tags]").forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !tags.includes(filter));
    });
  });
});

const renderDialog = (project) => {
  dialog.querySelector("[data-dialog-kicker]").textContent = project.kicker;
  dialog.querySelector("[data-dialog-title]").textContent = project.title;
  dialog.querySelector("[data-dialog-summary]").textContent = project.summary;
  dialog.querySelector("[data-dialog-accent]").style.background = project.accent;

  const tagContainer = dialog.querySelector("[data-dialog-tags]");
  tagContainer.replaceChildren(
    ...project.tags.map((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      return item;
    }),
  );

  const linksContainer = dialog.querySelector("[data-dialog-links]");
  const linkItems = project.links || [];
  if (!linkItems.length && project.repo) linkItems.push({ label: "查看 GitHub", href: project.repo, primary: true });
  if (!linkItems.some((item) => item.label === "在线体验") && project.live) {
    linkItems.push({ label: "在线体验", href: project.live, primary: false });
  }
  linksContainer.replaceChildren(
    ...linkItems.map((item) => {
      const link = document.createElement("a");
      link.className = `dialog-link${item.primary ? " dialog-link-primary" : ""}`;
      link.href = item.href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${item.label} ↗`;
      return link;
    }),
  );

  const preview = dialog.querySelector("[data-dialog-preview]");
  const previewImage = dialog.querySelector("[data-dialog-image]");
  const previewCaption = dialog.querySelector("[data-dialog-caption]");
  const previewData = typeof project.preview === "string"
    ? { src: project.preview, alt: project.previewAlt, caption: project.previewCaption }
    : project.preview;
  preview.classList.toggle("is-visible", Boolean(previewData?.src));
  if (previewData?.src) {
    previewImage.src = previewData.src;
    previewImage.alt = previewData.alt || `${project.title} 项目截图`;
    previewCaption.textContent = previewData.caption || "PROJECT VIEW";
  } else {
    previewImage.removeAttribute("src");
    previewImage.alt = "";
    previewCaption.textContent = "";
  }

  const metricsContainer = dialog.querySelector("[data-dialog-metrics]");
  metricsContainer.replaceChildren(
    ...project.metrics.map((metricData) => {
      const [value, label] = Array.isArray(metricData)
        ? metricData
        : [metricData.value, metricData.label];
      const metric = document.createElement("div");
      metric.className = "case-metric";
      const strong = document.createElement("strong");
      const span = document.createElement("span");
      strong.textContent = value;
      span.textContent = label;
      metric.append(strong, span);
      return metric;
    }),
  );

  const storyContainer = dialog.querySelector("[data-dialog-story]");
  storyContainer.replaceChildren(
    ...project.story.map((storyData) => {
      const [title, copy] = Array.isArray(storyData)
        ? storyData
        : [storyData.title, storyData.text];
      const row = document.createElement("section");
      row.className = "story-row";
      const heading = document.createElement("h3");
      const paragraph = document.createElement("p");
      heading.textContent = title;
      paragraph.textContent = copy;
      row.append(heading, paragraph);
      return row;
    }),
  );
};

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];
    if (!project) return;

    lastFocusedElement = button;
    renderDialog(project);
    dialog.showModal();
    dialogClose.focus();
  });
});

const closeDialog = () => {
  dialog.close();
  lastFocusedElement?.focus();
};

dialogClose.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const isOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (isOutside) closeDialog();
});

const copyButton = document.querySelector("[data-copy-email]");
const copyLabel = copyButton.querySelector("[data-copy-label]");

copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  const contactContent = siteContent.contact || {};
  try {
    await navigator.clipboard.writeText(email);
    copyLabel.textContent = `${contactContent.copiedLabelPrefix || "已复制："}${email}`;
  } catch {
    copyLabel.textContent = email;
  }

  window.setTimeout(() => {
    copyLabel.textContent = contactContent.emailButtonLabel || "复制邮箱";
  }, 2600);
});
