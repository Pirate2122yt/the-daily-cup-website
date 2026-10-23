// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

function setMenuOpen(isOpen) {
  navigation.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
}

menuButton.addEventListener("click", () => {
  setMenuOpen(!navigation.classList.contains("open"));
});

// Close the menu after selecting a navigation link.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

// Automatically update the copyright year.
document.querySelector("#year").textContent = new Date().getFullYear();
