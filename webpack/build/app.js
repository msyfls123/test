webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(2);

	var _sub = __webpack_require__(7);

	var _sub2 = _interopRequireDefault(_sub);

	__webpack_require__(8);

	var _moment = __webpack_require__(9);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import $ from 'jquery';


	var app = document.createElement('div');
	var myPromise = Promise.resolve(42);
	myPromise.then(function (number) {
	  $('body').append('<p>promise result is ' + number + ' now is ' + (0, _moment2.default)().format() + '</p>');
	  $('p').greenify();
	});
	app.innerHTML = '<h1>Hello World it</h1>';
	document.body.appendChild(app);
	app.appendChild((0, _sub2.default)());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 7:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var element = document.createElement('h2');
	  element.innerHTML = "Hello h2 world hahaha";
	  return element;
	};

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

	(function ($) {
	    var shade = "#556b2f";
	    $.fn.greenify = function () {
	        console.log("Imgreen");
	        this.css("color", shade);
	        return this;
	    };
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});