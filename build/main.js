/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var FuckFacebookUtil = __webpack_require__(1),
	    FuckFacebookService = __webpack_require__(2),
	    FuckFacebookController = __webpack_require__(3);

	new FuckFacebookController(new FuckFacebookService(), new FuckFacebookController()).init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FuckFaceebookUtil = function FuckFaceebookUtil() {
	  _classCallCheck(this, FuckFaceebookUtil);
	};

	module.exports = FuckFaceebookUtil;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FuckFacebookService = function () {
	  function FuckFacebookService() {
	    _classCallCheck(this, FuckFacebookService);
	  }

	  _createClass(FuckFacebookService, [{
	    key: "bindPageUpdateEvent",
	    value: function bindPageUpdateEvent() {
	      var _this = this;

	      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	        if (_this.isPageUpdated(changeInfo, tab) && _this.isFacebookPage(tab)) {
	          chrome.tabs.remove(tab.id);
	        }
	      });
	    }
	  }, {
	    key: "isPageUpdated",
	    value: function isPageUpdated(changeInfo, tab) {
	      return changeInfo.status == 'loading' && tab.active;
	    }
	  }, {
	    key: "isFacebookPage",
	    value: function isFacebookPage(tab) {
	      return tab.url.indexOf("facebook.com") > -1;
	    }
	  }]);

	  return FuckFacebookService;
	}();

	module.exports = FuckFacebookService;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FuckFacebookController = function () {
	  function FuckFacebookController(service, util) {
	    _classCallCheck(this, FuckFacebookController);

	    this.service = service;
	    this.util = util;
	  }

	  _createClass(FuckFacebookController, [{
	    key: "init",
	    value: function init() {
	      this.watchPage();
	    }
	  }, {
	    key: "watchPage",
	    value: function watchPage() {
	      this.service.bindPageUpdateEvent();
	    }
	  }]);

	  return FuckFacebookController;
	}();

	module.exports = FuckFacebookController;

/***/ }
/******/ ]);