// Define code samples for each language
const codeSamples = {
    python: `# Sample Code
def hello_world():
    print("Hello, World!")

hello_world()
`,
    javascript: `// Sample Code
function helloWorld() {
    console.log("Hello, World!");
}
helloWorld();
`,
    go: `// Sample Code
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`,
    c: `/* Sample Code */
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`,
    markdown: `<!-- Sample Code -->
# Hello, World!

This is a sample markdown document.
`,
    sql: `-- Sample Code
SELECT 'Hello, World!' AS greeting;
`,
    rust: `// Sample Code
fn main() {
    println!("Hello, World!");
}
`
};

// Function to change the language and update the code editor
function changeLanguage(language) {
    const codeEditor = document.getElementById("codeEditor");
    const code = codeEditor.querySelector("code");

    // Set the language class for syntax highlighting
    code.className = `language-${language}`;
    code.textContent = codeSamples[language];

    // Update Prism.js syntax highlighting
    highlightCode();

    // Update active tab
    document.querySelectorAll('.language-tabs i').forEach(icon => {
        icon.classList.remove('active');
    });
    document.querySelector(`.language-tabs i[data-language="${language}"]`).classList.add('active');
}

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

// Function to highlight code
function highlightCode() {
    const code = document.querySelector('#codeEditor code');
    if (code) {
        Prism.highlightElement(code);
    }
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
