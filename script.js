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

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop - 220, Math.floor(window.scrollY));

    if (window.scrollY >= sectionTop - 252) {
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

emailjs.init("6nM1diP5-Ox46B0iD");

function sendMessage() {
  const messageContent = document.getElementById("message").value;
  const senderName = "Website Visitor";

  if (!messageContent.trim()) {
    alert("Please enter a message before sending.");
    return;
  }

  // Send the email
  emailjs
    .send("service_rpmkxcp", "template_s5gw08b", {
      from_name: senderName,
      to_name: "Your Name",
      message: messageContent,
    })
    .then(() => {
      alert("message sent successfully!");
      document.querySelector("textarea").value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });
}
