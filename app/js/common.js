$(function () {

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.range__content').click(function (event) {
    $('.range__content').toggleClass('active');
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

  $(function () {
    $("#slider-range-price").slider({
      range: true,
      min: 0,
      max: 65,
      values: [2, 33],
      slide: function (event, ui) {
        $("#amount").val(ui.values[0] + "                                                             " + ui.values[1]);
      }
    });
    $("#amount").val($("#slider-range-price").slider("values", 0) +
      "                                                             " + $("#slider-range-price").slider("values", 1));
  });

  $(function () {
    $("#slider-range-plosha").slider({
      range: true,
      min: 0,
      max: 256,
      values: [15, 189],
      slide: function (event, ui) {
        $("#plosha").val(ui.values[0] + "                                                         " + ui.values[1]);
      }
    });
    $("#plosha").val($("#slider-range-plosha").slider("values", 0) +
      "                                                         " + $("#slider-range-plosha").slider("values", 1));
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


  let preloaderConteiner = document.querySelector('.preloader-conteiner');
  let app = document.querySelector('.app')
  setTimeout(() => {
    preloaderConteiner.classList.add('hidePreloader')
    app.style.display = "block"

  }, 200)


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

  let test = document.querySelectorAll('.range__room-item');
  test.forEach(element => {
    element.addEventListener('click', event => {
      let currentelement = document.querySelector('.range__room-item.active');
      if (currentelement && currentelement !== element) {
        currentelement.classList.remove('active');
      }
      element.classList.toggle('active');


    })
  })

});

window.addEventListener('load', function () {

  function popupAir() {
    const footerElement = document.querySelector('footer');
    if (!footerElement) {
      alert('dont find teg footer')
    }
    else {
      let airElements = document.querySelectorAll('.popup-air');
      if (airElements.length > 0) {
        let airBtnOpen = document.querySelectorAll('.air-open-btn');
        createAirPopups()

        for (let i = 0; i < airBtnOpen.length; i++) {
          airBtnOpen[i].onclick = openAirPopup
        }
      }
      else {
        return
      }

      function createAirPopups() {
        let airConteiner = document.createElement("div");
        airConteiner.classList.add('air-conteiner');

        for (let i = 0; i < airElements.length; i++) {
          let airCloseIcon = document.createElement("div");
          airCloseIcon.classList.add('air-close');
          airElements[i].appendChild(airCloseIcon)
          airConteiner.appendChild(airElements[i])

        }
        footerElement.after(airConteiner)
      }

      function openAirPopup() {
        let currentAirPopupBtn = this.getAttribute('data-popup-current');
        let allPopups = document.querySelectorAll('.popup-air');
        let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`)
        let closeAirIcon = currentAirPopup.querySelector('.air-close');
        closeAllAirPopups(allPopups);
        openAirConteiner();
        currentAirPopup.classList.add('air-popup_active');

        closeAirIcon.addEventListener('click', function () {
          currentAirPopup.classList.remove('air-popup_active');
          closeAirConteiner()
        })
      }


      function openAirPopupForForm(curretnDonePopup) {
        let allPopups = document.querySelectorAll('.popup-air');
        let currentAirPopup = document.querySelector(`.popup-air[data-air="${curretnDonePopup}"]`)
        let closeAirIcon = currentAirPopup.querySelector('.air-close');
        closeAllAirPopups(allPopups);
        openAirConteiner();
        currentAirPopup.classList.add('air-popup_active');

        closeAirIcon.addEventListener('click', function () {
          currentAirPopup.classList.remove('air-popup_active');
          closeAirConteiner()
        })

      }



      function openAirConteiner() {
        let airConteier = document.querySelector('.air-conteiner');
        airConteier.classList.add('air-conteiner_active');
      }

      function closeAllAirPopups(allPopups) {
        for (let i = 0; i < allPopups.length; i++) {
          allPopups[i].classList.remove('air-popup_active');
        }
      }
      function closeAirConteiner() {
        let airConteier = document.querySelector('.air-conteiner');
        airConteier.classList.remove('air-conteiner_active');
      }

      function sendFormDone() {
        let allPopups = document.querySelectorAll('.popup-air');
        let curretnDonePopup = 'send__form';
        closeAllAirPopups(allPopups)
        openAirPopupForForm(curretnDonePopup);
        setTimeout(function () {
          closeAllAirPopups(allPopups)
          setTimeout(closeAirConteiner, 1000);

        }, 3000);
      }

      function sendFormDone2() {
        let allPopups = document.querySelectorAll('.popup-air');
        let curretnDonePopup = 'send__form-revi';
        closeAllAirPopups(allPopups)
        openAirPopupForForm(curretnDonePopup);
        setTimeout(function () {
          closeAllAirPopups(allPopups)
          setTimeout(closeAirConteiner, 1000);

        }, 3000);
      }



      //Успешная отправка формы
      document.addEventListener('wpcf7mailsent', function (event) {
        if ('6' == event.detail.contactFormId) {
          sendFormDone();

        }
        if ('336' == event.detail.contactFormId) {
          sendFormDone();

        }
        if ('338' == event.detail.contactFormId) {
          sendFormDone2();

        }
      }, false);
    }
  }
  popupAir()


  function videoLoad() {
    let videoBtn = document.querySelectorAll('.video-btn');
    for (let i = 0; i < videoBtn.length; i++) {
      videoBtn[i].addEventListener('click', function () {
        let videoUrl = this.getAttribute('data-video-src');
        let closeVideoBtn = document.querySelector('.video-popup').closest('.popup-air').querySelector('.air-close');
        document.querySelector('.video-popup iframe').setAttribute('src', videoUrl)
        closeVideoBtn.addEventListener('click', function () {
          setTimeout(function () {
            document.querySelector('.video-popup iframe').setAttribute('src', '')
          }, 800)
        });
      })
    }
  }
  videoLoad()

}, false);