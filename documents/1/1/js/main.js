/* slow scroll */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

var navPanel = new Swiper(".navigationSlider__container", {
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
      slidesPerView: 2,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
    },
  },
});

var sidebar = new Swiper(".sideBar__sliderContainer", {
  slidesPerView: 1.4,

  spaceBetween: 30,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // breakpoints: {
  //   // when window width is >= 320px
  //   375: {
  // slidesPerView: 1,
  //   },
  //   // when window width is >= 480px
  //   575: {
  //     slidesPerView: 2,
  //   },
  //   // when window width is >= 640px
  //   769: {
  //     slidesPerView: 3,
  //   },
  // },
});

const resizeSlider = () => {
  if (window.innerWidth >= 768) {
    sidebar.destroy(false, true);
    console.log("slider destroy");
  } else {
    sidebar.init();
    console.log("slider init");
  }
};

window.addEventListener("resize", () => {
  resizeSlider();
});

resizeSlider();
;
