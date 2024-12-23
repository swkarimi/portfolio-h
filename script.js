
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
