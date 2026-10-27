const content = window.SITE_CONTENT || {};
const $ = (selector, root = document) => root.querySelector(selector);
const escapeHTML = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const text = (selector, value) => { const element = $(selector); if (element) element.textContent = value || ""; };
const tags = (items = []) => items.map((item) => "<li>" + escapeHTML(item) + "</li>").join("");
const iconPaths = {
  folder: '<path d="M3 7h7l2 3h9v11H3z"/><path d="M3 7V4h7l2 3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c5 3 13 3 18 0M10 13h4"/>',
  education: '<path d="m2 9 10-6 10 6-10 6zM6 12v6c4 3 8 3 12 0v-6M22 9v10"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6c5 3 9 3 14 0M5 18c5-3 9-3 14 0"/>',
  document: '<path d="M5 3h10l4 4v14H5zM14 3v5h5M8 12h8M8 16h6"/>',
  spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
};
const icon = (name) => '<svg class="line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (iconPaths[name] || iconPaths.spark) + "</svg>";
const projects = (content.projects || []).filter((project) => project.visible !== false).sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));
const projectMap = new Map(projects.map((project) => [project.id, project.detail]));
const bulletList = (bullets = []) => "<ul>" + bullets.map((bullet) => "<li>" + (typeof bullet === "string" ? escapeHTML(bullet) : "<strong>" + escapeHTML(bullet.title) + "：</strong>" + escapeHTML(bullet.text)) + "</li>").join("") + "</ul>";

function renderProfile() {
  const profile = content.profile || {};
  text("#profile .section-index", profile.index);
  const title = $("#profile-title");
  title.replaceChildren(document.createTextNode(profile.titleBefore || ""), Object.assign(document.createElement("span"), { textContent: profile.titleHighlight || "" }));
  text("[data-profile-description]", profile.description);
  const feature = profile.featuredExperience;
  if (feature) {
    const experience = profile.experience?.[feature.experienceIndex] || {};
    $("[data-featured-experience]").innerHTML =
      '<figure class="experience-art"><img src="' + escapeHTML(feature.image) + '" alt="' + escapeHTML(feature.imageAlt) + '" width="1672" height="941" loading="lazy" /></figure>' +
      '<div class="experience-feature-copy"><div class="experience-meta"><span>INSTA360 / SERVICE OPERATIONS</span><span>' + escapeHTML(experience.period) + "</span></div>" +
      "<h3>" + escapeHTML(experience.company) + '</h3><p class="experience-role">' + escapeHTML(experience.role) + " · " + escapeHTML(experience.location) + "</p>" +
      '<p class="feature-headline">' + escapeHTML(feature.headline) + '</p><p class="feature-description">' + escapeHTML(feature.description) + "</p>" +
      '<div class="feature-metric"><strong>' + escapeHTML(feature.metricValue) + "</strong><span>" + escapeHTML(feature.metricLabel) + "</span></div>" +
      '<ul class="experience-tags">' + tags(feature.tags) + "</ul></div>";
  }
  $("[data-supporting-experiences]").innerHTML = (profile.supportingExperiences || []).map((item) =>
    '<a class="support-card" href="' + escapeHTML(item.href) + '"><span class="support-icon">' + icon(item.icon) + '</span><div><h3>' + escapeHTML(item.title) +
    '</h3><p class="support-metric"><strong>' + escapeHTML(item.value) + "</strong><span>" + escapeHTML(item.label) + '</span></p><p class="support-description">' + escapeHTML(item.description) + '</p></div><span class="support-arrow" aria-hidden="true">↗</span></a>'
  ).join("");
  text("[data-resume-label]", profile.detailsLabel);
  $("[data-profile-experience]").innerHTML = (profile.experience || []).map((item, index) =>
    '<article class="experience-item"><span class="experience-index">' + String(index + 1).padStart(2, "0") + '</span><div><div class="profile-item-topline"><h3>' + escapeHTML(item.company) + "</h3><span>" + escapeHTML(item.period) +
    '</span></div><p class="profile-item-role">' + escapeHTML(item.role) + " · " + escapeHTML(item.location) + "</p>" + bulletList(item.bullets) + "</div></article>"
  ).join("");
  if (profile.research) {
    const research = profile.research;
    $("[data-profile-research]").innerHTML = "<article><div class='profile-item-topline'><h3>" + escapeHTML(research.title) + "</h3><span>" + escapeHTML(research.period) +
      '</span></div><p class="profile-item-role">' + escapeHTML(research.role) + '</p><p class="profile-item-detail">' + escapeHTML(research.description) + "</p>" + bulletList(research.bullets) + "</article>";
  }
  const education = profile.education || [];
  const first = education[0];
  if (first) {
    $("[data-education-summary]").innerHTML = '<span class="section-index">EDUCATION</span><div class="education-summary-title">' + icon("education") +
      "<div><h3>" + escapeHTML(first.school) + "</h3><p>" + escapeHTML(first.degree) + '</p></div></div><p class="education-period">' + escapeHTML(first.period) + '</p><p class="education-score">' + escapeHTML(first.detail) + "</p>";
  }
  $("[data-profile-education]").innerHTML = education.map((item) =>
    '<article class="education-item"><div class="profile-item-topline"><h3>' + escapeHTML(item.school) + "</h3><span>" + escapeHTML(item.period) +
    '</span></div><p class="profile-item-role">' + escapeHTML(item.degree) + '</p><p class="profile-item-detail">' + escapeHTML(item.detail) +
    '</p><div class="education-courses"><h4>主修课程</h4><p>' + (item.courses || []).map(escapeHTML).join(" · ") + "</p></div></article>"
  ).join("");
  $("[data-certificates]").innerHTML = "<h4>语言与证书</h4><ul>" + tags(profile.certificates) + "</ul>";
}

