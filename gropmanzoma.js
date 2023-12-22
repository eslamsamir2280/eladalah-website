let sideNav = document.getElementById("sidenav");
let openBtn = document.querySelector("#open");

openBtn.addEventListener("click", function () {
  sideNav.classList.toggle("show");
});
