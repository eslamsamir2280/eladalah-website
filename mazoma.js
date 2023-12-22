let sideNav = document.getElementById("sidenav");
let openBtn = document.querySelector("#open");

openBtn.addEventListener("click", function () {
  sideNav.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  var treeViewItems = document.querySelectorAll(
    ".treeView summary, .treeView .single"
  );

  treeViewItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // إزالة الفئة "active" من كل العناصر
      treeViewItems.forEach(function (otherItem) {
        otherItem.classList.remove("active");
      });

      // إضافة الفئة "active" للعنصر الذي تم الضغط عليه
      item.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var expandButton = document.getElementById("expandAll");
  var collapseButton = document.getElementById("collapseAll");
  var treeViewItems = document.querySelectorAll(".treeView details");

  expandButton.addEventListener("click", function (event) {
    event.preventDefault();
    treeViewItems.forEach(function (item) {
      item.setAttribute("open", "open");
    });
  });

  collapseButton.addEventListener("click", function (event) {
    event.preventDefault();
    treeViewItems.forEach(function (item) {
      item.removeAttribute("open");
    });
  });
});       
    function changeFontSize(sizeDifference) {
      var textElement = document.querySelector(".text p");
      var currentSize = window
        .getComputedStyle(textElement, null)
        .getPropertyValue("font-size");
      var newSize = parseFloat(currentSize) + sizeDifference + "px";
      textElement.style.fontSize = newSize;
    }
     var resizer = document.querySelector(".resizer"),
       sidebar = document.querySelector(".sidebar");

     function initResizerFn(resizer, sidebar) {
       // track current mouse position in x var
       var x, w;

       function rs_mousedownHandler(e) {
         x = e.clientX;

         var sbWidth = window.getComputedStyle(sidebar).width;
         w = parseInt(sbWidth, 10);

         document.addEventListener("mousemove", rs_mousemoveHandler);
         document.addEventListener("mouseup", rs_mouseupHandler);
       }

       function rs_mousemoveHandler(e) {
         var dx = e.clientX - x;

         var cw = w + dx; // complete width

         if (cw < 1200) {
           sidebar.style.width = `${cw}px`;
         }
       }

       function rs_mouseupHandler() {
         // remove event mousemove && mouseup
         document.removeEventListener("mouseup", rs_mouseupHandler);
         document.removeEventListener("mousemove", rs_mousemoveHandler);
       }

       resizer.addEventListener("mousedown", rs_mousedownHandler);
     }

     initResizerFn(resizer, sidebar);