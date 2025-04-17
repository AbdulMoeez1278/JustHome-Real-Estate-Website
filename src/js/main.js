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

// swiper js library
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // slidesPerView: 3,
  // spaceBetween: 10,
  direction: "vertical",
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    //   type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
