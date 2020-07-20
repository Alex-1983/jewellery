'use strict';

(function () {

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

    var onEscDown = window.utils.createEscHandler(onClickPopupCloseBtn);

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
