// ─── Port data ───────────────────────────────────────────────────────────────
// `icon`    — Devicons class name (devicon-*) or emoji fallback.
// `gh`      — 'owner/repo' for GitHub-hosted ports; drives the shields.io badge.
//             Omit for ports hosted elsewhere (addon stores, sr.ht, etc.).
// `url`     — link target for the card.
// `updated` — last-known update, YYYY-MM string.
// Ports with competing implementations use `variants` instead of a single entry.

const PORTS = [

  // ── Editors & IDEs ────────────────────────────────────────────────────────
  {
    category: 'editors',
    name: 'Doom Emacs',
    icon: 'devicon-emacs-plain',
    maintainer: 'Cardoso1994',
    gh: 'Cardoso1994/doom-everforest-theme',
    url: 'https://github.com/Cardoso1994/doom-everforest-theme',
  },
  {
    category: 'editors',
    name: 'Emacs',
    icon: 'devicon-emacs-plain',
    maintainer: 'theorytoe',
    url: 'https://git.sr.ht/~theorytoe/everforest-theme',
  },
  {
    category: 'editors',
    name: 'Gnome Builder',
    icon: '🛠️',
    maintainer: 'ghostcrafter551',
    gh: 'ghostcrafter551/everforest-gnome-builder',
    url: 'https://github.com/ghostcrafter551/everforest-gnome-builder',
  },
  {
    category: 'editors',
    name: 'JetBrains IDEs',
    icon: 'devicon-jetbrains-plain',
    maintainer: 'francma',
    gh: 'francma/everforest-jetbrains',
    url: 'https://github.com/francma/everforest-jetbrains',
  },
  {
    category: 'editors',
    name: 'Kakoune',
    icon: '📝',
    maintainer: 'jdugan6240',
    url: 'https://codeberg.org/jdugan6240/everforest.kak',
  },
  {
    category: 'editors',
    name: 'Micro',
    icon: '📝',
    maintainer: 'atomashevic',
    gh: 'atomashevic/everforest-micro',
    url: 'https://github.com/atomashevic/everforest-micro',
  },
  {
    category: 'editors',
    name: 'Neovim',
    icon: 'devicon-neovim-plain',
    variants: [
    ],
  },
  {
    category: 'editors',
    name: 'Replit',
    icon: '🔁',
    maintainer: 'talwat321',
    url: 'https://replit.com/theme/@talwat321/everforest',
  },
  {
    category: 'editors',
    name: 'TextMate / Sublime Text',
    icon: 'devicon-sublimetext-plain',
    maintainer: 'mhanberg',
    gh: 'mhanberg/everforest-textmate',
    url: 'https://github.com/mhanberg/everforest-textmate',
  },
  {
    category: 'editors',
    name: 'Vim',
    icon: 'devicon-vim-plain',
    maintainer: 'sainnhe',
    gh: 'sainnhe/everforest',
    url: 'https://github.com/sainnhe/everforest',
  },
  {
    category: 'editors',
    name: 'VS Code',
    icon: 'devicon-vscode-plain',
    maintainer: 'sainnhe',
    gh: 'sainnhe/everforest-vscode',
    url: 'https://github.com/sainnhe/everforest-vscode',
  },
  {
    category: 'editors',
    name: 'Visual Studio 2022',
    icon: 'devicon-visualstudio-plain',
    maintainer: 'ZachFranzen',
    gh: 'ZachFranzen/Everforest',
    url: 'https://github.com/ZachFranzen/Everforest',
  },

  // ── Terminals ─────────────────────────────────────────────────────────────
  {
    category: 'terminals',
    name: 'Alacritty',
    icon: '🖥️',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Foot',
    icon: '🖥️',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Gnome Terminal',
    icon: '🖥️',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Hyper',
    icon: '⚡',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'iTerm2',
    icon: 'devicon-apple-original',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Konsole',
    icon: 'devicon-linux-plain',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'MobaXterm',
    icon: '🖥️',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Tilix',
    icon: '🖥️',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'WezTerm',
    icon: '🖥️',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Windows Terminal',
    icon: 'devicon-windows8-original',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
  {
    category: 'terminals',
    name: 'Xfce4-Terminal',
    icon: 'devicon-linux-plain',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },

  // ── Browsers ──────────────────────────────────────────────────────────────
  {
    category: 'browsers',
    name: 'Chrome',
    icon: 'devicon-chrome-plain',
    maintainer: 'talwat',
    url: 'https://github.com/talwat/dotfiles/tree/main/macOS/everforest/chrome/everforest',
  },
  {
    category: 'browsers',
    name: 'Firefox',
    icon: 'devicon-firefox-plain',
    maintainer: 'sainnhe',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/everforest-dark-official/',
  },

  // ── Other ─────────────────────────────────────────────────────────────────
  {
    category: 'other',
    name: 'Alfred',
    icon: '🔍',
    maintainer: 'mhanberg',
    gh: 'mhanberg/everforest-alfred',
    url: 'https://github.com/mhanberg/everforest-alfred',
  },
  {
    category: 'other',
    name: 'colorls',
    icon: 'devicon-ruby-plain',
    maintainer: 'talwat',
    url: 'https://github.com/talwat/dotfiles',
  },
  {
    category: 'other',
    name: 'Cursors',
    icon: '🖱️',
    maintainer: 'talwat',
    gh: 'talwat/everforest-cursors',
    url: 'https://github.com/talwat/everforest-cursors',
  },
  {
    category: 'other',
    name: 'dipc',
    icon: 'devicon-rust-plain',
    maintainer: 'doprz',
    gh: 'doprz/dipc',
    url: 'https://github.com/doprz/dipc/',
  },
  {
    category: 'other',
    name: 'Element',
    icon: '💬',
    maintainer: 'maksim',
    url: 'https://git.sr.ht/~maksim/element-everforest',
  },
  {
    category: 'other',
    name: 'Gitea',
    icon: 'devicon-gitea-plain',
    maintainer: 'sainnhe',
    url: 'https://git.sainnhe.dev/sainnhe/gitea-themes',
  },
  {
    category: 'other',
    name: 'i3 / i3-gaps',
    icon: 'devicon-linux-plain',
    maintainer: '3rfaan',
    url: 'https://github.com/3rfaan/dotfiles',
  },
  {
    category: 'other',
    name: 'Insomnia',
    icon: '🌙',
    maintainer: 'talwat',
    gh: 'talwat/insomnia-plugin-everforest-theme',
    url: 'https://github.com/talwat/insomnia-plugin-everforest-theme',
  },
  {
    category: 'other',
    name: 'KDE',
    icon: 'devicon-linux-plain',
    maintainer: 'Serge2702',
    gh: 'Serge2702/KDE-Everforest',
    url: 'https://github.com/Serge2702/KDE-Everforest',
  },
  {
    category: 'other',
    name: 'Libadwaita (Gradience)',
    icon: 'devicon-gnome-plain',
    maintainer: 'GradienceTeam',
    url: 'https://raw.githubusercontent.com/GradienceTeam/Community/next/curated/everforest.json',
  },
  {
    category: 'other',
    name: 'Monkeytype',
    icon: '⌨️',
    maintainer: 'Community',
    url: 'https://monkeytype.com/',
  },
  {
    category: 'other',
    name: 'Obsidian',
    icon: '🔮',
    maintainer: 'kepano',
    gh: 'kepano/obsidian-minimal',
    url: 'https://github.com/kepano/obsidian-minimal',
  },
  {
    category: 'other',
    name: 'Polybar',
    icon: 'devicon-linux-plain',
    maintainer: '3rfaan',
    url: 'https://github.com/3rfaan/dotfiles',
  },
  {
    category: 'other',
    name: 'Proton (Mail, Calendar, Drive)',
    icon: '🔒',
    maintainer: 'isaac-8601',
    gh: 'isaac-8601/proton-everforest',
    url: 'https://github.com/isaac-8601/proton-everforest',
  },
  {
    category: 'other',
    name: 'Redlib / Libreddit',
    icon: 'devicon-reddit-plain',
    maintainer: 'isaac-8601',
    gh: 'isaac-8601/redlib-everforest',
    url: 'https://github.com/isaac-8601/redlib-everforest',
  },
  {
    category: 'other',
    name: 'SearXNG',
    icon: '🔍',
    maintainer: 'isaac-8601',
    gh: 'isaac-8601/searxng-everforest',
    url: 'https://github.com/isaac-8601/searxng-everforest',
  },
  {
    category: 'other',
    name: 'Shiki.js',
    icon: 'devicon-javascript-plain',
    maintainer: 'shikijs',
    url: 'https://shiki.style/',
  },
  {
    category: 'other',
    name: 'Slack',
    icon: 'devicon-slack-plain',
    maintainer: 'itendtostare',
    gh: 'itendtostare/everforest-slack',
    url: 'https://github.com/itendtostare/everforest-slack',
  },
  {
    category: 'other',
    name: 'tmux',
    icon: 'devicon-bash-plain',
    variants: [
    ],
  },
  {
    category: 'other',
    name: 'Xresources',
    icon: 'devicon-xorg-plain',
    maintainer: 'jef',
    gh: 'jef/everforest-xresources',
    url: 'https://github.com/jef/everforest-xresources',
  },
  {
    category: 'other',
    name: 'YouTube',
    icon: 'devicon-youtube-plain',
    maintainer: 'mel4tonin',
    gh: 'mel4tonin/everforest-youtube',
    url: 'https://github.com/mel4tonin/everforest-youtube',
  },
  {
    category: 'other',
    name: 'Zathura',
    icon: '📄',
    maintainer: 'maksim',
    url: 'https://git.sr.ht/~maksim/zathura-everforest',
  },
  {
    category: 'other',
    name: 'Zellij',
    icon: 'devicon-bash-plain',
    maintainer: 'ghostcrafter551',
    gh: 'ghostcrafter551/everforest-dark-zellij',
    url: 'https://github.com/ghostcrafter551/everforest-dark-zellij',
  },
  {
    category: 'other',
    name: 'Zsh',
    icon: 'devicon-bash-plain',
    maintainer: 'sainnhe',
    url: 'https://github.com/sainnhe/dotfiles',
  },
];

// ─── Sort alphabetically ──────────────────────────────────────────────────────
PORTS.sort((a, b) => a.name.localeCompare(b.name));

// ─── Shields.io badge ─────────────────────────────────────────────────────────
// Renders a flat star count badge for GitHub-hosted ports.
// style=flat&label= suppresses the "stars" label, leaving just the number.
// color and labelColor are set to transparent/neutral so it blends in;
// a CSS filter then desaturates it to match the monochrome meta row.

// ─── Toggle badges ────────────────────────────────────────────────────────────
// Set to true to re-enable shields.io star badges on port cards.
const SHOW_BADGES = false;

function starBadge(gh) {
  if (!gh) return '';
  const src = `https://img.shields.io/github/stars/${gh}?style=flat&color=859289&labelColor=3d484d&cacheSeconds=86400`;
  return `<img class="star-badge" src="${src}" alt="GitHub stars" loading="lazy" onerror="this.style.display='none'">`;
}

// ─── SVG icons ────────────────────────────────────────────────────────────────

const ICON_PERSON   = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke-linecap="round"/></svg>`;
const ICON_ARROW    = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`;
const ICON_CHEVRON  = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>`;
const ICON_EXTERNAL = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 3H3v10h10v-3M9 2h5v5M9 7l5-5"/></svg>`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function iconHTML(icon) {
  if (!icon) return `<span></span>`;
  if (icon.startsWith('devicon-')) return `<i class="${icon}" aria-hidden="true"></i>`;
  return `<span aria-hidden="true">${icon}</span>`;
}

// ─── Card builders ────────────────────────────────────────────────────────────

function buildSingleCard(port) {
  return `
    <a class="port-card" href="${port.url}" target="_blank" rel="noopener"
       data-name="${port.name.toLowerCase()}" data-category="${port.category}">
      <div class="port-card-header">
        <div class="port-icon">${iconHTML(port.icon)}</div>
        <span class="port-name">${port.name}</span>
        <span class="port-link-icon">${ICON_ARROW}</span>
      </div>
      <div class="port-meta">
        <span class="port-meta-item">${ICON_PERSON} ${port.maintainer}</span>
        ${SHOW_BADGES && port.gh ? `<span class="port-meta-item">${starBadge(port.gh)}</span>` : ''}
      </div>
    </a>`;
}

function buildVariantsCard(port) {
  const id = port.name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
  const rows = port.variants.map(v => {
    return `
      <a class="port-variant-row" href="${v.url}" target="_blank" rel="noopener">
        <span class="port-variant-maintainer">${ICON_PERSON} ${v.maintainer}</span>
        <span class="port-variant-meta">
          ${SHOW_BADGES && v.gh ? starBadge(v.gh) : ''}
          <span class="port-variant-link">${ICON_EXTERNAL}</span>
        </span>
      </a>`;
  }).join('');

  return `
    <div class="port-card has-variants"
         data-name="${port.name.toLowerCase()}" data-category="${port.category}">
      <div class="port-card-header">
        <div class="port-icon">${iconHTML(port.icon)}</div>
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

function buildCard(port) {
  return port.variants ? buildVariantsCard(port) : buildSingleCard(port);
}

// ─── Variant toggle ───────────────────────────────────────────────────────────

function toggleVariants(btn, targetId) {
  const list = document.getElementById(targetId);
  const open = list.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.innerHTML = `${ICON_CHEVRON} ${open ? 'Hide versions' : 'Show all versions'}`;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderAll() {
  const categories = ['all', 'editors', 'terminals', 'browsers', 'other'];

  categories.forEach(cat => {
    const grid  = document.getElementById(`grid-${cat}`);
    const ports = cat === 'all' ? PORTS : PORTS.filter(p => p.category === cat);
    grid.innerHTML = ports.map(buildCard).join('');

    const countEl = document.getElementById(`count-${cat}`);
    if (countEl) countEl.textContent = ports.length;
  });
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function initTabs() {
  document.getElementById('portsTabs').addEventListener('click', e => {
    const tab = e.target.closest('.ports-tab');
    if (!tab) return;

    document.getElementById('portSearch').value = '';
    showAllCards();

    document.querySelectorAll('.ports-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ports-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
    document.getElementById('noResults').classList.remove('visible');
  });
}

// ─── Search ───────────────────────────────────────────────────────────────────

function showAllCards() {
  document.querySelectorAll('.port-card').forEach(c => c.removeAttribute('hidden'));
}

function initSearch() {
  document.getElementById('portSearch').addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();

    if (!q) {
      showAllCards();
      document.getElementById('noResults').classList.remove('visible');
      return;
    }

    document.querySelectorAll('.ports-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ports-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-all').classList.add('active');
    document.querySelector('[data-tab="all"]').classList.add('active');

    let visible = 0;
    document.querySelectorAll('#grid-all .port-card').forEach(card => {
      const match = card.dataset.name.includes(q);
      card.toggleAttribute('hidden', !match);
      if (match) visible++;
    });

    document.getElementById('noResults').classList.toggle('visible', visible === 0);
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (typeof applyTheme === 'function') applyTheme('dark-medium');
  renderAll();
  initTabs();
  initSearch();
});