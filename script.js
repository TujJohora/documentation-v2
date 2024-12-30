const menuButton = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const menuItems = document.querySelectorAll(".sidebar nav a");

function toggleMenu() {
  sidebar.classList.toggle("active");
  menuButton.classList.toggle("active");
  content.classList.toggle("menu-open");
}

menuButton.addEventListener("click", toggleMenu);

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
