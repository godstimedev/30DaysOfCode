const toggle = document.querySelector(".menu-icon");
const menu = document.querySelector("#menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
