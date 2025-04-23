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
// const dropdownButtons = document.querySelectorAll(".homeDropdownBtn");

// dropdownButtons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     e.preventDefault(e);

//     const arrow = this.querySelector(".homeArrow");

//     const dropdown = this.nextElementSibling;
//     dropdown.classList.toggle("hidden");

//     arrow.classList.toggle("rotate-180");
//   });
// });

// document.addEventListener("click", function (event) {
//   const isClickInside = event.target.closest(".relative");
//   if (!isClickInside) {
//     document.querySelectorAll(".homeDropdown").forEach((drop) => {
//       drop.classList.add("hidden");
//     });
//   }
// });

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

// swiper js library
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   // slidesPerView: 3,
//   // spaceBetween: 10,
//   direction: "vertical",
//   loop: true,
//   // autoplay: {
//   //   delay: 3000,
//   //   disableOnInteraction: false,
//   // },
//   // speed: 500,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     //   clickable: true,
//     //   dynamicBullets: true,
//     //   type: "bullets",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
