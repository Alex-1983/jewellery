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
