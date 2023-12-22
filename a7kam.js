let sideNav = document.getElementById("#sidenav");
let openBtn = document.querySelector("#open");

openBtn.addEventListener("click", function () {
  sideNav.classList.toggle("show");
});

  document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".a7kam-tabs li");

    var snwatRow = document.querySelector(".a7kam-row-snwat");
    var modo3atRow = document.querySelector(".a7kam-modo3at-row");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        snwatRow.style.display = "none";
        modo3atRow.style.display = "none";

        tabs.forEach(function (t) {
          t.classList.remove("active");
        });

        if (tab.dataset.select === ".a7kam-row-snwat") {
          snwatRow.style.display = "flex";
        } else if (tab.dataset.select === ".a7kam-modo3at-row") {
          modo3atRow.style.display = "flex";
        }

        tab.classList.add("active");
      });
    });
  });