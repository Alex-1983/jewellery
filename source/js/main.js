'use strict';

(function () {

  var ESC_KEYCODE = 27;

  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

  var createEscHandler = function (fn) {
    return function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        fn();
      }
    };
  };

  window.utils = {
    createEscHandler: createEscHandler
  };

  (function () {

    // menu

    var body = document.querySelector('body');
    var header = document.querySelector('.header');
    var burger = document.querySelector('.burger');

    if (burger) {
      burger.addEventListener('click', function () {
        header.classList.toggle('header--open');
        body.classList.toggle('no-scroll');
      });
    }

  })();

  (function () {

    // slider

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

        320: {
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

  (function () {

    // faq

    var faqToggles = document.querySelectorAll('.faq__toggle');
    var faqContent = document.querySelectorAll('.faq__item p');

    if (faqToggles) {
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

  (function () {

    // filter

    var filterToggles = document.querySelectorAll('.filter__toggle');
    var filterContent = document.querySelectorAll('.filter__content');

    if (filterToggles) {
      var onFilterTogglesClick = function (evt) {
        var filterContainer = evt.target.closest('.filter__title').parentElement;
        if (filterContainer.classList.contains('filter--open')) {
          filterContainer.classList.remove('filter--open');
        } else {
          for (var i = 0; i < filterContent.length; i++) {
            filterContent[i].classList.remove('filter--open');
          }
          filterContainer.classList.add('filter--open');
        }
      };

      for (var i = 0; i < filterToggles.length; i++) {
        filterToggles[i].addEventListener('click', onFilterTogglesClick);
      }
    }

  })();

  (function () {

    // Open filter

    var filter = document.querySelector('.filter');
    var openFilterBtn = document.querySelector('.catalog__btn');
    var closeFilterBtn = document.querySelector('.filter__close');

    if (openFilterBtn && closeFilterBtn) {

      var openFilter = function () {
        filter.classList.add('filter-show');
        openFilterBtn.classList.add('catalog__btn-close');
        document.addEventListener('keydown', onEscDown);
      };

      var closeFilter = function () {
        filter.classList.remove('filter-show');
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
    }

  })();

  (function () {

    // Popup Card

    var modal = document.querySelector('.modal');
    var modalOpenBtn = document.querySelector('.gallery__link');
    var modalCloseBtn = document.querySelector('.popup-card__close');
    var overlay = document.querySelector('.modal-overlay');
    var body = document.querySelector('body');

    if (modalOpenBtn && modalCloseBtn) {

      var closeModal = function () {
        modal.classList.remove('modal--open');
        overlay.classList.remove('modal-overlay-show');
        body.classList.remove('no-scroll');
        overlay.removeEventListener('click', closeModal);

      };

      var openModal = function () {
        modal.classList.add('modal--open');
        overlay.classList.add('modal-overlay-show');
        body.classList.add('no-scroll');
        overlay.addEventListener('click', closeModal);
      };

      var onClickModalCloseBtn = function () {
        closeModal();
        document.removeEventListener('keydown', onEscDown);
      };

      var onClickModalOpenBtn = function (evt) {
        evt.preventDefault();
        openModal();
        document.addEventListener('keydown', onEscDown);
      };

      var onEscDown = window.utils.createEscHandler(onClickModalCloseBtn);

      modalOpenBtn.addEventListener('click', onClickModalOpenBtn);
      modalCloseBtn.addEventListener('click', onClickModalCloseBtn);
    }

  })();

  /*eslint-disable*/
  objectFitImages();

})();
