// ─── Ports rendering logic ────────────────────────────────────────────────────
// Depends on PORTS defined in ports-data.js, loaded before this script.

// ─── Sort alphabetically within each category ─────────────────────────────────
PORTS.sort((a, b) => a.name.localeCompare(b.name));

// ─── Toggle badges ────────────────────────────────────────────────────────────
// Set to true to re-enable shields.io star badges on port cards.
const SHOW_BADGES = false;

function starBadge(gh) {
  if (!gh) return "";
  const src = `https://img.shields.io/github/stars/${gh}?style=flat&color=859289&labelColor=3d484d&cacheSeconds=86400`;
  return `<img class="star-badge" src="${src}" alt="GitHub stars" loading="lazy" onerror="this.style.display='none'">`;
}

// ─── SVG icons ────────────────────────────────────────────────────────────────

const ICON_PERSON = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke-linecap="round"/></svg>`;
const ICON_ARROW = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`;
const ICON_CHEVRON = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>`;
const ICON_EXTERNAL = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 3H3v10h10v-3M9 2h5v5M9 7l5-5"/></svg>`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Renders a devicon <i> with the emoji stored in data-emoji for fallback,
// or just the emoji span if no devicon class is provided.
function iconHTML(port) {
  if (port.icon) {
    return `<i class="${port.icon}" data-emoji="${port.emoji || ""}" aria-hidden="true"></i>`;
  }
  return `<span aria-hidden="true">${port.emoji || ""}</span>`;
}

// ─── Devicon fallback ─────────────────────────────────────────────────────────
// After the devicon font loads, check each <i> for a missing glyph by measuring
// its rendered width. A width < 2px means the glyph didn't render; swap to emoji.
function initDeviconFallback() {
  document.fonts.ready.then(() => {
    document.querySelectorAll(".port-icon i[data-emoji]").forEach((el) => {
      if (el.offsetWidth < 2 && el.dataset.emoji) {
        const span = document.createElement("span");
        span.setAttribute("aria-hidden", "true");
        span.textContent = el.dataset.emoji;
        el.replaceWith(span);
      }
    });
  });
}

// ─── Card builders ────────────────────────────────────────────────────────────

function buildSingleCard(port) {
  return `
    <a class="port-card" href="${port.url}" target="_blank" rel="noopener"
       data-name="${port.name.toLowerCase()}" data-category="${port.category}">
      <div class="port-card-header">
        <div class="port-icon">${iconHTML(port)}</div>
        <span class="port-name">${port.name}</span>
        <span class="port-link-icon">${ICON_ARROW}</span>
      </div>
      <div class="port-meta">
        <span class="port-meta-item">${ICON_PERSON} ${port.maintainer}</span>
        ${SHOW_BADGES && port.gh ? `<span class="port-meta-item">${starBadge(port.gh)}</span>` : ""}
      </div>
    </a>`;
}

function buildVariantsCard(port, gridCat) {
  const id =
    port.name.replace(/[^a-z0-9]/gi, "-").toLowerCase() + "-" + gridCat;
  const rows = port.variants
    .map(
      (v) => `
      <a class="port-variant-row" href="${v.url}" target="_blank" rel="noopener">
        <span class="port-variant-maintainer">${ICON_PERSON} ${v.maintainer}</span>
        <span class="port-variant-meta">
          ${SHOW_BADGES && v.gh ? starBadge(v.gh) : ""}
          <span class="port-variant-link">${ICON_EXTERNAL}</span>
        </span>
      </a>`,
    )
    .join("");

  return `
    <div class="port-card has-variants"
         data-name="${port.name.toLowerCase()}" data-category="${port.category}">
      <div class="port-card-header">
        <div class="port-icon">${iconHTML(port)}</div>
        <span class="port-name">${port.name}</span>
        <span style="font-size:0.72rem;color:var(--fg-dim);margin-left:auto">${port.variants.length} versions</span>
      </div>
      <button class="port-variants-toggle" data-target="variants-${id}"
              onclick="toggleVariants(this, 'variants-${id}')">
        ${ICON_CHEVRON} Show all versions
      </button>
      <div class="port-variants-list" id="variants-${id}">
        ${rows}
      </div>
    </div>`;
}

function buildCard(port, gridCat) {
  return port.variants
    ? buildVariantsCard(port, gridCat)
    : buildSingleCard(port);
}

// ─── Variant toggle ───────────────────────────────────────────────────────────

function toggleVariants(btn, targetId) {
  const list = document.getElementById(targetId);
  const open = list.classList.toggle("open");
  btn.classList.toggle("open", open);
  btn.innerHTML = `${ICON_CHEVRON} ${open ? "Hide versions" : "Show all versions"}`;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderAll() {
  const categories = [
    "all",
    "editors",
    "terminals",
    "browsers",
    "websites",
    "apps",
    "desktop",
    "other",
  ];

  categories.forEach((cat) => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    const ports =
      cat === "all" ? PORTS : PORTS.filter((p) => p.category === cat);
    grid.innerHTML = ports.map((p) => buildCard(p, cat)).join("");

    const countEl = document.getElementById(`count-${cat}`);
    if (countEl) countEl.textContent = ports.length;
  });
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function initTabs() {
  document.getElementById("portsTabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".ports-tab");
    if (!tab) return;

    document.getElementById("portSearch").value = "";
    showAllCards();

    document
      .querySelectorAll(".ports-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".ports-panel")
      .forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add("active");
    document.getElementById("noResults").classList.remove("visible");
  });
}

// ─── Search ───────────────────────────────────────────────────────────────────

function showAllCards() {
  document
    .querySelectorAll(".port-card")
    .forEach((c) => c.removeAttribute("hidden"));
}

function initSearch() {
  document.getElementById("portSearch").addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();

    if (!q) {
      showAllCards();
      document.getElementById("noResults").classList.remove("visible");
      return;
    }

    document
      .querySelectorAll(".ports-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".ports-panel")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById("panel-all").classList.add("active");
    document.querySelector('[data-tab="all"]').classList.add("active");

    let visible = 0;
    document.querySelectorAll("#grid-all .port-card").forEach((card) => {
      const match = card.dataset.name.includes(q);
      card.toggleAttribute("hidden", !match);
      if (match) visible++;
    });

    document
      .getElementById("noResults")
      .classList.toggle("visible", visible === 0);
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  if (typeof applyTheme === "function") applyTheme("dark-medium");
  renderAll();
  initTabs();
  initSearch();
  initDeviconFallback();
});
