'use strict';

(function () {

  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

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

  // faq

  var faq = document.querySelector('.faq');
  var faqToggles = faq.querySelectorAll('.faq__toggle');
  var faqContent = faq.querySelectorAll('.faq__item p');

  var onToggleClicked = function (evt) {
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
    faqToggles[i].addEventListener('click', onToggleClicked);
  }

  /*eslint-disable*/
  objectFitImages();

})();
