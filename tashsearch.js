document.addEventListener("DOMContentLoaded", function () {
  var accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    var header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      var content = item.querySelector(".accordion-content");
      content.style.display =
        content.style.display === "none" ? "block" : "none";

      // Hide other accordion items
      // accordionItems.forEach(function (otherItem) {
      //   if (otherItem !== item) {
      //     otherItem.querySelector(".accordion-content").style.display = "none";
      //   }
      // });
    });
  });
});
