const toggle = document.querySelector(".menu-icon");
const menu = document.querySelector("#menu");

function menutoggle() {
  if (menu.classList.contains("active")) {
    menu.classList.remove = "active";
  } else {
    menu.classList.add = "active";
  }

  console.log("you");
}

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  menutoggle();
});
