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


const hideButton = document.getElementById('hideSecondary');
const secondaryContainer = document.querySelector('.secondary-container');
const mainContainer = document.querySelector('.main-container');

hideButton.addEventListener('click', function() {
    secondaryContainer.classList.toggle('hidden');
    mainContainer.classList.toggle('expanded');
});



// SIDEBAR

// JavaScript to toggle sidebar state
const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-items a");

allLinks.forEach((elem) => {
    elem.addEventListener("click", function () {
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if (link.href === hrefLinkClick) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});
