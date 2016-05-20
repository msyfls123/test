webpackJsonp([0],[
/* 0 */
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
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "h1 {\n  color: red;\n  background: url(" + __webpack_require__(5) + "); }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
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
/* 8 */
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
]);