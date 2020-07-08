'use strict';

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

  // slider

  var slider = document.querySelector('.slider');
  var sliderBtnPrevious = slider.querySelector('.arrow--prev');
  var sliderBtnNext = slider.querySelector('.arrow--next');
  var sliderPagination = slider.querySelector('.swiper-pagination');

  window.mySwipper = new window.Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: sliderPagination,
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
      nextEl: sliderBtnNext,
      prevEl: sliderBtnPrevious
    },


  });

})();
