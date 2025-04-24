// sidebar logic
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sideNavbar");
const cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
  sidebar.style.display = "block";
  hamburger.style.visibility = "hidden";
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  sidebar.style.display = "none";
  hamburger.style.visibility = "visible";
  cross.style.display = "none";
});

// li logic
const dropdownButton = document.querySelectorAll(".homeDropdownBtn");
const arrow = document.querySelector(".homeArrow");
const dropdown = document.getElementById("homeDropdown");

const toggleDropdown = function () {
  arrow.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
};

dropdownButton.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });
});

// slider
$(".owl-carousel").owlCarousel({
  loop: true,
  stagePadding: 15,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  // autoplayHoverPause: true,
  navText: [
    '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
    '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
  ],
  responsive: {
    320: {
      items: 1,
    },
    640: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

// scroll to the top
// const scrollToTop = document.getElementById("arrowScroll");

// window.onscroll = () => {
//   if (window.scrollY > 500) {
//     arrowScroll.style.opacity = "1";
//   } else {
//     arrowScroll.style.opacity = "0";
//   }
// };

// scrollToTop.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// accordian logic
// JavaScript to toggle the answers and rotate the arrows
document.querySelectorAll('[id^="question"]').forEach(function (button, index) {
  button.addEventListener("click", function () {
    let answer = document.getElementById("answer" + (index + 1));
    let arrow = document.getElementById("arrow" + (index + 1));

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "none";
      arrow.style.transform = "rotate(-180deg)";
    }
  });
});
