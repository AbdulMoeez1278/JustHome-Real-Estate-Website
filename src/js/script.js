console.log("Website is in progress...");

//scroll to the top - logic
const scrollToTopButton = document.getElementById("scroll-arrow");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: For a smoother scrolling effect
  });
});

// const currloc = location.href;
// const menuItem = document.querySelectorAll("a");
// const menuLen = menuItem.length;
// for (let i = 0; i < menuLen; i++) {
//   menuItem[i].classList.remove("active");
//   if (menuItem[i].href === currloc) {
//     menuItem[i].className = "nav-link active";
//   }
// }

// var splide = new Splide( '.splide', {
//     type   : 'loop',
//     perPage: 3,
//     perMove: 1,
//   } );

//   splide.mount();

// slider - logic
// let sliderContainer = document.getElementById("sliderContainer");
// let slider = document.getElementById("slider");
// let cards = slider.getElementsByTagName("li");

// let elememtsToShow = 3;
// if (document.body.clientWidth < 1000) {
//   elememtsToShow = 2;
// } else if (document.body.clientWidth < 1500) {
//   elememtsToShow = 3;
// }

// let sliderContainerWidth = sliderContainer.clientWidth;

// let cardWidth = sliderContainerWidth / elememtsToShow;

// sliderContainer.style.overflow = "hidden";

// slider.style.width = cards.length * cardWidth + "px";
// slider.style.transition = "margin";
// slider.style.transitionDuration = "1s";

// for (let index = 0; index < cards.length; index++) {
//   const element = cards[index];
//   element.style.width = cardWidth + "px";
// }

// function prev() {
//   if (
//     +slider.style.marginLeft.slice(0, -2) !=
//     cardWidth * (cards.length - elememtsToShow)
//   ) {
//     slider.style.marginLeft =
//       +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
//   } else {
//     slider.style.marginLeft =
//       +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
//   }
// }

// function next() {
//   if (+slider.style.marginLeft.slice(0, -2) != 0) {
//     slider.style.marginLeft =
//       +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
//   } else {
//     slider.style.marginLeft =
//       +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
//   }
// }

//number increment animation logic
// Number.prototype.format = function (n) {
//   let regex = new RegExp("\\d(?=(\\d{3})+" + (n > 0 ? "\\." : "$") + ")", "g");
//   return this.toFixed(Math.max(0, Math.floor(n))).replace(regex, "$&,");
// };

// document.querySelectorAll(".count").forEach((element) => {
//   let counter = 0;
//   let target = parseFloat(element.textContent);
//   let duration = 5000;
//   let startTime = null;

//   function animateCounter(timestamp) {
//     if (!startTime) startTime = timestamp;
//     let progress = Math.min((timestamp - startTime) / duration, 1);
//     counter = progress * target;
//     element.textContent = counter.format();

//     if (progress < 1) {
//       requestAnimationFrame(animateCounter);
//     }
//   }

//   requestAnimationFrame(animateCounter);
// });
