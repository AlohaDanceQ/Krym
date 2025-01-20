$(function () {

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(document).scroll(function (e) {
    $(window).scrollTop() > 50 ? $('.header').addClass('header-bg') : $('.header').removeClass('header-bg');
  });

  $('.desc__btn').click(function (event) {
    $('.desc__btn,.desc-redactor').toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.desc__btn p').text("Скрыть описание")
    }
    else {
      $('.desc__btn p').text("Читать подробнее")
    }
  });

  new Swiper('.complecs__slider', {
    slidesPerView: 1,
    autoHeight: false,
    loop: true,
    pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
    },
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: false,
        pagination: {                       //pagination(dots)
          el: '.swiper-pagination',
        },
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: false,
        pagination: {                       //pagination(dots)
          el: '.swiper-pagination',
        },
      },
    }
  });

  new Swiper('.novo__slider', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: false,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        }
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: false,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        }
      },
    }
  });

  new Swiper('.gallery__slider', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev'
    },
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
        loop: true,
        centeredSlides: true,
      },
    }
  });

  if (window.innerWidth <= 1130) {
    new Swiper('.plan__slider', {
      slidesPerView: 1,
      autoHeight: true,
      loop: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      breakpoints: {
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoHeight: false,
          loop: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
          },
        },
        1130: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoHeight: false,
          loop: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
          },
        },
      }
    });
  }

});


window.addEventListener('load', function () {

  let vipad = document.querySelectorAll('.faq__item-plug');
  vipad.forEach(element => {
    element.addEventListener('click', event => {
      let currentelement = document.querySelector('.faq__item-plug.down');
      if (currentelement && currentelement !== element) {
        currentelement.classList.remove('down');
        currentelement.nextElementSibling.style.maxHeight = 0;
        currentelement.parentElement.style.background = '#292a2e';
      }
      element.classList.toggle('down');
      let answer = element.nextElementSibling;
      if (element.classList.contains('down')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        element.parentElement.style.background = '#fff';
      }
      else {
        answer.style.maxHeight = 0;
        answer.style.opacity = '0';
        element.parentElement.style.background = '#292a2e';
      }
    })
  })

});