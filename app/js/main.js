var swiper = new Swiper('.js-our-friends', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,   
    navigation: {
      nextEl: '.js-our-friend-next',
      prevEl: '.js-our-friend-prev',
    },
});