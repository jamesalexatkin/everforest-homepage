const palettes = {
    dark: {
        // Background Colors
        "bg0": { color: "#2e3b2e", description: "Main background color" },
        "bg1": { color: "#343F44", description: "Cursor Line Background" },
        // Add other background colors...
        // Foreground Colors
        "fg": { color: "#D3C6AA", description: "Default Foreground, Signs" },
        "red": { color: "#E67E80", description: "Error Messages" },
        // Add other foreground colors...
    },
    medium: {
        // Background Colors
        "bg_dim": { color: "#232A2E", description: "Dimmed Background" },
        "bg0": { color: "#2D353B", description: "Default Background" },
        "bg1": { color: "#343F44", description: "Cursor Line Background" },
        // Add other background colors...
        // Foreground Colors
        "fg": { color: "#D3C6AA", description: "Default Foreground, Signs" },
        "red": { color: "#E67E80", description: "Error Messages" },
        // Add other foreground colors...
    },
    light: {
        // Background Colors
        "bg0": { color: "#e5e9f0", description: "Main background color" },
        "bg1": { color: "#eceff4", description: "Cursor Line Background" },
        // Add other background colors...
        // Foreground Colors
        "fg": { color: "#2e3440", description: "Default Foreground, Signs" },
        "red": { color: "#bf616a", description: "Error Messages" },
        // Add other foreground colors...
    }
};

function renderPalette(theme) {
    const backgroundPaletteContainer = document.getElementById("backgroundPalette");
    const foregroundPaletteContainer = document.getElementById("foregroundPalette");
    
    backgroundPaletteContainer.innerHTML = ''; // Clear previous content
    foregroundPaletteContainer.innerHTML = ''; // Clear previous content

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

        // Distinguish between background and foreground colors
        if (title.startsWith("bg")) {
            backgroundPaletteContainer.appendChild(card);
        } else {
            foregroundPaletteContainer.appendChild(card);
        }
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
