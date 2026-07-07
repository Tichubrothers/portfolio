const profile = {
  name: "Steven Cheong",
  email: "tichubrothers@gmail.com",
  portfolio: "https://tichubrothers.github.io/portfolio/",
  github: "https://github.com/Tichubrothers",
  summary:
    "Steven Cheong builds practical software across property finance, automated content generation, B2B lead generation, trading automation, blockchain commerce, and cross-platform mobile apps.",
};

const projects = [
  {
    title: "Property Finance App",
    domain: "Finance",
    tone: "finance",
    status: "Serviceability modelling",
    aiAssisted: true,
    summary:
      "A Next.js and TypeScript modelling tool for securities, tenants, loan facilities, and group portfolios.",
    impact:
      "Enhances financial analysis by reducing spreadsheet-heavy serviceability and cash-flow work from hours to minutes.",
    stack: ["Next.js", "TypeScript", "React", "Serviceability", "Cash-flow modelling"],
    links: [{ label: "View code", href: "https://github.com/Tichubrothers/property-financing-app" }],
    problem:
      "Sophisticated property serviceability and cash-flow analysis can become slow and limited when handled entirely in Microsoft Excel.",
    built: [
      "Built a Next.js and TypeScript application for modelling securities, tenants, loan facilities, and group portfolios.",
      "Implemented flexible cash-flow projection logic for rental growth, vacancy and let-up periods, adjustable incentives, and multiple loan repayment types.",
      "Automated key lending metrics with scenario controls for sensitivity and pro-rata analysis.",
      "Created a faster workflow for analysis that would otherwise rely on manual spreadsheet modelling.",
    ],
    inspect: [
      "Property, tenant, loan, and group portfolio data structures.",
      "Cash-flow projection logic and loan repayment handling.",
      "Sensitivity, pro-rata, and lending metric controls.",
    ],
  },
  {
    title: "AFL Arena",
    domain: "Social Automation",
    tone: "ai",
    status: "Automated content account",
    aiAssisted: true,
    summary:
      "A fully automated AFL social media account that generates and posts Remotion-based content.",
    impact:
      "Turns public AFL data into repeatable video content that can be rendered and published automatically.",
    stack: ["Remotion", "React", "Public APIs", "Playwright", "Social automation"],
    links: [{ label: "TikTok", href: "https://www.tiktok.com/@afl.arena" }],
    problem:
      "Running a sports content account manually requires repeated data collection, video assembly, rendering, and posting.",
    built: [
      "Built an automated AFL content workflow using public API data.",
      "Generated sports videos with Remotion templates.",
      "Automated publishing to social media accounts using Playwright scripts.",
      "Designed the account to run as a repeatable content system rather than a manual editing workflow.",
    ],
    inspect: [
      "Public data ingestion and video data mapping.",
      "Remotion render templates and content generation logic.",
      "Playwright automation for social posting.",
    ],
  },
  {
    title: "B2B Leads Generator",
    domain: "Lead Generation",
    tone: "automation",
    status: "Data pipeline and UI",
    aiAssisted: true,
    summary:
      "A lead-generation system that collects, parses, stores, and serves daily B2B opportunities across Australia.",
    impact:
      "Generates hundreds of daily business leads and makes them usable from a local SQL-backed frontend workflow.",
    stack: ["Automation", "SQL", "APIs", "Data parsing", "Frontend UI"],
    links: [],
    problem:
      "Finding new B2B opportunities across Australia is time-consuming when raw data is scattered across multiple public sources.",
    built: [
      "Built automated collection workflows that pull raw lead data from multiple sources.",
      "Developed custom techniques for sources with anti-bot and Google reCAPTCHA constraints.",
      "Parsed and normalised raw data into a local SQL database.",
      "Exposed the lead database through an API and frontend UI for daily use.",
    ],
    inspect: [
      "Source collection and parsing workflow.",
      "SQL schema and lead normalisation process.",
      "API and frontend workflow for reviewing opportunities.",
    ],
  },
  {
    title: "CFD Trading Bots",
    domain: "Trading Automation",
    tone: "data",
    status: "Quant and arbitrage systems",
    summary:
      "Quantitative and arbitrage trading bots using Node.js, Microsoft Excel, MetaTrader 5, and .MQL5 scripts.",
    impact:
      "Uses automation and real-time data from multiple sources to identify and execute market inefficiency opportunities.",
    stack: ["Node.js", "MS Excel", ".MQL5", "MetaTrader 5", "Web scraping"],
    links: [],
    problem:
      "Manual trading and arbitrage monitoring cannot react quickly enough to price movements across exchanges, markets, and sports books.",
    built: [
      "Developed a quantitative trading algorithm that was backtested in Microsoft Excel and traded through MetaTrader 5 using .MQL5 scripts.",
      "Built a Node.js arbitrage application that scrapes centralised exchange and prediction-market data to identify opportunities during volatile price movements.",
      "Created a sports arbitrage data-mining bot hosted on Google Cloud Functions.",
      "Stored real-time betting data in a cloud database for downstream analysis and execution logic.",
    ],
    inspect: [
      "Backtesting workflow and assumptions.",
      "Exchange, prediction-market, and sports-book data ingestion.",
      "Execution logic and cloud-hosted arbitrage data pipeline.",
    ],
  },
  {
    title: "SquidNFTGame.io",
    domain: "Blockchain",
    tone: "blockchain",
    status: "Launched NFT website",
    summary:
      "A full-stack React website retailing 4,560 unique NFT artworks through blockchain integrations.",
    impact:
      "Delivered a responsive NFT retail experience with Solana blockchain querying and transaction support.",
    stack: ["React", "Solana", "Blockchain APIs", "AWS S3", "CloudFront", "Route 53"],
    links: [{ label: "Live site", href: "https://www.squidnftgame.io" }],
    problem:
      "NFT projects need a responsive storefront that can present artwork, connect to blockchain data, and support cryptocurrency transactions.",
    built: [
      "Developed and launched a React website for 4,560 unique NFT artworks.",
      "Built a responsive interface for desktop and mobile platforms.",
      "Integrated APIs for querying and transacting with NFTs on the Solana blockchain network.",
      "Deployed the site on AWS using S3 web hosting, CloudFront, and Route 53.",
    ],
    inspect: [
      "Responsive React storefront structure.",
      "Solana blockchain API integrations.",
      "AWS static hosting, CDN, and DNS deployment setup.",
    ],
  },
  {
    title: "iOS & Android Mobile Apps",
    domain: "Mobile Apps",
    tone: "mobile",
    status: "Published apps",
    summary:
      "A range of cross-platform utility apps and arcade games published on the Apple App Store and Google Play Store.",
    impact:
      "Demonstrates mobile product delivery, monetisation, and game development across React Native and Unity.",
    stack: ["React Native", "Unity", "iOS", "Android", "Google AdMob"],
    links: [],
    problem:
      "Mobile users expect simple, reliable utility apps and engaging casual games that perform well across both major app stores.",
    built: [
      "Developed a suite of utility apps primarily using React Native.",
      "Published applications on both the Apple App Store and Google Play Store.",
      "Implemented revenue-generation strategies through Google AdMob monetisation.",
      "Designed and published 2D and 3D arcade games using the Unity engine.",
    ],
    inspect: [
      "Cross-platform app architecture and deployment process.",
      "App Store and Google Play publishing workflow.",
      "AdMob monetisation and Unity game delivery.",
    ],
  },
];

