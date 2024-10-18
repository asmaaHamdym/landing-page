/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
console.log(sections);

const nav_ul = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const makeActive = () => {
  console.log("Hi");

  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      //apply active state on current section and corresponding Nav link
      section.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("active");
    }
  }
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (const section of sections) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("menu__link");
  a.textContent = section.getAttribute("data-nav");
  a.href = `#${section.id}`;
  li.appendChild(a);
  nav_ul.appendChild(li);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("scroll", makeActive);

// Build menu

// Scroll to section on link click

// Set sections as active
