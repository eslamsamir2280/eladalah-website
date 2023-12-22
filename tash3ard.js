let sideNav = document.getElementById("#sidenav");
let openBtn = document.querySelector("#open");

openBtn.addEventListener("click", function () {
  sideNav.classList.toggle("show");
});
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let contentSections = document.querySelectorAll(".content-sec > div ");
let divsArray = Array.from(contentSections);
tabsArray.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.select).style.display =
      "flex";
  });
});
   function print() {
     var mywindow = window.open("", "_blank");
     mywindow.document.write("<html><head>");
     mywindow.document.write('<link rel="stylesheet" href="./print.css" >');
     mywindow.document.write(" <title> موسوعة العدالة القانونية </title>");
     mywindow.document.write("</head><body>");
     mywindow.document.write('<div style="text-align: right">');
     mywindow.document.write(
       ' <img src="./images/logo.webp" style="width:25%" > '
     );
     mywindow.document.write("</div>");
mywindow.document.write($('.box-tash-content').html())
     mywindow.document.write("</body></html>");
   }