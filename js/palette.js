// ─── Palette data ─────────────────────────────────────────────────────────────
// Mirrors theming.js but self-contained (no export/import needed).

const THEMES = {
  'dark-hard':   { bg0:'#272e33', bg1:'#2e383c', bg2:'#374145', bg3:'#414b50', bg4:'#495156', bg5:'#4f5b58', fg:'#d3c6aa', 'fg-dim':'#859289', red:'#e67e80', orange:'#e69875', yellow:'#dbbc7f', green:'#a7c080', teal:'#83c092', blue:'#7fbbb3', purple:'#d699b6' },
  'dark-medium': { bg0:'#2d353b', bg1:'#343f44', bg2:'#3d484d', bg3:'#475258', bg4:'#4f585e', bg5:'#56635f', fg:'#d3c6aa', 'fg-dim':'#859289', red:'#e67e80', orange:'#e69875', yellow:'#dbbc7f', green:'#a7c080', teal:'#83c092', blue:'#7fbbb3', purple:'#d699b6' },
  'dark-soft':   { bg0:'#333c43', bg1:'#3a4248', bg2:'#434f55', bg3:'#4d5860', bg4:'#555f66', bg5:'#5c6a72', fg:'#d3c6aa', 'fg-dim':'#859289', red:'#e67e80', orange:'#e69875', yellow:'#dbbc7f', green:'#a7c080', teal:'#83c092', blue:'#7fbbb3', purple:'#d699b6' },
  'light-hard':  { bg0:'#fffbef', bg1:'#f4f0d9', bg2:'#edeada', bg3:'#e5dfc5', bg4:'#ddd8be', bg5:'#cdc9b4', fg:'#5c6a72', 'fg-dim':'#829181', red:'#f85552', orange:'#f57d26', yellow:'#dfa000', green:'#8da101', teal:'#35a77c', blue:'#3a94c5', purple:'#df69ba' },
  'light-medium':{ bg0:'#fdf6e3', bg1:'#f3ead3', bg2:'#eae4ca', bg3:'#e0d8c0', bg4:'#d8cfb7', bg5:'#c9c09e', fg:'#5c6a72', 'fg-dim':'#829181', red:'#f85552', orange:'#f57d26', yellow:'#dfa000', green:'#8da101', teal:'#35a77c', blue:'#3a94c5', purple:'#df69ba' },
  'light-soft':  { bg0:'#f8f0dc', bg1:'#f0e9cc', bg2:'#e8dfc0', bg3:'#ddd5b5', bg4:'#d5ccac', bg5:'#c5bc9a', fg:'#5c6a72', 'fg-dim':'#829181', red:'#f85552', orange:'#f57d26', yellow:'#dfa000', green:'#8da101', teal:'#35a77c', blue:'#3a94c5', purple:'#df69ba' },
};

// ─── Semantic role definitions ────────────────────────────────────────────────

const ROLES = {
  // Backgrounds
  bg0:    { label: 'bg0',    group: 'backgrounds', desc: 'Main background' },
  bg1:    { label: 'bg1',    group: 'backgrounds', desc: 'Secondary background, floating panels' },
  bg2:    { label: 'bg2',    group: 'backgrounds', desc: 'Selection background' },
  bg3:    { label: 'bg3',    group: 'backgrounds', desc: 'Line number background' },
  bg4:    { label: 'bg4',    group: 'backgrounds', desc: 'Cursor line' },
  bg5:    { label: 'bg5',    group: 'backgrounds', desc: 'Non-text, line dividers' },
  // Foregrounds
  fg:        { label: 'fg',     group: 'foregrounds', desc: 'Primary text' },
  'fg-dim':  { label: 'fg-dim', group: 'foregrounds', desc: 'Comments, subtle text' },
  // Accent colours
  red:    { label: 'red',    group: 'accents', desc: 'Keywords, errors' },
  orange: { label: 'orange', group: 'accents', desc: 'Operators, attributes' },
  yellow: { label: 'yellow', group: 'accents', desc: 'Types, warnings' },
  green:  { label: 'green',  group: 'accents', desc: 'Strings, diff added' },
  teal:   { label: 'teal',   group: 'accents', desc: 'Functions, hints' },
  blue:   { label: 'blue',   group: 'accents', desc: 'Properties, info' },
  purple: { label: 'purple', group: 'accents', desc: 'Numbers, constants' },
};

const GROUPS = [
  { key: 'backgrounds', label: 'Backgrounds' },
  { key: 'foregrounds', label: 'Foregrounds' },
  { key: 'accents',     label: 'Accent colours' },
];