const state = {
  filter: "All",
  query: "",
};

const elements = {
  header: document.querySelector("[data-site-header]"),
  filters: document.querySelector("[data-filters]"),
  projects: document.querySelector("[data-projects]"),
  count: document.querySelector("[data-project-count]"),
  search: document.querySelector("[data-search]"),
  dialog: document.querySelector("[data-dialog]"),
  dialogContent: document.querySelector("[data-dialog-content]"),
  closeDialog: document.querySelector("[data-close-dialog]"),
  toast: document.querySelector("[data-toast]"),
  copySummary: document.querySelector("[data-copy-summary]"),
};

const domains = ["All", ...Array.from(new Set(projects.map((project) => project.domain)))];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectMatches(project) {
  const matchesFilter = state.filter === "All" || project.domain === state.filter;
  const searchSource = [
    project.title,
    project.domain,
    project.status,
    project.summary,
    project.impact,
    project.stack.join(" "),
    project.aiAssisted ? "AI assisted" : "",
    project.problem,
    project.built.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return matchesFilter && searchSource.includes(state.query.trim().toLowerCase());
}

function renderFilters() {
  elements.filters.innerHTML = domains
    .map(
      (domain) => `
        <button
          class="filter-button ${domain === state.filter ? "is-active" : ""}"
          type="button"
          data-filter="${escapeHtml(domain)}"
          aria-pressed="${domain === state.filter}"
        >
          ${escapeHtml(domain)}
        </button>
      `,
    )
    .join("");
}

function renderProjects() {
  const visibleProjects = projects.filter(projectMatches);

  elements.count.textContent = `${visibleProjects.length} selected ${
    visibleProjects.length === 1 ? "project" : "projects"
  }`;

  elements.projects.innerHTML = visibleProjects
    .map(
      (project, index) => `
        <article class="project-card" data-tone="${escapeHtml(project.tone)}">
          <div class="project-card__visual" aria-hidden="true"></div>
          <div class="project-card__body">
            <div class="project-card__topline">
              <div class="project-card__badges">
                <span class="project-card__badge">${escapeHtml(project.domain)}</span>
                ${project.aiAssisted ? '<span class="project-card__badge project-card__badge--ai">AI-assisted</span>' : ""}
              </div>
              <span class="project-card__meta">${escapeHtml(project.status)}</span>
            </div>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <p class="project-card__impact">${escapeHtml(project.impact)}</p>
            <div class="tech-list" aria-label="${escapeHtml(project.title)} stack">
              ${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="project-card__actions">
              <button class="project-card__action" type="button" data-open-case="${index}">
                Case study
              </button>
              ${project.links
                .map(
                  (link) => `
                    <a class="project-card__action" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
                      ${escapeHtml(link.label)}
                    </a>
                  `,
                )
                .join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCaseStudy(project) {
  const linkHtml = project.links[0]
    ? `<a class="button button--secondary case-link" href="${escapeHtml(project.links[0].href)}" target="_blank" rel="noreferrer">${escapeHtml(project.links[0].label)}</a>`
    : `<span class="case-tag case-link">Local or private repo</span>`;

  elements.dialogContent.innerHTML = `
    <div class="case-hero">
      <div>
        <span class="case-tag">${escapeHtml(project.domain)}</span>
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.summary)}</p>
      </div>
      ${linkHtml}
    </div>
    <div class="case-grid">
      <div>
        <h3>Problem</h3>
        <p>${escapeHtml(project.problem)}</p>
        <h3>Built</h3>
        <ul>
          ${project.built.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <h3>What to inspect</h3>
        <ul>
          ${project.inspect.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
      <aside class="case-side" aria-label="${escapeHtml(project.title)} metadata">
        <dl>
          <div>
            <dt>Status</dt>
            <dd>${escapeHtml(project.status)}</dd>
          </div>
          ${
            project.aiAssisted
              ? `<div>
                  <dt>AI assistance</dt>
                  <dd>Developed with assistance from ChatGPT 5.4, ChatGPT 5.5, and/or Claude Opus 4.6.</dd>
                </div>`
              : ""
          }
          <div>
            <dt>Impact</dt>
            <dd>${escapeHtml(project.impact)}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd class="case-tags">
              ${project.stack.map((item) => `<span class="case-tag">${escapeHtml(item)}</span>`).join("")}
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  `;
}

function openCaseStudy(projectIndex) {
  const visibleProjects = projects.filter(projectMatches);
  const project = visibleProjects[Number(projectIndex)];

  if (!project) return;

  renderCaseStudy(project);
  document.body.classList.add("dialog-open");
  elements.dialog.showModal();
}

function closeDialog() {
  elements.dialog.close();
  document.body.classList.remove("dialog-open");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2500);
}

function updateHeaderState() {
  elements.header.classList.toggle("is-scrolled", window.scrollY > 20);
}

async function copySummary() {
  const featuredProjects = projects
    .slice(0, 6)
    .map((project) => `${project.title}: ${project.summary}`)
    .join("\n");
  const text = `${profile.summary}\n\nSelected projects:\n${featuredProjects}\n\nAI-assisted applications: Property Finance App, AFL Arena, and B2B Leads Generator.\n\nPortfolio: ${profile.portfolio}\nGitHub: ${profile.github}\nEmail: ${profile.email}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("CV summary copied.");
  } catch {
    showToast("Copy was blocked by the browser.");
  }
}

function bindEvents() {
  window.addEventListener("scroll", updateHeaderState);
  window.addEventListener("hashchange", updateHeaderState);
  updateHeaderState();

  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    renderFilters();
    renderProjects();
  });

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });

  elements.projects.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-case]");
    if (!button) return;
    openCaseStudy(button.dataset.openCase);
  });

  elements.closeDialog.addEventListener("click", closeDialog);

  elements.dialog.addEventListener("click", (event) => {
    const dialogBounds = elements.dialog.getBoundingClientRect();
    const clickedBackdrop =
      event.clientX < dialogBounds.left ||
      event.clientX > dialogBounds.right ||
      event.clientY < dialogBounds.top ||
      event.clientY > dialogBounds.bottom;

    if (clickedBackdrop) {
      closeDialog();
    }
  });

  elements.dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });

  elements.copySummary.addEventListener("click", copySummary);
}

renderFilters();
renderProjects();
bindEvents();
