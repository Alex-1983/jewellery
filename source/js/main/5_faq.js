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
