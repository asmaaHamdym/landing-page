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

  const section_id = event.target.getAttribute("data-nav");
  const section = document.getElementById(section_id);

  section.scrollIntoView({ behavior: "smooth" });
};

// Function to check if the user scrolled to bottom
const isBottom = () => {
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  // Check if user has scrolled past the fold
  if (scrollPosition > viewportHeight) {
    btn_container.style.display = "flex";
  }
};
const checkScrolling = () => {
  // Clear any existing timeout if user is still scrolling

  window.clearTimeout(isScrolling);
  nav_ul.style.display = "block";

  isScrolling = setTimeout(function () {
    nav_ul.style.display = "none";
  }, 2000);
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dynamically generate navigation links for each section
for (const section of sections) {
  const paragraph = section.querySelector("p");
  const heading = section.querySelector("h2");

  const icon_span = document.createElement("span");
  icon_span.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
  icon_span.classList.add("caret-icon");
  heading.append(icon_span);
  heading.addEventListener("click", () => {
    paragraph.classList.toggle("hide");
    icon_span.classList.toggle("caret-up");
  });

  const li = document.createElement("li");
  const a = document.createElement("a");

  a.setAttribute("data-nav", section.id);
  a.classList.add("menu__link", section.id);
  a.innerHTML = section.getAttribute("data-nav");
  a.href = `#${section.id}`;

  li.appendChild(a);
  nav_ul.appendChild(li);
}

nav_ul.addEventListener("click", handleSectionClick);
scroll_to_top_btn.addEventListener("click", scrollToTop);

// Add event listeners for scroll events
document.addEventListener("scroll", makeActive);
window.addEventListener("scroll", isBottom);
window.addEventListener("scroll", checkScrolling);
