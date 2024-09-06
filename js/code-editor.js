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


// Function to highlight code
function highlightCode() {
    const code = document.querySelector('#codeEditor code');
    if (code) {
        Prism.highlightElement(code);
    }
}