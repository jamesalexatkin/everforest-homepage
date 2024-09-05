const palettes = {
    dark: {
        "Accent 1": { color: "#5b6f5b", description: "Used for primary accents" },
        "Accent 2": { color: "#6c7e6c", description: "Used for secondary accents" },
        "Accent 3": { color: "#7a8e7a", description: "Used for tertiary accents" },
        "Background": { color: "#2e3b2e", description: "Main background color" },
        "Foreground": { color: "#d1d1d1", description: "Text and foreground elements" }
    },
    medium: {
        // Background
        "bg_dim": { color: "#232A2E", description: "Dimmed Background" },
        "bg0": { color: "#2D353B", description: "Default Background, Line Numbers Background, Signs Background, Status Line Background (inactive), Tab Line Label (active)" },
        "bg1": { color: "#343F44", description: "Cursor Line Background, Color Columns, Closed Folds Background, Status Line Background (active), Tab Line Background" },
        "bg2": { color: "#3D484D", description: "Popup Menu Background, Floating Window Background, Window Toolbar Background" },
        "bg3": { color: "#475258", description: "List Chars, Special Keys, Tab Line Label Background (inactive)" },
        "bg4": { color: "#4F585E", description: "Window Splits Separators, Whitespaces, Breaks" },
        "bg5": { color: "#56635f", description: "Not currently used" },
        "bg_visual": { color: "#543A48", description: "Visual Selection" },
        "bg_red": { color: "#514045", description: "Diff Deleted Line Background, Error Highlights" },
        "bg_green": { color: "#425047", description: "Diff Added Line Background, Hint Highlights" },
        "bg_blue": { color: "#3A515D", description: "Diff Changed Line Background, Info Highlights" },
        "bg_yellow": { color: "#4D4C43", description: "Warning Highlights" },
        // Foreground
        "fg": { color: "#D3C6AA", description: "Default Foreground, Signs, [Treesitter: Constants, Variables, Function Parameters, Properties, Symbol Identifiers]" },
        "red": { color: "#E67E80", description: "Conditional Keywords, Loop Keywords, Exception Keywords, Inclusion Keywords, Uncategorised Keywords, Diff Deleted Signs, Error Messages, Error Signs" },
        "orange": { color: "#E69875", description: "Operator Keywords, Operators, Labels, Storage Classes, Composite Types, Enumerated Types, Tags, Title, Debugging Statements" },
        "yellow": { color: "#DBBC7F", description: "Types, Special Characters, Warning Messages, Warning Signs, [Treesitter: Modules, Namespaces]" },
        "green": { color: "#A7C080", description: "Function Names, Method Names, Strings, Characters, Hint Messages, Hint Signs, Search Highlights, [Treesitter: Constructors, Function Calls, Built-In Functions, Macro Functions, String Escapes, Regex Literals, Tag Delimiters, Non-Structured Text]" },
        "aqua": { color: "#83C092", description: "Constants, Macros, [Treesitter: Strings, Characters]" },
        "blue": { color: "#7FBBB3", description: "Identifiers, Uncategorised Special Symbols, Diff Changed Text Background, Info Messages, Info Signs, [Treesitter: Fields, Special Punctuation, Math Environments]" },
        "purple": { color: "#D699B6", description: "Booleans, Numbers, Preprocessors, [Treesitter: Built-In Constants, Built-In Variables, Macro-Defined Constants, Attributes/Annotations]" },
        "grey0": { color: "#7A8478", description: "Line Numbers, Fold Columns, Concealed Text, Foreground UI Elements" },
        "grey1": { color: "#859289", description: "Comments, Punctuation Delimiters, Closed Folds, Ignored/Disabled, UI Borders, Status Line Text" },
        "grey2": { color: "#9DA9A0", description: "Cursor Line Number, Tab Line Label (inactive)" },
        "statusline1": { color: "#A7C080", description: "Menu Selection Background, Tab Line Label Background (active), Status Line Mode Indicator" },
        "statusline2": { color: "#D3C6AA", description: "Status Line Mode Indicator" },
        "statusline3": { color: "#E67E80", description: "Status Line Mode Indicator" },
    },
    light: {
        "Accent 1": { color: "#a2b8a2", description: "Used for primary accents" },
        "Accent 2": { color: "#b1c2b1", description: "Used for secondary accents" },
        "Accent 3": { color: "#c2d2c2", description: "Used for tertiary accents" },
        "Background": { color: "#6f7f6f", description: "Main background color" },
        "Foreground": { color: "#f0f0f0", description: "Text and foreground elements" }
    }
};

// Function to render color palette
function renderPalette(theme) {
    const paletteContainer = document.getElementById("paletteContainer");
    paletteContainer.innerHTML = ''; // Clear previous content

    const colors = palettes[theme];
    for (const [title, { color, description }] of Object.entries(colors)) {
        const card = document.createElement("div");
        card.className = "color-card";
        card.style.backgroundColor = color;

        const titleDiv = document.createElement("div");
        titleDiv.className = "color-card-title";
        titleDiv.textContent = title;

        const copyButton = document.createElement("button");
        copyButton.className = "copy-button";
        copyButton.textContent = "Copy";
        copyButton.onclick = function() {
            copyToClipboard(color, copyButton);
        };

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip-text";
        tooltip.textContent = description;

        const feedback = document.createElement("div");
        feedback.className = "copy-feedback";
        feedback.textContent = "Copied!";

        card.appendChild(titleDiv);
        card.appendChild(copyButton);
        card.appendChild(tooltip);
        card.appendChild(feedback);

        paletteContainer.appendChild(card);
    }
}

// Change theme and re-render palette
function changeTheme() {
    const theme = document.getElementById("theme").value;
    renderPalette(theme);
}

// Initialize palette with default theme
document.addEventListener('DOMContentLoaded', () => {
    changeTheme(); // Initialize palette with default theme
});
