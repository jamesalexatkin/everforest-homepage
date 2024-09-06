// Function to copy color code to clipboard
function copyToClipboard(color, button) {
    navigator.clipboard.writeText(color).then(() => {
        // Show feedback
        const feedback = button.previousElementSibling;
        feedback.style.display = 'block';
        feedback.style.opacity = 1;

        // Hide feedback after a delay
        setTimeout(() => {
            feedback.style.opacity = 0;
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 300);
        }, 1000);
    });
}

// Function to get a random language from the available options
function getRandomLanguage() {
    const languages = ['python', 'javascript', 'go', 'c', 'markdown', 'sql', 'rust'];
    const randomIndex = Math.floor(Math.random() * languages.length);
    return languages[randomIndex];
}

// Initialize page with dark theme and random language
function initializePage() {
    const defaultLanguage = getRandomLanguage();
    changeLanguage(defaultLanguage);
    changeTheme(); // Ensure theme is initialized
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', initializePage);
