'use strict';

(function () {

  var faq = document.querySelector('.faq');

  if (faq) {
    var faqToggles = faq.querySelectorAll('.faq__toggle');
    var faqContent = faq.querySelectorAll('.faq__item p');

    var onTFaqTogglesClick = function (evt) {
      var faqContainer = evt.target.closest('.faq__title').parentElement;
      if (faqContainer.classList.contains('faq__item--open')) {
        faqContainer.classList.remove('faq__item--open');
      } else {
        for (var i = 0; i < faqContent.length; i++) {
          faqContent[i].classList.remove('faq__item--open');
        }
        faqContainer.classList.add('faq__item--open');
      }
    };

    for (var i = 0; i < faqToggles.length; i++) {
      faqToggles[i].addEventListener('click', onTFaqTogglesClick);
    }
  }

})();

'use strict';

(function () {

  var filter = document.querySelector('.filter');
  var openFilterBtn = document.querySelector('.catalog__btn');

  if (filter) {

    var filterToggles = filter.querySelectorAll('.filter__toggle');
    var filterContent = filter.querySelectorAll('.filter__content');
    var closeFilterBtn = filter.querySelector('.filter__close');

    var onFilterTogglesClick = function (evt) {
      var filterContainer = evt.target.closest('.filter__title').parentElement;
      if (filterContainer.classList.contains('filter__item--open')) {
        filterContainer.classList.remove('filter__item--open');
      } else {
        for (var i = 0; i < filterContent.length; i++) {
          filterContent[i].classList.remove('filter__item--open');
        }
        filterContainer.classList.add('filter__item--open');
      }
    };

    var openFilter = function () {
      filter.classList.add('filter--open');
      openFilterBtn.classList.add('catalog__btn-close');
      document.addEventListener('keydown', onEscDown);
    };

    var closeFilter = function () {
      filter.classList.remove('filter--open');
      openFilterBtn.classList.remove('catalog__btn-close');
      document.removeEventListener('keydown', onEscDown);
    };

    var onOpenFilterBtnClick = function () {
      openFilter();
    };

    var onCloseFilterBtnClick = function () {
      closeFilter();
    };

    var onEscDown = window.utils.createEscHandler(onCloseFilterBtnClick);

    openFilterBtn.addEventListener('click', onOpenFilterBtnClick);
    closeFilterBtn.addEventListener('click', onCloseFilterBtnClick);

    for (var i = 0; i < filterToggles.length; i++) {
      filterToggles[i].addEventListener('click', onFilterTogglesClick);
    }
  }

})();

'use strict';

(function () {

  var header = document.querySelector('.header');
  var body = document.querySelector('body');

  if (header) {
    var burger = header.querySelector('.burger');

    var headerToggle = function () {
      header.classList.toggle('header--open');
      body.classList.toggle('no-scroll');
    };

    var onClickBurger = function () {
      headerToggle();
    };

    burger.addEventListener('click', onClickBurger);
  }

})();

'use strict';

(function () {

  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

})();

'use strict';

(function () {

  objectFitImages();

})();

'use strict';

(function () {

  var ESC_KEYCODE = 27;

  var createEscHandler = function (fn) {
    return function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        fn();
      }
    };
  };

  var popup = document.querySelector('.popup-card');
  var popupOpenBtn = document.querySelector('.gallery__link');
  var overlay = document.querySelector('.overlay-card');
  var body = document.querySelector('body');

  if (popup) {

    var popupCloseBtn = popup.querySelector('.popup-card__close');

    var closePopup = function () {
      popup.classList.remove('popup-card--open');
      overlay.classList.remove('overlay-show');
      body.classList.remove('no-scroll');
      overlay.removeEventListener('click', closePopup);
    };

    var openPopup = function () {
      popup.classList.add('popup-card--open');
      overlay.classList.add('overlay-show');
      body.classList.add('no-scroll');
      overlay.addEventListener('click', closePopup);
    };

    var onClickPopupCloseBtn = function () {
      closePopup();
      document.removeEventListener('keydown', onEscDown);
    };

    var onClickPopupOpenBtn = function (evt) {
      evt.preventDefault();
      openPopup();
      document.addEventListener('keydown', onEscDown);
    };

    var onEscDown = createEscHandler(onClickPopupCloseBtn);

    popupOpenBtn.addEventListener('click', onClickPopupOpenBtn);
    popupCloseBtn.addEventListener('click', onClickPopupCloseBtn);
  }

})();

'use strict';

(function () {

  var ESC_KEYCODE = 27;

  var createEscHandler = function (fn) {
    return function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        fn();
      }
    };
  };

  var popup = document.querySelector('.popup-login');
  var popupOpenBtn = document.querySelector('.block-buyer__link');
  var popupOpenBtnMd = document.querySelector('.header__nav-link');
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('body');

  if (popup) {

    var popupCloseBtn = popup.querySelector('.popup-login__close');
    var form = popup.querySelector('.popup-login__form');
    var email = popup.querySelector('[name=email]');
    var password = popup.querySelector('[name=reg-pass]');
    var isStorageSupport = true;
    var storageEmail = '';

    try {
      storageEmail = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }

    var getItemFocus = function () {
      if (storageEmail) {
        email.value = storageEmail;
        password.focus();
      } else {
        email.focus();
      }
    };

    var getStorageSupport = function () {
      if (isStorageSupport) {
        localStorage.setItem('email', email.value);
      }
    };

    var closePopup = function () {
      popup.classList.remove('popup-login--open');
      overlay.classList.remove('overlay-show');
      body.classList.remove('no-scroll');
      overlay.removeEventListener('click', closePopup);
    };

    var openPopup = function () {
      popup.classList.add('popup-login--open');
      overlay.classList.add('overlay-show');
      body.classList.add('no-scroll');
      overlay.addEventListener('click', closePopup);
    };

    var openPopupMd = function () {
      popup.classList.add('popup-login--open');
      overlay.classList.add('overlay-show');
      body.classList.add('no-scroll');
      overlay.addEventListener('click', closePopup);
    };

    var onClickPopupCloseBtn = function () {
      closePopup();
      document.removeEventListener('keydown', onEscDown);
    };

    var onClickPopupOpenBtn = function (evt) {
      evt.preventDefault();
      openPopup();
      getItemFocus();
      document.addEventListener('keydown', onEscDown);
    };

    var onClickPopupOpenBtnMd = function (evt) {
      evt.preventDefault();
      openPopupMd();
      getItemFocus();
      document.addEventListener('keydown', onEscDown);
    };

    var onEscDown = createEscHandler(onClickPopupCloseBtn);

    popupOpenBtn.addEventListener('click', onClickPopupOpenBtn);
    popupOpenBtnMd.addEventListener('click', onClickPopupOpenBtnMd);
    popupCloseBtn.addEventListener('click', onClickPopupCloseBtn);

    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        getStorageSupport();
      }
    });
  }

})();

'use strict';

(function () {

  window.mainSwipper = new window.Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    breakpoints: {
      1023: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          }
        }
      },
    },

    navigation: {
      nextEl: '.arrow--next',
      prevEl: '.arrow--prev'
    },

  });

})();
