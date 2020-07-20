'use strict';

(function () {

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

    var onEscDown = window.utils.createEscHandler(onClickPopupCloseBtn);

    popupOpenBtn.addEventListener('click', onClickPopupOpenBtn);
    popupCloseBtn.addEventListener('click', onClickPopupCloseBtn);
  }

})();
