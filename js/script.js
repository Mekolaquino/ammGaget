searchForm = document.querySelector('.searchForm');

document.querySelector('#searchBtn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.loginForm');

document.querySelector('#loginBtn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#closeBtn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .nav2').classList.add('active');
  }else{
    document.querySelector('.header .nav2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .nav2').classList.add('active');
  }else{
    document.querySelector('.header .nav2').classList.remove('active');
  }

  fadeOut();

}




var swiper = new Swiper(".partner-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".reviewsSlider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

$(document).ready(function(){
  $('.home-slider').owlCarousel({
    items:1,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:8000,
    loop:true
});
$('.gallery .btn').click(function(){

  let filter = $(this).attr('data-filter');
  if(filter == 'all'){
      $('.gallery .box').show(400);
  }
  else {
      $('.gallery .box').not('.'+filter).hide(100);
      $('.gallery .box').filter('.'+filter).show(400);
  }

  $(this).addClass('button-active').siblings().removeClass('button-active');

});
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover:false,
      responsive: [{
          breakpoint: 768,
          setting: {
              slidesToShow:4
          }
      }, {
          breakpoint: 520,
          setting: {
              slidesToShow: 3
          }
      }]
  });
});



const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 $ {currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000)% 60;

 
  // days.innerHTML = d;
  // hours.innerHTML = h < 10 ? '0' + h : h;
  // minutes.innerHTML = m < 10 ? '0' + m : m;
  // seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);