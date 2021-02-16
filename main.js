const menu = document.querySelector(".menu");
const navContents = document.querySelector("#nav_contents");

menu.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});