function renderProjects() {
  const work = content.work || {};
  text("#work .section-index", work.index);
  $("#work-title").replaceChildren(document.createTextNode(work.titleBefore || ""), Object.assign(document.createElement("span"), { textContent: work.titleHighlight || "" }));
  text("[data-work-description]", work.description);
  $(".filter-row").innerHTML = (work.filters || []).map((filter, index) =>
    '<button class="filter-button' + (index === 0 ? " is-active" : "") + '" type="button" aria-pressed="' + (index === 0) + '" data-filter="' + escapeHTML(filter.id) + '">' + escapeHTML(filter.label) +
    (filter.id === "all" ? ' <span class="filter-count">' + String(projects.length).padStart(2, "0") + "</span>" : "") + "</button>"
  ).join("");
  $(".project-grid").innerHTML = projects.map((project) => {
    const card = project.card;
    const featured = project.featured;
    const visual = featured && card.visual?.src ? '<figure class="project-shot"><img src="' + escapeHTML(card.visual.src) + '" alt="' + escapeHTML(card.visual.alt) + '" width="1200" height="720" loading="lazy" /></figure>' : "";
    return '<article class="project-card ' + escapeHTML(project.themeClass) + (featured ? " project-featured" : " project-compact") + '" data-tags="' + escapeHTML((project.filters || []).join(" ")) + '">' +
      '<button class="project-hitarea" type="button" data-project="' + escapeHTML(project.id) + '" aria-label="查看' + escapeHTML(card.title) + '案例"></button>' +
      (featured ? '<div class="project-meta"><span>' + escapeHTML(card.category) + "</span><span>" + escapeHTML(card.caseNumber) + "</span></div>" : '<span class="compact-icon">' + icon(project.id === "words" ? "code" : "spark") + "</span>") +
      '<div class="project-copy"><h3>' + escapeHTML(card.title) + '</h3><p>' + escapeHTML(card.description) + "</p></div>" +
      '<span class="circle-arrow" aria-hidden="true">↗</span>' + visual +
      (featured ? '<ul class="tag-list">' + tags(card.tags) + "</ul>" : "") + "</article>";
  }).join("");
}

