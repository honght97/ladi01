export default function SwiperModule() {
  if ($(".js-forte .swiper").length) {
    var swiperFooter = new Swiper(".js-forte .swiper", {
      slidesPerView: "auto",
      speed: 800,
      pagination: {
        el: ".js-forte .swiper-pagination",
        clickable: true,
      },
    });
  }
  if ($(".js-tl .swiper").length) {
    var swiperFooter = new Swiper(".js-tl .swiper", {
      slidesPerView: "auto",
      speed: 800,
      pagination: {
        el: ".js-tl .swiper-pagination",
        clickable: true,
      },
    });
  }
  if ($(".exten-thumb .swiper").length && $(".exten-gallery .swiper").length) {
    var swiper = new Swiper(".exten-thumb .swiper", {
      loop: true,
      slidesPerView: 2,
      freeMode: true,
      speed: 800,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
    var swiper2 = new Swiper(".exten-gallery .swiper", {
      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".exten-r .next",
        prevEl: ".exten-r .prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
  if ($(".products-wrap .swiper").length) {
    var swiperFooter = new Swiper(".products-wrap .swiper", {
      slidesPerView: "auto",
      speed: 800,
      pagination: {
        el: ".products-wrap .swiper-pagination",
        clickable: true,
      },
    });
  }
  if ($(".progress-wrap .swiper").length) {
    var swiperFooter = new Swiper(".progress-wrap .swiper", {
      slidesPerView: "auto",
      speed: 800,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".progress-wrap .swiper-pagination",
        clickable: true,
      },
    });
  }
}
