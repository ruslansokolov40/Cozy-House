var swiper = new Swiper('.js-our-friends', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,   
    navigation: {
      nextEl: '.js-our-friend-next',
      prevEl: '.js-our-friend-prev',
    },
    breakpoints: {     
      786: {
        slidesPerView: 3,
      },

      479: {
        slidesPerView: 2,
      }
    }
});


