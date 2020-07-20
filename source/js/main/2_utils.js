'use strict';

(function () {

  var ESC_KEYCODE = 27;

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

})();
