
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  speed: 600,
  allowTouchMove: false,
  autoHeight: true,
  spaceBetween: 100,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
    hide: false,
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + ("Level " + index) + "</span>";
  //   },
  //   clickable: true,
  // },
});


var navigationSlider = new Swiper(".navigationSlider__container", {
  spaceBetween: 30,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    575: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 4,
    },
  },
});
;
