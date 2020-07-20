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
