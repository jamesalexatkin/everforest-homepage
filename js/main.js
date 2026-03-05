// ─── main.js — entry point ───────────────────────────────────────────────────
// Imports are ES modules; index.html loads this with type="module".

import { applyTheme, initThemeSwitcher } from './theming.js';
import { initEditor } from './code-editor.js';

// Apply the default theme immediately so there's no flash of unstyled content
applyTheme('dark-medium');

// Wire up interactive components once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initEditor();
});
