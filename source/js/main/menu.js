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
