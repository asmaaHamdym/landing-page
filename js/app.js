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
let isScrolling;
const sections = document.querySelectorAll("section");
const nav_ul = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const makeActive = () => {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const active_li = document.querySelector(`.${section.id}`);
    // console.log(active_li);

    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      //apply active state on current section and corresponding Nav link
      section.classList.add("active");
      active_li.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("active");
      active_li.classList.remove("active");
    }
  }
};
const handleSectionClick = (event) => {
  event.preventDefault();
  const section_id = event.target.getAttribute("data-nav");
  const section = document.getElementById(section_id);
  console.log(section);

  section.scrollIntoView({ behavior: "smooth" });
};

// ;
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (const section of sections) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("data-nav", section.id);
  a.classList.add("menu__link", section.id);
  a.innerHTML = section.getAttribute("data-nav");
  // a.href = `#${section.id}`;
  li.appendChild(a);
  nav_ul.appendChild(li);
}

// Add class 'active' to section when near top of viewport and highlight viewes section in the navbar
document.addEventListener("scroll", makeActive);

// Scroll to anchor ID using scrollIntoview function
nav_ul.addEventListener("click", handleSectionClick);

// Hide fixed navigation bar while not scrolling

window.addEventListener("scroll", function () {
  // Clear the timeout if user is scrolling
  window.clearTimeout(isScrolling);

  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function () {
    console.log("User has stopped scrolling.");
    // Hide navigation
    nav.classList.remove("show");
  }, 200); // Adjust the timeout duration as needed
});
