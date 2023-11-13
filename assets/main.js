// Get the theme switcher element
const themeSwitcher = document.getElementById("theme-switcher");

// Track the current theme
let currentTheme = "theme-dark"; // Change the initial theme to "theme-dark"

// Function to toggle themes
function toggleTheme() {
    // Remove the current theme class
    document.body.classList.remove(currentTheme);

    // Toggle to the next theme
    if (currentTheme === "theme-dark") {
        currentTheme = "theme-light";
    } else {
        currentTheme = "theme-dark";
    }

    // Apply the new theme class
    document.body.classList.add(currentTheme);
}

// Apply the default dark theme when the page loads
document.body.classList.add(currentTheme);

// Add a click event listener to the theme switcher
themeSwitcher.addEventListener("click", toggleTheme);