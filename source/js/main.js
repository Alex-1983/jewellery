'use strict';

(function () {
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
