/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
/* harmony import */ var _macros_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/swiper */ "./src/js/macros/swiper.js");
/* harmony import */ var _macros_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macros/header */ "./src/js/macros/header.js");
/* harmony import */ var _macros_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macros/collapse */ "./src/js/macros/collapse.js");



 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_swiper__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _macros_header__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _macros_collapse__WEBPACK_IMPORTED_MODULE_3__["default"].init();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);

/***/ }),

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        /* action */
      }
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initEventListeners = function initEventListeners() {};

  var initLoad = function initLoad() {
    // pressESC();
    // clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ }),

/***/ "./src/js/macros/collapse.js":
/*!***********************************!*\
  !*** ./src/js/macros/collapse.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var collapseCB = function () {
  var init = function init() {
    var collapseHead = document.querySelectorAll('.faq__collapse-head ');
    collapseHead.forEach(function (val, id) {
      val.addEventListener('click', function (ev) {
        var el = ev.currentTarget,
            bodyEl = el.nextElementSibling;

        if (el.classList.contains('is-active')) {
          el.classList.remove('is-active');
          bodyEl.style.display = 'none';
        } else {
          el.classList.add('is-active');
          bodyEl.style.display = 'block';
        }
      });
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (collapseCB);

/***/ }),

/***/ "./src/js/macros/header.js":
/*!*********************************!*\
  !*** ./src/js/macros/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var HeaderCB = function () {
  var hamburgerToggle = function hamburgerToggle() {
    var btn = document.querySelector("[hamburger-js]"),
        btnClose = document.querySelectorAll('[menu-close-js]'),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]");
    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;
      elem.classList.add("is-active");
      mobileContainer.classList.add("is-open");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.add("is-hideScroll");
      });
    });
    btnClose.forEach(function (val, id) {
      val.addEventListener('click', function (ev) {
        console.log("close");
        btn.classList.remove("is-active");
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animate");
        hideScrollContainer.forEach(function (val, idx) {
          return val.classList.remove("is-hideScroll");
        });
        setTimeout(function () {
          mobileContainer.classList.remove("is-animate");
        }, 300);
      }, false);
    });
  };

  var headerNavCollapse = function headerNavCollapse() {
    var btnsItem = document.querySelectorAll('[header-item-js]');
    btnsItem.forEach(function (val, id) {
      val.addEventListener('click', function (ev) {
        var el = ev.currentTarget,
            elDropdown = el.nextElementSibling;

        if (el.classList.contains('is-active')) {
          el.classList.remove('is-active');
          elDropdown.classList.remove('is-open');
        } else {
          el.classList.add('is-active');
          elDropdown.classList.add('is-open');
        }
      }, false);
    });
  };

  var init = function init() {
    headerNavCollapse();
    hamburgerToggle();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HeaderCB);

/***/ }),

/***/ "./src/js/macros/swiper.js":
/*!*********************************!*\
  !*** ./src/js/macros/swiper.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SwiperCB = function () {
  var mainSlider = function mainSlider() {
    if (document.querySelector('.main__slider')) {
      new Swiper('.mainSlider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
          delay: 5000
        },
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1]
          },
          next: {
            translate: ["100%", 0, 0]
          }
        },
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        }
      });
    }
  };

  var init = function init() {
    mainSlider();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (SwiperCB);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map