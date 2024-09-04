const palettes = {
    dark: {
        "Accent 1": "#5b6f5b",
        "Accent 2": "#6c7e6c",
        "Accent 3": "#7a8e7a",
        "Background": "#2e3b2e",
        "Foreground": "#d1d1d1"
    },
    medium: {
        "Accent 1": "#8f9d8f",
        "Accent 2": "#9eae9e",
        "Accent 3": "#aebfaa",
        "Background": "#4c5f4c",
        "Foreground": "#e0e0e0"
    },
    light: {
        "Accent 1": "#a2b8a2",
        "Accent 2": "#b1c2b1",
        "Accent 3": "#c2d2c2",
        "Background": "#6f7f6f",
        "Foreground": "#f0f0f0"
    }
};

// Function to render color palette
function renderPalette(theme) {
    const paletteContainer = document.getElementById("paletteContainer");
    paletteContainer.innerHTML = ''; // Clear previous content

    const colors = palettes[theme];
    for (const [title, color] of Object.entries(colors)) {
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

        const feedback = document.createElement("div");
        feedback.className = "copy-feedback";
        feedback.textContent = "Copied!";

        card.appendChild(titleDiv);
        card.appendChild(copyButton);
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