function applyContent() {
  document.documentElement.lang = content.meta?.language || "zh-CN";
  document.title = content.meta?.title || document.title;
  if (content.meta?.description) $('meta[name="description"]').content = content.meta.description;
  const notice = $(".demo-ribbon");
  notice.hidden = content.notice?.visible !== true;
  notice.innerHTML = "<span>" + escapeHTML(content.notice?.badge) + "</span>" + escapeHTML(content.notice?.text);
  text(".brand-name", content.brand?.name);
  text(".brand-suffix", content.brand?.suffix);
  $("[data-nav]").innerHTML = (content.navigation || []).map((item) => '<a href="' + escapeHTML(item.href) + '">' + escapeHTML(item.label) + "</a>").join("");
  const hero = content.hero || {};
  text("[data-availability]", hero.availability);
  text("[data-hero-before]", hero.titleBefore);
  text("[data-hero-highlight]", hero.titleHighlight);
  text("[data-hero-after]", hero.titleAfter);
  text("[data-hero-greeting]", hero.introLine1);
  text("[data-hero-intro]", hero.introLine2);
  for (const [selector, button, arrow] of [["[data-hero-primary]", hero.primaryButton, "↘"], ["[data-hero-secondary]", hero.secondaryButton, "↗"]]) {
    if (!button) continue;
    const anchor = $(selector);
    anchor.href = button.href;
    anchor.innerHTML = escapeHTML(button.label) + ' <span aria-hidden="true">' + arrow + "</span>";
    if (/^https?:/.test(button.href)) { anchor.target = "_blank"; anchor.rel = "noreferrer"; }
  }
  $(".skill-pills").innerHTML = tags(hero.skills);
  const portrait = hero.portrait || {};
  const portraitImage = $(".portrait-photo");
  portraitImage.alt = portrait.imageAlt || "";
  portraitImage.addEventListener("error", () => {
    if (portrait.fallbackImage) {
      portraitImage.src = portrait.fallbackImage;
      $("[data-portrait-stage]").classList.add("has-photo-fallback");
    }
  }, { once: true });
  if (portrait.image) portraitImage.src = portrait.image;
  text("[data-portrait-location]", "⌖ " + (portrait.locationLabel || portrait.captionRight || ""));
  text(".portrait-sticker", portrait.sticker || "KEEP\nEXPLORING");
  $(".signal-track").innerHTML = (content.stats || []).map((stat, index) =>
    '<div class="signal-item">' + icon(["folder", "briefcase", "education"][index]) + '<strong>' + escapeHTML(stat.value) + "</strong><span>" + escapeHTML(stat.label) + "</span></div>"
  ).join("");
  renderProfile();
  renderProjects();
  const about = content.about || {};
  text("#about .section-index", about.index);
  $("#about-title").replaceChildren(document.createTextNode(about.titleLine1 || ""), Object.assign(document.createElement("span"), { textContent: about.titleHighlight || "" }));
  text("[data-tool-description]", about.description);
  $(".tool-cloud").innerHTML = (about.tools || []).map((tool) => '<span class="tool">' + escapeHTML(tool.label) + "</span>").join("");
  const contact = content.contact || {};
  text(".contact-kicker", contact.kicker);
  text("[data-contact-before]", contact.titleLine1);
  text("[data-contact-highlight]", contact.titleHighlight);
  text("[data-copy-label]", contact.emailButtonLabel);
  $("[data-copy-email]").dataset.email = contact.email || "";
  $(".github-link").href = contact.githubUrl || "#";
  $(".github-link").innerHTML = escapeHTML(contact.githubLabel) + ' <span aria-hidden="true">↗</span>';
  text("[data-footer-left]", content.footer?.leftText);
  text("[data-owner]", content.footer?.owner);
  text("[data-back-top]", content.footer?.backToTop);
  text("[data-year]", String(new Date().getFullYear()));
}
applyContent();

const menu = $("[data-menu-button]");
const nav = $("[data-nav]");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "打开菜单");
  nav.classList.remove("is-open");
}
menu.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(expanded));
  menu.setAttribute("aria-label", expanded ? "关闭菜单" : "打开菜单");
  nav.classList.toggle("is-open", expanded);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;
  closeMenu();
  const target = document.getElementById(anchor.hash.slice(1));
  if (target?.tagName === "DETAILS") target.open = true;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);
if (location.hash) {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.tagName === "DETAILS") target.open = true;
}

