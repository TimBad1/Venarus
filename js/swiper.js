const swiperHero = new Swiper('.swiper.hero', {
  loop: true,

  pagination: {
    el: '.swiper-pagination.hero',
  },
  navigation: {
    nextEl: '.swiper-button-next.hero',
    prevEl: '.swiper-button-prev.hero',
  },
});

const swiperProduction = new Swiper('.swiper.production', {
  navigation: {
    nextEl: '.swiper-button-next.production',
    prevEl: '.swiper-button-prev.production',
  },
  // mousewheel: true,
  // loop: true,
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  //   pageUpDown: true,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,      
      pagination: {
        el: ".swiper-pagination.production",
        clickable: true
      },
    },
    601: {
      slidesPerView: 1.5,
    }
  }
});


const swiperExpert = new Swiper('.swiper.expert', {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination.expert",
    clickable: true
  },
});

// const swiperBuy = new Swiper('.swiper.buy', {
//   spaceBetween: 30,
//   effect: "fade",
//   autoplay: {
//     delay: 4000,
//   },
// });