const themes = {
    medium: {
        // Background
        "bg_dim": { color: "#232A2E", description: "Dimmed Background", type: "background" },
        "bg0": { color: "#2D353B", description: "Default Background, Line Numbers Background, Signs Background, Status Line Background (inactive), Tab Line Label (active)", type: "background" },
        "bg1": { color: "#343F44", description: "Cursor Line Background, Color Columns, Closed Folds Background, Status Line Background (active), Tab Line Background", type: "background" },
        "bg2": { color: "#3D484D", description: "Popup Menu Background, Floating Window Background, Window Toolbar Background", type: "background" },
        "bg3": { color: "#475258", description: "List Chars, Special Keys, Tab Line Label Background (inactive)", type: "background" },
        "bg4": { color: "#4F585E", description: "Window Splits Separators, Whitespaces, Breaks", type: "background" },
        "bg5": { color: "#56635f", description: "Not currently used", type: "background" },
        "bg_visual": { color: "#543A48", description: "Visual Selection", type: "background" },
        "bg_red": { color: "#514045", description: "Diff Deleted Line Background, Error Highlights", type: "background" },
        "bg_green": { color: "#425047", description: "Diff Added Line Background, Hint Highlights", type: "background" },
        "bg_blue": { color: "#3A515D", description: "Diff Changed Line Background, Info Highlights", type: "background" },
        "bg_yellow": { color: "#4D4C43", description: "Warning Highlights", type: "background" },
        // Foreground
        "fg": { color: "#D3C6AA", description: "Default Foreground, Signs, [Treesitter: Constants, Variables, Function Parameters, Properties, Symbol Identifiers]", type: "foreground" },
        "red": { color: "#E67E80", description: "Conditional Keywords, Loop Keywords, Exception Keywords, Inclusion Keywords, Uncategorised Keywords, Diff Deleted Signs, Error Messages, Error Signs", type: "foreground" },
        "orange": { color: "#E69875", description: "Operator Keywords, Operators, Labels, Storage Classes, Composite Types, Enumerated Types, Tags, Title, Debugging Statements", type: "foreground" },
        "yellow": { color: "#DBBC7F", description: "Types, Special Characters, Warning Messages, Warning Signs, [Treesitter: Modules, Namespaces]", type: "foreground" },
        "green": { color: "#A7C080", description: "Function Names, Method Names, Strings, Characters, Hint Messages, Hint Signs, Search Highlights, [Treesitter: Constructors, Function Calls, Built-In Functions, Macro Functions, String Escapes, Regex Literals, Tag Delimiters, Non-Structured Text]", type: "foreground" },
        "aqua": { color: "#83C092", description: "Constants, Macros, [Treesitter: Strings, Characters]", type: "foreground" },
        "blue": { color: "#7FBBB3", description: "Identifiers, Uncategorised Special Symbols, Diff Changed Text Background, Info Messages, Info Signs, [Treesitter: Fields, Special Punctuation, Math Environments]", type: "foreground" },
        "purple": { color: "#D699B6", description: "Booleans, Numbers, Preprocessors, [Treesitter: Built-In Constants, Built-In Variables, Macro-Defined Constants, Attributes/Annotations]", type: "foreground" },
        "grey0": { color: "#7A8478", description: "Line Numbers, Fold Columns, Concealed Text, Foreground UI Elements", type: "foreground" },
        "grey1": { color: "#859289", description: "Comments, Punctuation Delimiters, Closed Folds, Ignored/Disabled, UI Borders, Status Line Text", type: "foreground" },
        "grey2": { color: "#9DA9A0", description: "Cursor Line Number, Tab Line Label (inactive)", type: "foreground" },
        "statusline1": { color: "#A7C080", description: "Menu Selection Background, Tab Line Label Background (active), Status Line Mode Indicator", type: "foreground" },
        "statusline2": { color: "#D3C6AA", description: "Status Line Mode Indicator", type: "foreground" },
        "statusline3": { color: "#E67E80", description: "Status Line Mode Indicator", type: "foreground" },
    },
};

function renderThemes() {
    const ideSection = document.getElementById("ideThemes");
    const editorSection = document.getElementById("editorThemes");

    ideSection.innerHTML = ''; // Clear previous content
    editorSection.innerHTML = ''; // Clear previous content

    // Data for themes
    const themePrograms = {
        "IDEs": [
            { name: "JetBrains IntelliJ", icon: "https://devicon.dev/devicon-icons/master/icons/intellij/intellij-original.svg", url: "https://www.jetbrains.com/idea/" },
            { name: "Visual Studio", icon: "https://devicon.dev/devicon-icons/master/icons/visualstudio/visualstudio-plain.svg", url: "https://visualstudio.microsoft.com/" },
        ],
        "Code Editors": [
            { name: "Visual Studio Code", icon: "https://devicon.dev/devicon-icons/master/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },
            { name: "Sublime Text", icon: "https://devicon.dev/devicon-icons/master/icons/sublime/sublime-original.svg", url: "https://www.sublimetext.com/" },
        ]
    };

    for (const [sectionTitle, programs] of Object.entries(themePrograms)) {
        const sectionContainer = sectionTitle === "IDEs" ? ideSection : editorSection;

        programs.forEach(program => {
            const card = document.createElement("div");
            card.className = "program-card";

            const icon = document.createElement("img");
            icon.className = "program-icon";
            icon.src = program.icon;
            icon.alt = `${program.name} Icon`;

            const name = document.createElement("div");
            name.className = "program-name";
            name.textContent = program.name;

            card.appendChild(icon);
            card.appendChild(name);

            card.onclick = function() {
                window.open(program.url, '_blank');
            };

            sectionContainer.appendChild(card);
        });
    }
}


function renderPalette(theme) {
    const backgroundPaletteContainer = document.getElementById("backgroundPalette");
    const foregroundPaletteContainer = document.getElementById("foregroundPalette");

    backgroundPaletteContainer.innerHTML = ''; // Clear previous content
    foregroundPaletteContainer.innerHTML = ''; // Clear previous content

    const colors = themes[theme];

    for (const [title, { color, description, type }] of Object.entries(colors)) {
        const card = document.createElement("div");
        card.className = "color-card";
        card.style.backgroundColor = color;
        card.style.color = type === "background" ? colors["fg"].color : colors["bg0"].color;
        card.style.cursor = "pointer"; // Change cursor to pointer

        const titleDiv = document.createElement("div");
        titleDiv.className = "color-card-title";
        titleDiv.textContent = title;

        const hexCodeDiv = document.createElement("div");
        hexCodeDiv.className = "color-card-hex";
        hexCodeDiv.textContent = color;

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip-text";
        tooltip.textContent = description;

        card.appendChild(titleDiv);
        card.appendChild(hexCodeDiv);
        card.appendChild(tooltip);

        // Add click event to copy color to clipboard and show toast message
        card.onclick = function() {
            copyToClipboard(color);
            showToast("Copied to clipboard!");
        };

        if (type === "background") {
            backgroundPaletteContainer.appendChild(card);
        } else {
            foregroundPaletteContainer.appendChild(card);
        }
    }
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000); // Toast disappears after 3 seconds

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3500); // Ensure toast is removed after fade-out
}

// Change theme and re-render palette
function changeTheme() {
    const theme = document.getElementById("theme").value;
    renderPalette(theme);
}

// Initialize palette with default theme
document.addEventListener('DOMContentLoaded', () => {
    renderThemes();
    changeTheme(); // Initialize palette with default theme
});
