const projects = [
  {
    title: "Property Finance App",
    categories: ["Finance"],
    tone: "finance",
    status: "Financial modelling",
    summary:
      "A Next.js and TypeScript modelling tool for securities, tenants, loan facilities, and group portfolios.",
    impact:
      "Reduces spreadsheet-heavy serviceability and cash-flow work from hours to minutes.",
    stack: ["Next.js", "TypeScript", "React", "Cash-flow"],
    links: [{ label: "Private Github Repo", href: "https://github.com/Tichubrothers/property-financing-app" }],
  },
  {
    title: "AFL Arena",
    categories: ["Automation"],
    tone: "ai",
    status: "Automated content creation",
    summary:
      "A fully automated AFL social media account that generates and posts Remotion-based content.",
    impact:
      "Turns public AFL data into repeatable video content that can be rendered and published automatically.",
    stack: ["Remotion", "React", "Public APIs", "Playwright"],
    links: [{ label: "TikTok Account", href: "https://www.tiktok.com/@afl.arena" }],
  },
  {
    title: "B2B Leads Generator",
    categories: ["Automation"],
    tone: "automation",
    status: "Data pipeline and UI",
    summary:
      "A lead-generation system that collects, parses, stores, and serves daily B2B opportunities across Australia.",
    impact:
      "Generates hundreds of daily business leads and makes them usable from a SQL-backed workflow.",
    stack: ["Automation", "SQL", "APIs", "Parsing"],
    links: [{label: "Private Github Repo", href: "https://github.com/Tichubrothers/LeadsCrawler"}],
  },
  {
    title: "CFD Trading Bots",
    categories: ["Automation", "Finance"],
    tone: "data",
    status: "Quant and arbitrage systems",
    summary:
      "Quantitative and arbitrage trading bots using Node.js, Microsoft Excel, MetaTrader 5, and .MQL5 scripts.",
    impact:
      "Uses automation and real-time data to identify market inefficiency opportunities.",
    stack: ["Node.js", "Excel", ".MQL5", "Web scraping"],
    links: [{ label: "Private Github Repo and Excel Spreadsheets", href: "https://github.com/Tichubrothers/cfd-trading-bots" }],
  },
  {
    title: "SquidNFTGame.io",
    categories: ["Blockchain"],
    tone: "blockchain",
    status: "Launched NFT website",
    summary:
      "A full-stack React website retailing 4,560 unique NFT artworks through blockchain integrations.",
    impact:
      "Delivered a responsive NFT retail experience with Solana querying and transaction support.",
    stack: ["React", "Solana", "AWS S3", "CloudFront"],
    links: [{ label: "Retired website", href: "https://www.squidnftgame.io" }],
  },
  {
    title: "iOS & Android Mobile Apps",
    categories: ["Mobile Apps"],
    tone: "mobile",
    status: "Published apps",
    summary:
      "A range of cross-platform utility apps and arcade games published on the Apple App Store and Google Play Store.",
    impact:
      "Shows mobile product delivery, monetisation, and game development across React Native and Unity.",
    stack: ["React Native", "Unity", "iOS", "Android"],
    links: [{label: "Apple iOS apps", href: "https://appstor.io/zh/developers/1300486769-steven-cheong"}, {label: "Android apps", href: "https://apkpure.com/developer/Tichu%20Brothers"}],
  },
];

const state = {
  filter: "All",
};

const elements = {
  filters: document.querySelector("[data-filters]"),
  projects: document.querySelector("[data-projects]"),
  count: document.querySelector("[data-project-count]"),
};

const categories = ["All", "Automation", "Finance", "Blockchain", "Mobile Apps"];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectMatches(project) {
  return state.filter === "All" || project.categories.includes(state.filter);
}

function renderFilters() {
  elements.filters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-button ${category === state.filter ? "is-active" : ""}"
          type="button"
          data-filter="${escapeHtml(category)}"
          aria-pressed="${category === state.filter}"
        >
          ${escapeHtml(category)}
        </button>
      `,
    )
    .join("");
}

function renderProjectLinks(project) {
  if (!project.links.length) {
    return '<span>Private or local build</span>';
  }

  return project.links
    .map(
      (link) => `
        <a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
          ${escapeHtml(link.label)}
        </a>
      `,
    )
    .join("");
}

function renderProjects() {
  const visibleProjects = projects.filter(projectMatches);

  elements.count.textContent = `${visibleProjects.length} ${
    visibleProjects.length === 1 ? "project" : "projects"
  }`;

  elements.projects.innerHTML = visibleProjects
    .map(
      (project) => `
        <li class="project-item" data-tone="${escapeHtml(project.tone)}">
          <div class="project-meta" aria-label="${escapeHtml(project.title)} metadata">
            <span>${escapeHtml(project.status)}</span>
            <span class="project-domain">${escapeHtml(project.categories.join(" / "))}</span>
          </div>
          <article>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <p class="project-impact">${escapeHtml(project.impact)}</p>
            <div class="tech-list" aria-label="${escapeHtml(project.title)} stack">
              ${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="project-links">
              ${renderProjectLinks(project)}
            </div>
          </article>
        </li>
      `,
    )
    .join("");
}

function bindFilters() {
  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    state.filter = button.dataset.filter;
    renderFilters();
    renderProjects();
  });
}

renderFilters();
renderProjects();
bindFilters();
