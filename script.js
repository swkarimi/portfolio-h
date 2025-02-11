/** @format */

const button = document.getElementById("toggleMode");
const body = document.body;

button.addEventListener("click", () => {
  const isDarkMode = !body.classList.contains("light-mode");

  if (isDarkMode) {
    // Switch to light mode
    body.classList.add("light-mode");
    button.classList.add("light-mode");
  } else {
    // Switch to dark mode
    body.classList.remove("light-mode");
    button.classList.remove("light-mode");
  }
});

// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight,
//     csectionId = current.getAttribute('id');

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector('.nav-menu')
//     }
//   })
// }

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".left-side nav ul li a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
