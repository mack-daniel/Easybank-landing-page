const menu = document.getElementById("menu");
const modal = document.getElementById("modal");
const navlinks = document.querySelector(".navlinks");
const body = document.getElementsByTagName("body");

menu.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  if (navlinks.classList.contains("active")) {
    menu.setAttribute("src", "./images/icon-close.svg");
    modal.style.display = "block";
  } else {
    menu.setAttribute("src", "./images/icon-hamburger.svg");
    modal.style.display = "none";
  }
});
