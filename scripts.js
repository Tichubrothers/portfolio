const profile = {
  name: "Steven Cheong",
  email: "tichubrothers@gmail.com",
  github: "https://github.com/Tichubrothers",
  summary:
    "Steven Cheong builds full-stack apps across finance workflows, AI media, data intelligence, document automation, and market tooling. Recent work includes property cash-flow modelling, banking product foundations, AI video generation pipelines, PDF/OCR browser tooling, market intelligence dashboards, stock availability crawlers, and quantitative backtesting.",
};

const projects = [
  {
    title: "PropertyFinance",
    domain: "Finance",
    tone: "finance",
    status: "Product prototype",
    summary:
      "A property portfolio analysis app for modelling assets, tenants, loans, cash flow, and lender-style risk metrics.",
    impact:
      "Turns fragmented property, lease, and debt information into scenario-ready finance views.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Financial modelling"],
    links: [{ label: "View code", href: "https://github.com/Tichubrothers/property-financing-app" }],
    problem:
      "Property finance reviews need structured asset, tenant, lease, and loan data before decision makers can reason about risk.",
    built: [
      "Portfolio, subgroup, property, tenant, and loan entities with editable state.",
      "Metrics for LVR, ICR, SICR, WALE, WALT, TAE/XTV, debt-to-income, NOI, and yield.",
      "Cash-flow projections with sensitivity, deductions growth, financial-year options, pro-rata handling, and loan repayment logic.",
      "Operator-style dashboard tables that expand from summary metrics into tenant and property detail.",
    ],
    inspect: [
      "Financial model functions in `src/lib/advancedMetrics.ts` and cash-flow generation.",
      "Dashboard state and projection controls in `src/components/Dashboard.tsx`.",
      "Domain types for properties, tenants, loans, incentives, and adjustments.",
    ],
  },
  {
    title: "VibeBank",
    domain: "Finance",
    tone: "finance",
    status: "Production-shaped foundation",
    summary:
      "A banking product foundation with signed sessions, protected routes, persisted workspace state, CDR-style consent, and PayTo-style payment surfaces.",
    impact:
      "Shows how a regulated workflow can be decomposed into auth, domain state, provider boundaries, audit activity, and readiness checks.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Auth", "Provider adapters"],
    links: [],
    problem:
      "Financial product demos often look polished but lack the bones needed for real integrations, protected workflows, and operator readiness.",
    built: [
      "Owner registration, login, logout, signed httpOnly sessions, and protected dashboard/settings routes.",
      "File-backed workspace persistence for accounts, transactions, consents, payments, agreements, audit events, and business profile data.",
      "Mock Australian banking adapter shaped around CDR-style account data and PayTo-style payments.",
      "Readiness surfaces that separate sandbox completeness from live integration requirements.",
    ],
    inspect: [
      "Authentication and session handling in `lib/auth.ts`.",
      "Persistence boundary in `lib/database.ts` and workspace services in `lib/store.ts`.",
      "Mock provider adapter and readiness/audit surfaces.",
    ],
  },
  {
    title: "VidsToSocials",
    domain: "AI Media",
    tone: "ai",
    status: "End-to-end generator",
    summary:
      "A vertical video generation system that turns topics or fixed scripts into voiceover, images, subtitles, thumbnails, metadata, and social-ready video output.",
    impact:
      "Combines AI providers, media composition, job inspection, and publishing workflow controls in one creator pipeline.",
    stack: ["Python", "FastAPI", "Next.js", "FFmpeg", "Edge TTS", "OpenAI", "ComfyUI"],
    links: [{ label: "View code", href: "https://github.com/Tichubrothers/vidstosocials" }],
    problem:
      "Short-form video creation has many manual steps: scripting, asset generation, voice, captions, music, metadata, thumbnails, rendering, and posting.",
    built: [
      "Topic and fixed-script generation modes with per-job provider overrides.",
      "Scene or sentence-level image splitting, vertical framing, subtitle presets, color controls, and caption options.",
      "Backend CLI and API surfaces for generation, status, voices, login/logout, and posting targets.",
      "Completed-job inspector for generated resources, request parameters, edits, and reruns.",
    ],
    inspect: [
      "Python package entry point and CLI command surface.",
      "FastAPI job orchestration and provider configuration.",
      "Frontend controls for generation settings and job review.",
    ],
  },
  {
    title: "Formachello PDF Tools",
    domain: "Automation",
    tone: "automation",
    status: "Browser-first toolkit",
    summary:
      "A private-by-default PDF utility suite with merge, split, rotate, extract, OCR, conversion, watermarking, signing, redaction, and auto-fill concepts.",
    impact:
      "Targets high-frequency document work with local processing and a broad tool surface.",
    stack: ["Next.js", "React", "pdf-lib", "pdfjs-dist", "Tesseract.js", "OCR"],
    links: [{ label: "View code", href: "https://github.com/Tichubrothers/formachello" }],
    problem:
      "Document workflows often force users into upload-heavy tools for simple operations that can run locally in the browser.",
    built: [
      "Organized tool catalogue across page operations, conversion, security, editing, annotation, and smart tools.",
      "Client-side PDF processing dependencies for document manipulation and OCR.",
      "Searchable, categorized interface for fast access to common PDF actions.",
      "Privacy positioning that keeps document work on the user device where possible.",
    ],
    inspect: [
      "Tool catalogue in `app/page.js`.",
      "Component structure around tool cards and PDF action modules.",
      "Dependency choices for PDF parsing, generation, zipping, and OCR.",
    ],
  },
  {
    title: "Data-centre Project Tracker",
    domain: "Data Intelligence",
    tone: "data",
    status: "Market intelligence dashboard",
    summary:
      "A local intelligence dashboard for tracking Australian data-centre projects across planning, grid, contractor, energy, community, and water signals.",
    impact:
      "Packages fragmented market signals into filters, opportunity scores, project detail, notes, and exportable pipeline views.",
    stack: ["Vite", "React 19", "TypeScript", "Playwright", "CSV export", "API ingest"],
    links: [],
    problem:
      "Project intelligence is spread across planning portals, council alerts, grid documents, jobs boards, and supplier signals.",
    built: [
      "Filterable pipeline by state, stage, signal type, buyer segment, score, and risk.",
      "Opportunity scoring for subcontractors, recruiters, property teams, and suppliers.",
      "Project detail panel with constraints, buyer angles, risk watch, timeline, and private notes.",
      "Live-data ingest shell for Adzuna job signals and PlanningAlerts council signals.",
    ],
    inspect: [
      "Project data model and scoring utilities.",
      "Live-data manifest and ingest script design.",
      "Dashboard filters, notes, and export workflow.",
    ],
  },
  {
    title: "TCG Stock Finder",
    domain: "Automation",
    tone: "automation",
    status: "Retail data crawler",
    summary:
      "A stock-checking and product-intelligence crawler for Big W trading-card availability using public store and availability data.",
    impact:
      "Converts hidden product identifiers and store availability into state-level stock tables and CSV/JSON outputs.",
    stack: ["Python", "curl_cffi", "Retail APIs", "CSV", "JSON", "CLI"],
    links: [],
    problem:
      "Retail product search can hide new-release or in-store-only items even when availability data exists behind the frontend.",
    built: [
      "Store list retrieval and availability checks against Big W endpoints.",
      "Browser impersonation profile for requests that normal curl or Node requests cannot access.",
      "Search, direct lookup, narrow article-number scanning, product-code lookup, filtering, CSV, JSON, and raw JSON outputs.",
      "Distributor/source research flow for identifying GTIN, SKU, MPN, and set-code candidates.",
    ],
    inspect: [
      "CLI commands for search, lookup, scanning, and stock table generation.",
      "Rate-aware crawler behavior and output filters.",
      "Source catalogue for official and distributor product identifiers.",
    ],
  },
  {
    title: "ICT FVG Backtester",
    domain: "Data Intelligence",
    tone: "data",
    status: "Quant research project",
    summary:
      "A Bybit BTCUSDT strategy research project with event-driven backtesting, walk-forward optimization, fees, slippage, and drawdown reporting.",
    impact:
      "Shows disciplined experimentation, explicit assumptions, and reproducible artifacts rather than a black-box trading claim.",
    stack: ["Python", "Bybit v5", "Backtesting", "Optimization", "CSV", "Charts"],
    links: [],
    problem:
      "Trading ideas are easy to overfit unless execution assumptions, walk-forward splits, fees, slippage, and caveats are made explicit.",
    built: [
      "ICT fair-value-gap strategy rules with HTF bias, LTF signal, BOS, ATR filters, retrace entry, stop, and target logic.",
      "Event-driven backtester with conservative intrabar stop-first handling, fees, slippage, risk, and leverage cap.",
      "Grid search across 3,456 configs with walk-forward train/test split.",
      "Reproducible results artifacts including equity curve, trades CSV, and summary JSON.",
    ],
    inspect: [
      "Strategy construction in `strategy.py`.",
      "Bybit data fetcher and local cache.",
      "Optimization and final result scripts plus generated artifacts.",
    ],
  },
  {
    title: "MediaCrawler Suite",
    domain: "Automation",
    tone: "automation",
    status: "Crawler and bot tooling",
    summary:
      "A set of crawler and automation projects around media collection, lead discovery, market monitoring, and messaging workflows.",
    impact:
      "Demonstrates comfort with practical automation: scraping constraints, data extraction, messaging hooks, and repeatable scripts.",
    stack: ["Python", "Node.js", "Scraping", "Bots", "APIs", "Automation"],
    links: [],
    problem:
      "Manual data collection is slow, fragile, and hard to repeat when source sites, messaging channels, or market signals change.",
    built: [
      "Crawler-oriented codebases for media and lead collection.",
      "Bot workflows for market monitoring and operational alerts.",
      "Scriptable utilities that can be run locally and adapted to new sources.",
      "Reusable patterns for request handling, parsing, storage, and notification boundaries.",
    ],
    inspect: [
      "Crawler projects under local `001-Proj` and `002-BOTS` directories.",
      "README-led setup for source-specific scripts.",
      "Messaging and alert integration points.",
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
              <span class="project-card__badge">${escapeHtml(project.domain)}</span>
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

async function copySummary() {
  const featuredProjects = projects
    .slice(0, 6)
    .map((project) => `${project.title}: ${project.summary}`)
    .join("\n");
  const text = `${profile.summary}\n\nSelected projects:\n${featuredProjects}\n\nGitHub: ${profile.github}\nEmail: ${profile.email}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("CV summary copied.");
  } catch {
    showToast("Copy was blocked by the browser.");
  }
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    elements.header.classList.toggle("is-scrolled", window.scrollY > 20);
  });

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