// ─── Colour math ──────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return { r, g, b };
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// WCAG relative luminance
function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const srgb = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrastRatio(hex1, hex2) {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker  = Math.min(l1, l2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

function wcagGrade(ratio) {
  if (ratio >= 7)   return { grade: 'AAA', pass: true };
  if (ratio >= 4.5) return { grade: 'AA',  pass: true };
  if (ratio >= 3)   return { grade: 'AA Large', pass: true };
  return { grade: 'Fail', pass: false };
}

// ─── Copy to clipboard ────────────────────────────────────────────────────────

function copyText(text, el) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${text}`);
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 1200);
  });
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderPalette(themeName) {
  const t = THEMES[themeName];
  const container = document.getElementById('paletteGroups');
  container.innerHTML = '';

  GROUPS.forEach(group => {
    const tokens = Object.entries(ROLES).filter(([, r]) => r.group === group.key);

    const section = document.createElement('section');
    section.className = 'palette-group';
    section.innerHTML = `<h2 class="palette-group-label">${group.label}</h2>`;

    const grid = document.createElement('div');
    grid.className = 'palette-grid';

    tokens.forEach(([key]) => {
      const hex = t[key];
      const { r, g, b } = hexToRgb(hex);
      const hsl = rgbToHsl(r, g, b);
      const role = ROLES[key];

      // Contrast against bg0 (for accent/fg colours) or fg (for bg colours)
      const contrastHex = group.key === 'backgrounds' ? t['fg'] : t['bg0'];
      const ratio = contrastRatio(hex, contrastHex);
      const { grade, pass } = wcagGrade(Number(ratio));

      // Decide text colour on the swatch based on luminance
      const swatchTextColour = luminance(hex) > 0.35 ? '#2d353b' : '#d3c6aa';

      grid.innerHTML += `
        <div class="palette-card">
          <div class="palette-swatch" style="background:${hex};color:${swatchTextColour}">
            <span class="palette-token-name">${role.label}</span>
          </div>
          <div class="palette-card-body">
            <p class="palette-role-desc">${role.desc}</p>
            <div class="palette-values">
              <button class="palette-value" onclick="copyText('${hex}', this)" title="Copy hex">${hex}</button>
              <button class="palette-value" onclick="copyText('rgb(${r}, ${g}, ${b})', this)" title="Copy RGB">rgb(${r}, ${g}, ${b})</button>
              <button class="palette-value" onclick="copyText('hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)', this)" title="Copy HSL">hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)</button>
            </div>
            <div class="palette-contrast">
              <span class="contrast-ratio">${ratio}:1</span>
              <span class="contrast-grade ${pass ? 'pass' : 'fail'}">${grade}</span>
              <span class="contrast-against">vs ${group.key === 'backgrounds' ? 'fg' : 'bg0'}</span>
            </div>
          </div>
        </div>`;
    });

    // Work out how many columns the grid will have at the current container width,
    // then pad with invisible filler cards so the last row is fully occupied and
    // no ghost column gap appears for groups with fewer cards than columns.
    // We calculate based on the minmax(260px, 1fr) track definition.
    const containerWidth = container.offsetWidth || window.innerWidth;
    const cols = Math.max(1, Math.floor(containerWidth / 260));
    const remainder = tokens.length % cols;
    if (remainder !== 0) {
      const fillers = cols - remainder;
      for (let i = 0; i < fillers; i++) {
        grid.innerHTML += `<div class="palette-card palette-card--filler" aria-hidden="true"></div>`;
      }
    }

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// ─── Toast ────────────────────────────────────────────────────────────────────

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2000);
}

// ─── Theme switcher ───────────────────────────────────────────────────────────

let currentTheme = 'dark-medium';

function switchTheme(name) {
  currentTheme = name;
  const t = THEMES[name];

  document.body.setAttribute('data-theme', name);
  Object.entries(t).forEach(([k, v]) => {
    document.documentElement.style.setProperty(`--${k}`, v);
  });

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });

  renderPalette(name);
}

// ─── Export ───────────────────────────────────────────────────────────────────

function exportAs(format, action) {
  const t = THEMES[currentTheme];
  const labels  = { css: 'CSS', json: 'JSON', yaml: 'YAML' };
  const exts    = { css: 'css', json: 'json', yaml: 'yaml' };
  const mimes   = { css: 'text/css', json: 'application/json', yaml: 'text/yaml' };
  let output = '';

  if (format === 'css') {
    const vars = Object.entries(t).map(([k, v]) => `  --${k}: ${v};`).join('\n');
    output = `/* Everforest · ${currentTheme} */\n:root {\n${vars}\n}`;
  } else if (format === 'json') {
    output = JSON.stringify({ [currentTheme]: t }, null, 2);
  } else if (format === 'yaml') {
    const lines = Object.entries(t).map(([k, v]) => `  ${k}: "${v}"`).join('\n');
    output = `# Everforest · ${currentTheme}\n${currentTheme}:\n${lines}`;
  }

  if (action === 'download') {
    const blob = new Blob([output], { type: mimes[format] });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `everforest-${currentTheme}.${exts[format]}`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`${labels[format]} downloaded`);
  } else {
    navigator.clipboard.writeText(output).then(() => {
      showToast(`${labels[format]} copied to clipboard`);
    });
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  switchTheme('dark-medium');

  document.getElementById('themeSwitcher').addEventListener('click', e => {
    const btn = e.target.closest('.theme-btn');
    if (btn) switchTheme(btn.dataset.theme);
  });
});