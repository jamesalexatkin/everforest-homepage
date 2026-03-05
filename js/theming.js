// ─── Everforest palette data ─────────────────────────────────────────────────

export const THEMES = {
  'dark-hard':   { bg0:'#272e33', bg1:'#2e383c', bg2:'#374145', bg3:'#414b50', bg4:'#495156', bg5:'#4f5b58', fg:'#d3c6aa', 'fg-dim':'#859289', red:'#e67e80', orange:'#e69875', yellow:'#dbbc7f', green:'#a7c080', teal:'#83c092', blue:'#7fbbb3', purple:'#d699b6' },
  'dark-medium': { bg0:'#2d353b', bg1:'#343f44', bg2:'#3d484d', bg3:'#475258', bg4:'#4f585e', bg5:'#56635f', fg:'#d3c6aa', 'fg-dim':'#859289', red:'#e67e80', orange:'#e69875', yellow:'#dbbc7f', green:'#a7c080', teal:'#83c092', blue:'#7fbbb3', purple:'#d699b6' },
  'dark-soft':   { bg0:'#333c43', bg1:'#3a4248', bg2:'#434f55', bg3:'#4d5860', bg4:'#555f66', bg5:'#5c6a72', fg:'#d3c6aa', 'fg-dim':'#859289', red:'#e67e80', orange:'#e69875', yellow:'#dbbc7f', green:'#a7c080', teal:'#83c092', blue:'#7fbbb3', purple:'#d699b6' },
  'light-hard':  { bg0:'#fffbef', bg1:'#f4f0d9', bg2:'#edeada', bg3:'#e5dfc5', bg4:'#ddd8be', bg5:'#cdc9b4', fg:'#5c6a72', 'fg-dim':'#829181', red:'#f85552', orange:'#f57d26', yellow:'#dfa000', green:'#8da101', teal:'#35a77c', blue:'#3a94c5', purple:'#df69ba' },
  'light-medium':{ bg0:'#fdf6e3', bg1:'#f3ead3', bg2:'#eae4ca', bg3:'#e0d8c0', bg4:'#d8cfb7', bg5:'#c9c09e', fg:'#5c6a72', 'fg-dim':'#829181', red:'#f85552', orange:'#f57d26', yellow:'#dfa000', green:'#8da101', teal:'#35a77c', blue:'#3a94c5', purple:'#df69ba' },
  'light-soft':  { bg0:'#f8f0dc', bg1:'#f0e9cc', bg2:'#e8dfc0', bg3:'#ddd5b5', bg4:'#d5ccac', bg5:'#c5bc9a', fg:'#5c6a72', 'fg-dim':'#829181', red:'#f85552', orange:'#f57d26', yellow:'#dfa000', green:'#8da101', teal:'#35a77c', blue:'#3a94c5', purple:'#df69ba' },
};

export const SWATCH_ORDER = ['bg0','bg1','bg2','bg3','red','orange','yellow','green','teal','blue','purple'];

export let currentTheme = 'dark-medium';

// ─── Apply a named theme to the document ─────────────────────────────────────

export function applyTheme(name) {
  const t = THEMES[name];
  if (!t) return;

  currentTheme = name;
  document.body.setAttribute('data-theme', name);

  // Push every colour token into CSS custom properties
  Object.entries(t).forEach(([k, v]) => {
    document.documentElement.style.setProperty(`--${k}`, v);
  });

  renderSwatches(t);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });
}

// ─── Render the hero swatch bar ──────────────────────────────────────────────

function renderSwatches(t) {
  const row = document.getElementById('swatchRow');
  if (!row) return;

  row.innerHTML = SWATCH_ORDER.map(key => `
    <div class="swatch" style="background:${t[key]}">
      <span class="swatch-label">${t[key]}</span>
    </div>
  `).join('');
}

// ─── Wire up the theme switcher buttons ──────────────────────────────────────

export function initThemeSwitcher() {
  const switcher = document.getElementById('themeSwitcher');
  if (!switcher) return;

  switcher.addEventListener('click', e => {
    const btn = e.target.closest('.theme-btn');
    if (btn) applyTheme(btn.dataset.theme);
  });
}
