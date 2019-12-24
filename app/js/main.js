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

function toggleMobileMenu() {
 var btn = document.querySelector('.js-btn-menu');
 var nav = document.querySelector('.js-btn-nav');
 var body = document.querySelector('body');
 console.log(btn);

 btn.onclick = function() {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('overflow');
 };
};

toggleMobileMenu();

function togglePetInfo() {
  var btnPets = document.querySelectorAll('.js-btn-pets')

  btnPets.forEach(el => {
    el.onclick = function() {
      this.datasetid      
    }
  })
};

