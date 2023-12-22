let password = document.getElementById("password");
let eye = document.getElementById("showpass");
eye.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
};

let sideNav = document.getElementById("sidenav");
let openBtn = document.querySelector("#open");

openBtn.addEventListener("click", function () {
  sideNav.classList.toggle("show");
});
