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
    preview: {
      layout: "stack",
      label: "Property finance app preview",
      items: [
        {
          type: "image",
          src: "assets/property-finance-cash-flow.png",
          alt: "Property Finance App securities and facilities dashboard",
          caption: "Portfolio setup",
        },
        {
          type: "image",
          src: "assets/property-finance-overview.png",
          alt: "Property Finance App cash-flow projection table",
          caption: "Cash-flow projection",
        },
      ],
    },
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
    preview: {
      layout: "media",
      label: "AFL Arena video preview",
      items: [
        {
          type: "video",
          src: "assets/Download.mp4",
          poster: "assets/afl-arena-poster.jpg",
          caption: "Rendered TikTok video",
        },
      ],
    },
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
    preview: {
      layout: "wide",
      label: "Squid NFT Game website preview",
      items: [
        {
          type: "image",
          src: "assets/squid-nft-game.png",
          alt: "Squid NFT Game landing page with Connect Wallet call to action",
          caption: "Launch page",
        },
      ],
    },
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
    preview: {
      layout: "phone",
      label: "Mobile apps preview",
      items: [
        {
          type: "image",
          src: "assets/a-maze-ballz.png",
          alt: "A-Maze-Ballz mobile game screen with a circular maze",
          caption: "A-Maze-Ballz",
        },
      ],
    },
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
  githubTotal: document.querySelector("[data-github-total]"),
  githubMonths: document.querySelector("[data-github-months]"),
  githubGrid: document.querySelector("[data-github-grid]"),
};

const categories = ["All", "Automation", "Finance", "Blockchain", "Mobile Apps"];

const githubActivity = {
  username: "Tichubrothers",
  contributions: 251,
  weeks: 53,
  months: [
    ["Jan", 1, 5],
    ["Feb", 6, 4],
    ["Mar", 10, 5],
    ["Apr", 15, 4],
    ["May", 19, 5],
    ["Jun", 24, 4],
    ["Jul", 28, 4],
    ["Aug", 32, 5],
    ["Sep", 37, 4],
    ["Oct", 41, 4],
    ["Nov", 45, 5],
    ["Dec", 50, 4],
  ],
  rowLevels: [
    ".0000001021210002011010222010000000000000000000000000",
    ".0000001010111001031300232020000000000000000000000000",
    ".1000001321100000040420220120000000000000000000000000",
    ".0000000223012000121220420010000000000000000000000000",
    "00001000031100100010410130000000000000000000000000000",
    "0000000021000010003311342010000000000000000000000000.",
    "0000000020001000001221143110000000000000000000000000.",
  ],
  startDate: "2025-12-28",
};

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

function renderProjectPreview(project) {
  if (!project.preview || !project.preview.items.length) {
    return "";
  }

  return `
    <div
      class="project-preview project-preview--${escapeHtml(project.preview.layout)}"
      aria-label="${escapeHtml(project.preview.label)}"
    >
      ${project.preview.items.map(renderPreviewItem).join("")}
    </div>
  `;
}

function renderPreviewItem(item) {
  const caption = item.caption
    ? `<figcaption>${escapeHtml(item.caption)}</figcaption>`
    : "";

  if (item.type === "video") {
    return `
      <figure class="preview-frame preview-frame--video">
        <video muted loop playsinline autoplay preload="metadata" ${item.poster ? `poster="${escapeHtml(item.poster)}"` : ""} aria-label="${escapeHtml(item.caption || "Project video preview")}">
          <source src="${escapeHtml(item.src)}" type="video/mp4" />
        </video>
        ${caption}
      </figure>
    `;
  }

  return `
    <figure class="preview-frame preview-frame--image">
      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" />
      <span class="preview-fallback" aria-hidden="true">
        Preview image pending
        <small>${escapeHtml(item.src)}</small>
      </span>
      ${caption}
    </figure>
  `;
}

function markMissingPreviewImages() {
  elements.projects.querySelectorAll(".preview-frame--image img").forEach((image) => {
    if (image.complete && image.naturalWidth === 0) {
      markMissingPreviewImage(image);
      return;
    }

    image.addEventListener("error", () => markMissingPreviewImage(image), { once: true });
  });
}

function markMissingPreviewImage(image) {
  const frame = image.closest(".preview-frame");
  if (!frame) return;

  frame.classList.add("is-missing");
  image.remove();
}

function renderGithubActivity() {
  if (!elements.githubGrid || !elements.githubMonths || !elements.githubTotal) {
    return;
  }

  elements.githubTotal.textContent = githubActivity.contributions;
  elements.githubMonths.style.setProperty("--github-weeks", githubActivity.weeks);
  elements.githubGrid.style.setProperty("--github-weeks", githubActivity.weeks);

  elements.githubMonths.innerHTML = githubActivity.months
    .map(
      ([label, start, span]) => `
        <span style="grid-column: ${start} / span ${span}">
          ${escapeHtml(label)}
        </span>
      `,
    )
    .join("");

  const startDate = new Date(`${githubActivity.startDate}T00:00:00Z`);
  const cells = [];

  for (let week = 0; week < githubActivity.weeks; week += 1) {
    for (let day = 0; day < 7; day += 1) {
      const level = githubActivity.rowLevels[day][week];
      if (level === undefined || level === ".") continue;

      const date = new Date(startDate);
      date.setUTCDate(startDate.getUTCDate() + week * 7 + day);
      const dateLabel = date.toLocaleDateString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      });

      cells.push(`
        <span
          class="github-cell"
          data-level="${escapeHtml(level)}"
          style="grid-column: ${week + 1}; grid-row: ${day + 1}"
          title="${dateLabel}"
          aria-label="${dateLabel}, contribution level ${escapeHtml(level)}"
        ></span>
      `);
    }
  }

  elements.githubGrid.innerHTML = cells.join("");
}

function renderProjects() {
  const visibleProjects = projects.filter(projectMatches);

  elements.count.textContent = `${visibleProjects.length} ${
    visibleProjects.length === 1 ? "project" : "projects"
  }`;

  elements.projects.innerHTML = visibleProjects
    .map(
      (project) => `
        <li class="project-item" data-tone="${escapeHtml(project.tone)}" ${project.preview ? 'tabindex="0"' : ""}>
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
          ${renderProjectPreview(project)}
        </li>
      `,
    )
    .join("");

  markMissingPreviewImages();
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
renderGithubActivity();
renderProjects();
bindFilters();
