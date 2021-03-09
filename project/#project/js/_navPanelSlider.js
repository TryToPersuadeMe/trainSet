var swiper = new Swiper(".navigationSlider__container", {
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

var projectSlider = new Swiper(".projects__slider", {
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
});

const customPagination = () => {
  const $wrapper = document.querySelector(".navigationSlider__wrapper");
  const $bullet = $wrapper.querySelectorAll(".navigationSlider__link");
  const $slide = document.querySelectorAll(".cardSection__gridWrapper");

  $bullet.forEach((value, index) => {
    value.setAttribute("index", index);
    $slide[index].setAttribute("index", index);
  });

  $wrapper.addEventListener("click", () => {
    let currentBullet = event.target.getAttribute("index");
    projectSlider.slideTo(currentBullet);
    $bullet.forEach((value) => value.classList.remove("active"));
    event.target.classList.add("active");
  });
};

customPagination();