$(".filter-row").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  const filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  document.querySelectorAll("[data-tags]").forEach((card) => {
    card.hidden = filter !== "all" && !card.dataset.tags.split(" ").includes(filter);
  });
});

const dialog = $("[data-dialog]");
let lastFocused = null;
function showProject(project) {
  text("[data-dialog-kicker]", project.kicker);
  text("[data-dialog-title]", project.title);
  text("[data-dialog-summary]", project.summary);
  $("[data-dialog-accent]").style.background = project.accent;
  $("[data-dialog-tags]").innerHTML = tags(project.tags);
  $("[data-dialog-links]").innerHTML = (project.links || []).map((link) => '<a class="dialog-link' + (link.primary ? " dialog-link-primary" : "") + '" href="' + escapeHTML(link.href) + '" target="_blank" rel="noreferrer">' + escapeHTML(link.label) + " ↗</a>").join("");
  const preview = $("[data-dialog-preview]");
  preview.hidden = !project.preview?.src;
  if (project.preview?.src) {
    $("[data-dialog-image]").src = project.preview.src;
    $("[data-dialog-image]").alt = project.preview.alt || "";
    text("[data-dialog-caption]", project.preview.caption);
  } else {
    $("[data-dialog-image]").removeAttribute("src");
  }
  $("[data-dialog-metrics]").innerHTML = (project.metrics || []).map((metric) => '<div class="case-metric"><strong>' + escapeHTML(metric.value) + "</strong><span>" + escapeHTML(metric.label) + "</span></div>").join("");
  $("[data-dialog-story]").innerHTML = (project.story || []).map((story) => '<section class="story-row"><h3>' + escapeHTML(story.title) + "</h3><p>" + escapeHTML(story.text) + "</p></section>").join("");
  dialog.showModal();
  dialog.scrollTop = 0;
  document.documentElement.classList.add("dialog-open");
  $("[data-dialog-close]").focus({ preventScroll: true });
}
$(".project-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  const project = projectMap.get(button.dataset.project);
  if (!project) return;
  lastFocused = button;
  showProject(project);
});
$("[data-dialog-close]").addEventListener("click", () => dialog.close());
let backdropPointerDown = false;
dialog.addEventListener("pointerdown", (event) => { backdropPointerDown = event.target === dialog && outsideDialog(event); });
function outsideDialog(event) {
  const bounds = dialog.getBoundingClientRect();
  return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
}
dialog.addEventListener("click", (event) => {
  if (backdropPointerDown && event.target === dialog && outsideDialog(event)) dialog.close();
  backdropPointerDown = false;
});
dialog.addEventListener("close", () => {
  document.documentElement.classList.remove("dialog-open");
  lastFocused?.focus({ preventScroll: true });
});

$("[data-copy-email]").addEventListener("click", async () => {
  const email = content.contact?.email || "";
  try {
    await navigator.clipboard.writeText(email);
    text("[data-copy-status]", (content.contact?.copiedLabelPrefix || "已复制：") + email);
  } catch {
    text("[data-copy-status]", email);
  }
});

// Pointer motion is a small layer offset only; a real head turn needs approved video frames.
const stage = $("[data-portrait-stage]");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
let pendingFrame = null;
let pointerX = 0;
let pointerY = 0;
function resetPortrait() {
  if (pendingFrame !== null) cancelAnimationFrame(pendingFrame);
  pendingFrame = null;
  stage.style.setProperty("--pointer-x", "0");
  stage.style.setProperty("--pointer-y", "0");
}
stage.addEventListener("pointermove", (event) => {
  if (motionPreference.matches || !precisePointer.matches) return;
  const bounds = stage.getBoundingClientRect();
  pointerX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
  pointerY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
  if (pendingFrame !== null) return;
  pendingFrame = requestAnimationFrame(() => {
    stage.style.setProperty("--pointer-x", String(pointerX));
    stage.style.setProperty("--pointer-y", String(pointerY));
    pendingFrame = null;
  });
}, { passive: true });
stage.addEventListener("pointerleave", resetPortrait);
motionPreference.addEventListener("change", resetPortrait);
precisePointer.addEventListener("change", resetPortrait);
