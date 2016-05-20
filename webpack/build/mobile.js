webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(112);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(document).ready(function () {
	  var app = document.createElement('div');
	  app.innerHTML = '<h1>Hello World</h1>';
	  document.body.appendChild(app);
	  (0, _jquery2.default)('h1').greenify();
	});

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);

	"use strict";

	(function ($) {
	    var shade = "#556b2f";
	    $.fn.greenify = function () {
	        console.log("Imgreen");
	        this.css("color", shade);
	        return this;
	    };
	})(jQuery);


/***/ }

});