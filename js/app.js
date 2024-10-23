let isScrolling = false;
const sections = document.querySelectorAll("section");
const nav_ul = document.getElementById("navbar__list");

const scroll_to_top_btn = document.querySelector(".scroll-to-top");
const btn_container = document.querySelector(".btn-container ");

// Function to update the active section and corresponding navigation link based on scroll position
const makeActive = () => {
  for (const section of sections) {
    // Get the bounding rectangle of the current section relative to the viewport
    const box = section.getBoundingClientRect();

    // Find the navigation link corresponding to the current section
    const active_li = document.querySelector(`.${section.id}`);

    // Check if the section is currently visible within the viewport
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active class to the section and its corresponding navigation link
      section.classList.add("active");
      active_li.classList.add("active");
    } else {
      // Remove active class from the section and its corresponding navigation link
      section.classList.remove("active");
      active_li.classList.remove("active");
    }
  }
};

// Function to handle clicks on navigation links
const handleSectionClick = (event) => {
  event.preventDefault();

  // Get the ID of the section to scroll to
  const section_id = event.target.getAttribute("data-nav");

  // Get a reference to the section element
  const section = document.getElementById(section_id);

  // Scroll to the section smoothly
  section.scrollIntoView({ behavior: "smooth" });
};
// Function to check if the user scrolled to bottom

// const

// Dynamically generate navigation links for each section
for (const section of sections) {
  // span tp ho;d the collapse icom
  const icon_span = document.createElement("span");
  icon_span.classList.add("collapse-icon");
  icon_span.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
  // icon_span.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
  const heading = section.querySelector("h2");
  console.log(heading);

  heading.append(icon_span);

  // console.log(section);

  const li = document.createElement("li");
  const a = document.createElement("a");

  // Set the data-nav attribute to the section's ID for easy reference
  a.setAttribute("data-nav", section.id);

  a.classList.add("menu__link", section.id);

  a.innerHTML = section.getAttribute("data-nav");

  a.href = `#${section.id}`;

  // Append the anchor element to the list item
  li.appendChild(a);

  // Append the list item to the navigation list
  nav_ul.appendChild(li);
}

// Add an event listener for scroll events
document.addEventListener("scroll", makeActive);

// Add an event listener for clicks on the navigation list
nav_ul.addEventListener("click", handleSectionClick);

// Function to detect end of scrolling and hide navigation
window.addEventListener("scroll", function () {
  // Clear any existing timeout if user is still scrolling

  window.clearTimeout(isScrolling);
  nav_ul.style.display = "block";

  isScrolling = setTimeout(function () {
    console.log("User has stopped scrolling.");
    nav_ul.style.display = "none";
  }, 2000);
});
