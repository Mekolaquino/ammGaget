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

let countDate = new Date('dec 12, 2022 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
	gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

  let d = Math.floor(gap / (days));
	let h = Math.floor((gap % (days)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('#days').innerText = d;
    document.getElementById('#hours').innerText = h;
    document.getElementById('#minutes').innerText = m;
    document.getElementById('#seconds').innerText = s;

}

$(document).ready(function(){



  $('.category .btn').click(function(){

      let filter = $(this).attr('data-filter');
      if(filter == 'all'){
          $('.category .boX').show(400);
      }else{
          $('.category .boX').not('.'+filter).hide(200);
          $('.category .boX').filter('.'+filter).show(400);
      }

      $(this).addClass('button-active').siblings().removeClass('button-active');

  });

});