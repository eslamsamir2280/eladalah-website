AOS.init();
let sideNav = document.getElementById("#sidenav");
let openBtn = document.querySelector("#open");

openBtn.addEventListener("click", function () {
  sideNav.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  var statsElement = document.getElementById("stats");
  var boxes = statsElement.querySelectorAll(".box");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function animateCounter(element, goal) {
    var currentValue = 0;
    var animationDuration = 2000;
    var interval = 10;
    var step = (goal / animationDuration) * interval;

    var intervalId = setInterval(function () {
      if (currentValue < goal) {
        currentValue += step;
        element.textContent = Math.round(currentValue);
      } else {
        element.textContent = goal;
        clearInterval(intervalId);
      }
    }, interval);
  }

  function handleScroll() {
    boxes.forEach(function (box) {
      if (isElementInViewport(box)) {
        var numberElement = box.querySelector(".number");
        var goal = parseInt(numberElement.getAttribute("data-goal"));

        if (!numberElement.hasAttribute("data-triggered")) {
          animateCounter(numberElement, goal);
          numberElement.setAttribute("data-triggered", "true");
        }
      }
    });
  }
  window.addEventListener("scroll", handleScroll);

  handleScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      item.classList.toggle("active");

      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});

var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
