new Swiper('.js-our-friends', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,   
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
 var nav = document.querySelector('.js-header-nav');
 var body = document.querySelector('body');

 btn.onclick = function() {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('overflow');
 };
};

toggleMobileMenu();

function togglePetsInfo() {
  var btnPets = document.querySelectorAll('.js-btn-pets');
  var btnClose = document.querySelectorAll('.js-popup-close');

  btnClose.forEach(el => {
    el.onclick = function(event) {
      event.preventDefault();

      var item = document.querySelectorAll('.js-popup');

      item.forEach(i => {
        i.classList.remove('active');
      })    
      
    };
  });


  btnPets.forEach(el => {
    el.onclick = function(event) {
      event.preventDefault();
      
      var id = this.dataset.id;

      document.querySelector(`#pets-${id}`).classList.add('active');
    };
  });
};

togglePetsInfo();

