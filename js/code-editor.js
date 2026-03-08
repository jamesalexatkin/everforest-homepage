// ─── Code snippets ───────────────────────────────────────────────────────────
// Each snippet uses the Everforest palette as its subject matter,
// so the editor demonstrates the theme by describing itself.

const SNIPPETS = {
  python: `# Everforest palette loader
from dataclasses import dataclass
from typing import Literal

Variant = Literal["hard", "medium", "soft"]

@dataclass
class Palette:
    bg0: str
    bg1: str
    green: str
    teal: str
    red: str
    yellow: str

DARK: dict[Variant, Palette] = {
    "medium": Palette(
        bg0    = "#2d353b",
        bg1    = "#343f44",
        green  = "#a7c080",
        teal   = "#83c092",
        red    = "#e67e80",
        yellow = "#dbbc7f",
    ),
}

def load(mode: str = "dark", variant: Variant = "medium") -> Palette:
    """Return the Everforest palette for the given mode and variant."""
    palettes = DARK if mode == "dark" else LIGHT
    return palettes[variant]`,

  javascript: `// Everforest theme switcher
const THEMES = {
  'dark-medium': {
    bg0:    '#2d353b',
    bg1:    '#343f44',
    green:  '#a7c080',
    teal:   '#83c092',
    red:    '#e67e80',
    yellow: '#dbbc7f',
  },
};

/**
 * Apply an Everforest palette variant to the document root.
 * @param {string} name - Theme key e.g. 'dark-medium'
 */
function applyTheme(name) {
  const palette = THEMES[name];
  if (!palette) throw new Error(\`Unknown theme: \${name}\`);

  const root = document.documentElement;
  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(\`--\${key}\`, value);
  });
}

applyTheme('dark-medium');`,

  rust: `// Everforest palette for Rust projects
use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct Palette {
    pub bg0:    &'static str,
    pub bg1:    &'static str,
    pub green:  &'static str,
    pub teal:   &'static str,
    pub red:    &'static str,
    pub yellow: &'static str,
}

pub fn dark_medium() -> Palette {
    Palette {
        bg0:    "#2d353b",
        bg1:    "#343f44",
        green:  "#a7c080",
        teal:   "#83c092",
        red:    "#e67e80",
        yellow: "#dbbc7f",
    }
}

fn main() {
    let palette = dark_medium();
    println!("Background: {}", palette.bg0);
    println!("Accent:     {}", palette.green);
}`,

  go: `// Everforest palette loader for Go
package everforest

import "fmt"

// Palette holds a single Everforest colour variant.
type Palette struct {
  BG0    string
  BG1    string
  Green  string
  Teal   string
  Red    string
  Yellow string
}

// DarkMedium returns the dark-medium variant.
func DarkMedium() Palette {
  return Palette{
    BG0:    "#2d353b",
    BG1:    "#343f44",
    Green:  "#a7c080",
    Teal:   "#83c092",
    Red:    "#e67e80",
    Yellow: "#dbbc7f",
  }
}

func main() {
  p := DarkMedium()
  fmt.Printf("bg0:   %s\\n", p.BG0)
  fmt.Printf("green: %s\\n", p.Green)
}`,

  sql: `-- Everforest colour reference table
CREATE TABLE palette (
  id       SERIAL PRIMARY KEY,
  variant  TEXT NOT NULL,
  role     TEXT NOT NULL,
  hex      CHAR(7) NOT NULL,
  usage    TEXT
);

INSERT INTO palette (variant, role, hex, usage) VALUES
  ('dark-medium', 'bg0',    '#2d353b', 'Main background'),
  ('dark-medium', 'bg1',    '#343f44', 'Secondary background'),
  ('dark-medium', 'green',  '#a7c080', 'Strings, accent'),
  ('dark-medium', 'teal',   '#83c092', 'Functions, hints'),
  ('dark-medium', 'red',    '#e67e80', 'Keywords, errors'),
  ('dark-medium', 'yellow', '#dbbc7f', 'Types, warnings');

-- Fetch all accent colours across variants
SELECT variant, role, hex
FROM   palette
WHERE  role NOT LIKE 'bg%'
ORDER  BY variant, role;`,
};

// ─── Gutter ──────────────────────────────────────────────────────────────────

function renderGutter(code) {
  const lineCount = code.split("\n").length;
  const gutter = document.getElementById("editorGutter");
  if (!gutter) return;
  gutter.textContent = Array.from({ length: lineCount }, (_, i) => i + 1).join(
    "\n",
  );
}

// ─── Language switch ──────────────────────────────────────────────────────────

function switchLanguage(lang, file) {
  const snippet = SNIPPETS[lang] ?? "";
  const codeEl = document.getElementById("editorCode");
  const filenameEl = document.getElementById("editorFilename");
  if (!codeEl) return;

  codeEl.className = `language-${lang}`;
  codeEl.textContent = snippet;
  if (filenameEl) filenameEl.textContent = file;

  renderGutter(snippet);

  if (window.Prism) Prism.highlightElement(codeEl);
}

// ─── Init ─────────────────────────────────────────────────────────────────────

export function initEditor() {
  const tabs = document.getElementById("editorTabs");
  if (!tabs) return;

  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".editor-tab");
    if (!tab) return;
    document
      .querySelectorAll(".editor-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    switchLanguage(tab.dataset.lang, tab.dataset.file);
  });

  // Wait for deferred Prism scripts before first highlight
  window.addEventListener("load", () => {
    switchLanguage("python", "main.py");
  });
}
