(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Swup"] = factory();
	else
		root["Swup"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;

var _classify = __webpack_require__(8);

var _classify2 = _interopRequireDefault(_classify);

var _createHistoryRecord = __webpack_require__(9);

var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);

var _getDataFromHtml = __webpack_require__(10);

var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);

var _fetch = __webpack_require__(11);

var _fetch2 = _interopRequireDefault(_fetch);

var _transitionEnd = __webpack_require__(12);

var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

var _getCurrentUrl = __webpack_require__(13);

var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);

var _markSwupElements = __webpack_require__(14);

var _markSwupElements2 = _interopRequireDefault(_markSwupElements);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classify = exports.classify = _classify2.default;
var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2.default;
var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2.default;
var fetch = exports.fetch = _fetch2.default;
var transitionEnd = exports.transitionEnd = _transitionEnd2.default;
var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2.default;
var markSwupElements = exports.markSwupElements = _markSwupElements2.default;
var Link = exports.Link = _Link2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var query = exports.query = function query(selector) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	if (typeof selector !== 'string') {
		return selector;
	}

	return context.querySelector(selector);
};

var queryAll = exports.queryAll = function queryAll(selector) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	if (typeof selector !== 'string') {
		return selector;
	}

	return Array.prototype.slice.call(context.querySelectorAll(selector));
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose Swup as window.Swup

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// modules


var _delegate = __webpack_require__(4);

var _delegate2 = _interopRequireDefault(_delegate);

var _Cache = __webpack_require__(6);

var _Cache2 = _interopRequireDefault(_Cache);

var _loadPage = __webpack_require__(7);

var _loadPage2 = _interopRequireDefault(_loadPage);

var _renderPage = __webpack_require__(16);

var _renderPage2 = _interopRequireDefault(_renderPage);

var _triggerEvent = __webpack_require__(17);

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _on = __webpack_require__(18);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(19);

var _off2 = _interopRequireDefault(_off);

var _updateTransition = __webpack_require__(20);

var _updateTransition2 = _interopRequireDefault(_updateTransition);

var _getAnimationPromises = __webpack_require__(21);

var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);

var _getPageData = __webpack_require__(22);

var _getPageData2 = _interopRequireDefault(_getPageData);

var _plugins = __webpack_require__(23);

var _utils = __webpack_require__(1);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swup = function () {
	function Swup(setOptions) {
		_classCallCheck(this, Swup);

		// default options
		var defaults = {
			animateHistoryBrowsing: false,
			animationSelector: '[class*="transition-"]',
			linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
			cache: true,
			containers: ['#swup'],
			requestHeaders: {
				'X-Requested-With': 'swup',
				Accept: 'text/html, application/xhtml+xml'
			},
			plugins: [],
			skipPopStateHandling: function skipPopStateHandling(event) {
				return !(event.state && event.state.source === 'swup');
			}
		};

		// merge options
		var options = _extends({}, defaults, setOptions);

		// handler arrays
		this._handlers = {
			animationInDone: [],
			animationInStart: [],
			animationOutDone: [],
			animationOutStart: [],
			animationSkipped: [],
			clickLink: [],
			contentReplaced: [],
			disabled: [],
			enabled: [],
			openPageInNewTab: [],
			pageLoaded: [],
			pageRetrievedFromCache: [],
			pageView: [],
			popState: [],
			samePage: [],
			samePageWithHash: [],
			serverError: [],
			transitionStart: [],
			transitionEnd: [],
			willReplaceContent: [],
			// modif max custom events
			cancelLoading: [],
			contentReplacedPrepare: [],
			contentReplacedCleanUp: []
		};

		// variable for id of element to scroll to after render
		this.scrollToElement = null;
		// variable for promise used for preload, so no new loading of the same page starts while page is loading
		this.preloadPromise = null;
		// variable for save options
		this.options = options;
		// variable for plugins array
		this.plugins = [];
		// variable for current transition object
		this.transition = {};
		// variable for keeping event listeners from "delegate"
		this.delegatedListeners = {};
		// added max to temporary override click handler (used in renderPage)
		this.linkClickHandlerOverride = null;

		// make modules accessible in instance
		this.cache = new _Cache2.default();
		this.cache.swup = this;
		this.loadPage = _loadPage2.default;
		this.renderPage = _renderPage2.default;
		this.triggerEvent = _triggerEvent2.default;
		this.on = _on2.default;
		this.off = _off2.default;
		this.updateTransition = _updateTransition2.default;
		this.getAnimationPromises = _getAnimationPromises2.default;
		this.getPageData = _getPageData2.default;
		this.log = function () {}; // here so it can be used by plugins
		this.use = _plugins.use;
		this.unuse = _plugins.unuse;
		this.findPlugin = _plugins.findPlugin;

		// enable swup
		this.enable();
	}

	_createClass(Swup, [{
		key: 'enable',
		value: function enable() {
			var _this = this;

			// check for Promise support
			if (typeof Promise === 'undefined') {
				console.warn('Promise is not supported');
				return;
			}

			// add event listeners
			this.delegatedListeners.click = (0, _delegate2.default)(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
			window.addEventListener('popstate', this.popStateHandler.bind(this));

			// initial save to cache
			var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
			page.url = page.responseURL = (0, _helpers.getCurrentUrl)();
			if (this.options.cache) {
				this.cache.cacheUrl(page);
			}

			// mark swup blocks in html
			(0, _helpers.markSwupElements)(document.documentElement, this.options.containers);

			// mount plugins
			this.options.plugins.forEach(function (plugin) {
				_this.use(plugin);
			});

			// modify initial history record
			window.history.replaceState(Object.assign({}, window.history.state, {
				url: window.location.href,
				random: Math.random(),
				source: 'swup'
			}), document.title, window.location.href);

			// trigger enabled event
			this.triggerEvent('enabled');

			// add swup-enabled class to html tag
			document.documentElement.classList.add('swup-enabled');

			// trigger page view event
			this.triggerEvent('pageView');
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			var _this2 = this;

			// remove delegated listeners
			this.delegatedListeners.click.destroy();
			this.delegatedListeners.mouseover.destroy();

			// remove popstate listener
			window.removeEventListener('popstate', this.popStateHandler.bind(this));

			// empty cache
			this.cache.empty();

			// unmount plugins
			this.options.plugins.forEach(function (plugin) {
				_this2.unuse(plugin);
			});

			// remove swup data atributes from blocks
			(0, _utils.queryAll)('[data-swup]').forEach(function (element) {
				element.removeAttribute('data-swup');
			});

			// remove handlers
			this.off();

			// trigger disable event
			this.triggerEvent('disabled');

			// remove swup-enabled class from html tag
			document.documentElement.classList.remove('swup-enabled');
		}
	}, {
		key: 'linkClickHandler',
		value: function linkClickHandler(event) {
			// no control key pressed
			if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
				// index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
				if (event.button === 0) {
					if (null !== this.linkClickHandlerOverride) {
						this.linkClickHandlerOverride(event);
						return;
					}
					this.triggerEvent('clickLink', event);
					event.preventDefault();
					var link = new _helpers.Link(event.delegateTarget);

					// modif max on permet le click sur même page si le lien n'a pas de hash
					var isSameUrl = link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '';
					if (isSameUrl && link.getHash() != '') {
						// link to the same URL
						// if (link.getHash() != '') {
						// link to the same URL with hash
						this.triggerEvent('samePageWithHash', event);
						var element = document.querySelector(link.getHash());
						if (element != null) {
							history.replaceState({
								url: link.getAddress() + link.getHash(),
								random: Math.random(),
								source: 'swup'
							}, document.title, link.getAddress() + link.getHash());
						} else {
							// referenced element not found
							console.warn('Element for offset not found (' + link.getHash() + ')');
						}
						// } else {
						// 	// link to the same URL without hash
						// 	this.triggerEvent('samePage', event);
						// }
					} else {
						// link to different url
						if (link.getHash() != '') {
							this.scrollToElement = link.getHash();
						}

						// get custom transition from data
						var customTransition = event.delegateTarget.getAttribute('data-swup-transition');

						// load page
						this.loadPage({ url: link.getAddress(), customTransition: customTransition }, false);
					}
				}
			} else {
				// open in new tab (do nothing)
				this.triggerEvent('openPageInNewTab', event);
			}
		}
	}, {
		key: 'popStateHandler',
		value: function popStateHandler(event) {
			if (this.options.skipPopStateHandling(event)) return;
			var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
			if (link.getHash() !== '') {
				this.scrollToElement = link.getHash();
			} else {
				event.preventDefault();
			}
			this.triggerEvent('popState', event);
			this.loadPage({ url: link.getAddress() }, event);
		}
	}]);

	return Swup;
}();

exports.default = Swup;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(5);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = exports.Cache = function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.pages = {};
		this.last = null;
	}

	_createClass(Cache, [{
		key: 'cacheUrl',
		value: function cacheUrl(page) {
			if (page.url in this.pages === false) {
				this.pages[page.url] = page;
			}
			this.last = this.pages[page.url];
			this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
		}
	}, {
		key: 'getPage',
		value: function getPage(url) {
			return this.pages[url];
		}
	}, {
		key: 'getCurrentPage',
		value: function getCurrentPage() {
			return this.getPage(window.location.pathname + window.location.search);
		}
	}, {
		key: 'exists',
		value: function exists(url) {
			return url in this.pages;
		}
	}, {
		key: 'empty',
		value: function empty() {
			this.pages = {};
			this.last = null;
			this.swup.log('Cache cleared');
		}
	}, {
		key: 'remove',
		value: function remove(url) {
			delete this.pages[url];
		}
	}]);

	return Cache;
}();

exports.default = Cache;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpers = __webpack_require__(0);

var loadPage = function loadPage(data, popstate) {
	var _this = this;

	// create array for storing animation promises
	var animationPromises = [],
	    xhrPromise = void 0;

	this.triggerEvent('transitionStart', popstate);

	// set transition object
	if (data.customTransition != null) {
		this.updateTransition(window.location.pathname, data.url, data.customTransition);
		document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
	} else {
		this.updateTransition(window.location.pathname, data.url);
	}

	var animateOut = function animateOut() {

		// modif max
		if (!_this.animationPromises) {
			// console.log('SWUP: animate out')
			_this.triggerEvent('animationOutStart');

			// handle classes
			// modif on met un remove avant par securite
			document.documentElement.classList.remove('is-changing');
			document.documentElement.classList.add('is-changing');
			document.documentElement.classList.remove('is-leaving');
			document.documentElement.classList.add('is-leaving');
			document.documentElement.classList.remove('is-animating');
			document.documentElement.classList.add('is-animating');
			if (popstate) {
				document.documentElement.classList.remove('is-popstate');
				document.documentElement.classList.add('is-popstate');
			}
			document.documentElement.classList.remove('to-' + (0, _helpers.classify)(data.url));
			document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url));

			// animation promise stuff
			animationPromises = _this.getAnimationPromises('out');
			Promise.all(animationPromises).then(function () {
				_this.triggerEvent('animationOutDone');
			});
		}

		// create history record if this is not a popstate call
		if (!popstate) {
			// create pop element with or without anchor
			var state = void 0;
			if (_this.scrollToElement != null) {
				state = data.url + _this.scrollToElement;
			} else {
				state = data.url;
			}

			(0, _helpers.createHistoryRecord)(state);
		}
	};

	// start/skip animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		animateOut();
	} else {
		this.triggerEvent('animationSkipped');
	}

	// start/skip loading of page
	if (this.cache.exists(data.url)) {
		xhrPromise = new Promise(function (resolve) {
			resolve();
		});
		this.triggerEvent('pageRetrievedFromCache');
	} else {
		var that = this;
		if (!this.preloadPromise || this.preloadPromise.route != data.url) {
			xhrPromise = new Promise(function (resolve, reject) {

				// modif max on ajoute ce custom loading
				_this.on('cancelLoading', function () {
					that.xhrPromise = null;
					resolve(false);
				});

				// modif max added swupObject
				(0, _helpers.fetch)(_extends({}, data, { headers: _this.options.requestHeaders, swupObject: _this }), function (response) {
					if (response.status === 500) {
						_this.triggerEvent('serverError');
						reject(data.url);
						return;
					} else {
						// get json data
						var page = _this.getPageData(response);
						if (page != null) {
							page.url = data.url;
						} else {
							reject(data.url);
							return;
						}
						// render page
						_this.cache.cacheUrl(page);
						_this.triggerEvent('pageLoaded');
					}
					resolve();
				});
			});
		} else {
			xhrPromise = this.preloadPromise;
		}
	}

	// modif max xhrPromise sert pour le check externe, animationPromises servent pour ne pas repeter l'animation
	this.xhrPromise = xhrPromise;
	if (!this.animationPromises) {
		this.animationPromises = animationPromises;
	}
	var all_promises = this.animationPromises.concat([xhrPromise]);
	// juste pour se rassurer:
	// https://stackoverflow.com/questions/32059531/what-happens-if-a-promise-completes-before-then-is-called

	// when everything is ready, handle the outcome
	Promise.all(all_promises).then(function (all_status) {
		// modif max on check le cancelLoading
		var ok = true;
		all_status && all_status.forEach(function (status) {
			if (status === false) ok = false;
		});

		if (ok) {
			// render page
			// console.log('SWUP: will renderPage')
			_this.xhrPromise = null;
			_this.animationPromises = null;
			_this.renderPage(_this.cache.getPage(data.url), popstate);
		} else {}
		// console.log('SWUP: prevent renderPage')


		// dans tous les cas
		_this.preloadPromise = null;
	}).catch(function (errorUrl) {
		// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
		_this.options.skipPopStateHandling = function () {
			window.location = errorUrl;
			return true;
		};

		// go back to the actual page were still at
		window.history.go(-1);
	});
};

exports.default = loadPage;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var classify = function classify(text) {
	var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
	.replace(/\//g, '-') // Replace / with -
	.replace(/[^\w\-]+/g, '') // Remove all non-word chars
	.replace(/\-\-+/g, '-') // Replace multiple - with single -
	.replace(/^-+/, '') // Trim - from start of text
	.replace(/-+$/, ''); // Trim - from end of text
	if (output[0] === '/') output = output.splice(1);
	if (output === '') output = 'homepage';
	return output;
};

exports.default = classify;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var createHistoryRecord = function createHistoryRecord(url) {
	window.history.pushState({
		url: url || window.location.href.split(window.location.hostname)[1],
		random: Math.random(),
		source: 'swup'
	}, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
};

exports.default = createHistoryRecord;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(1);

var getDataFromHtml = function getDataFromHtml(html, containers) {
	var fakeDom = document.createElement('html');
	fakeDom.innerHTML = html;
	var blocks = [];

	var _loop = function _loop(i) {
		if (fakeDom.querySelector(containers[i]) == null) {
			// page in invalid
			return {
				v: null
			};
		} else {
			(0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
				(0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup
				blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
			});
		}
	};

	for (var i = 0; i < containers.length; i++) {
		var _ret = _loop(i);

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}

	var json = {
		title: fakeDom.querySelector('title').innerText,
		pageClass: fakeDom.querySelector('body').className,
		originalContent: html,
		blocks: blocks
	};

	// to prevent memory leaks
	fakeDom.innerHTML = '';
	fakeDom = null;

	return json;
};

exports.default = getDataFromHtml;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetch = function fetch(setOptions) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var defaults = {
		url: window.location.pathname + window.location.search,
		method: 'GET',
		data: null,
		headers: {}
	};

	var options = _extends({}, defaults, setOptions);

	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status !== 500) {
				callback(request);
			} else {
				callback(request);
			}
		}
	};

	// modif max on annule la requete
	setOptions.swupObject && setOptions.swupObject.on('cancelLoading', function () {
		request.onreadystatechange = function () {
			console.log('SWUP: request aborted');
		};
		request.abort();
	});

	request.open(options.method, options.url, true);
	Object.keys(options.headers).forEach(function (key) {
		request.setRequestHeader(key, options.headers[key]);
	});
	request.send(options.data);
	return request;
};

exports.default = fetch;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var transitionEnd = function transitionEnd() {
	var el = document.createElement('div');

	var transEndEventNames = {
		WebkitTransition: 'webkitTransitionEnd',
		MozTransition: 'transitionend',
		OTransition: 'oTransitionEnd otransitionend',
		transition: 'transitionend'
	};

	for (var name in transEndEventNames) {
		if (el.style[name] !== undefined) {
			return transEndEventNames[name];
		}
	}

	return false;
};

exports.default = transitionEnd;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getCurrentUrl = function getCurrentUrl() {
	return window.location.pathname + window.location.search;
};

exports.default = getCurrentUrl;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(1);

var markSwupElements = function markSwupElements(element, containers) {
	var blocks = 0;

	var _loop = function _loop(i) {
		if (element.querySelector(containers[i]) == null) {
			console.warn('Element ' + containers[i] + ' is not in current page.');
		} else {
			(0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
				(0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
				blocks++;
			});
		}
	};

	for (var i = 0; i < containers.length; i++) {
		_loop(i);
	}
};

exports.default = markSwupElements;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function () {
	function Link(elementOrUrl) {
		_classCallCheck(this, Link);

		if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
			this.link = elementOrUrl;
		} else {
			this.link = document.createElement('a');
			this.link.href = elementOrUrl;
		}
	}

	_createClass(Link, [{
		key: 'getPath',
		value: function getPath() {
			var path = this.link.pathname;
			if (path[0] !== '/') {
				path = '/' + path;
			}
			return path;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			var path = this.link.pathname + this.link.search;

			if (this.link.getAttribute('xlink:href')) {
				path = this.link.getAttribute('xlink:href');
			}

			if (path[0] !== '/') {
				path = '/' + path;
			}
			return path;
		}
	}, {
		key: 'getHash',
		value: function getHash() {
			return this.link.hash;
		}
	}]);

	return Link;
}();

exports.default = Link;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import { queryAll } from '../utils';


var _helpers = __webpack_require__(0);

var renderPage = function renderPage(page, popstate) {
	var _this = this;

	document.documentElement.classList.remove('is-leaving');

	// replace state in case the url was redirected
	var link = new _helpers.Link(page.responseURL);
	if (window.location.pathname !== link.getPath()) {
		window.history.replaceState({
			url: link.getPath(),
			random: Math.random(),
			source: 'swup'
		}, document.title, link.getPath());

		// save new record for redirected url
		this.cache.cacheUrl(_extends({}, page, { url: link.getPath() }));
	}

	// only add for non-popstate transitions
	if (!popstate || this.options.animateHistoryBrowsing) {
		document.documentElement.classList.add('is-rendering');
	}

	// todo save current dom
	this.triggerEvent('willReplaceContent', popstate);

	// replace blocks
	for (var i = 0; i < page.blocks.length; i++) {
		document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
	}

	// set title
	document.title = page.title;

	// here we trick to prevent another click before the setTimeout block below is executed
	// we will always store the last clicked, e.g. if the user clicks two times the last link will be
	// loaded
	var click_event = null;
	this.linkClickHandlerOverride = function (event) {
		click_event = event;
		event.preventDefault();
	};

	// this is delegated to the event loop so the page loads directly,
	setTimeout(function () {
		// Prepare and cleanup are custom ones used to load dom only one time in our plugins
		_this.triggerEvent('contentReplacedPrepare');
		// console.warn('plugins start');
		// const d = Date.now()
		_this.triggerEvent('contentReplaced', popstate);
		// console.warn('plugins ended, total time: ', (Date.now() - d) / 1000 + ' seconds');
		_this.triggerEvent('contentReplacedCleanUp');
		_this.triggerEvent('pageView', popstate);
		// empty cache if it's disabled (because pages could be preloaded and stuff)
		if (!_this.options.cache) {
			_this.cache.empty();
		}
		// we restore click
		_this.linkClickHandlerOverride = null;
		if (click_event) {
			_this.linkClickHandler.call(_this, click_event);
			click_event = null;
		}
	}, 0);

	// start animation IN
	// setTimeout(() => {
	// 	if (!popstate || this.options.animateHistoryBrowsing) {
	// 		this.triggerEvent('animationInStart');
	// 		document.documentElement.classList.remove('is-animating');
	// 	}
	// }, 10);

	// handle end of animation
	var animationPromises = this.getAnimationPromises('in');
	if (!popstate || this.options.animateHistoryBrowsing) {
		Promise.all(animationPromises).then(function () {
			_this.triggerEvent('animationInDone');
			_this.triggerEvent('transitionEnd', popstate);
			// remove "to-{page}" classes
			document.documentElement.className.split(' ').forEach(function (classItem) {
				if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
					document.documentElement.classList.remove(classItem);
				}
			});
		});
	} else {
		this.triggerEvent('transitionEnd', popstate);
	}

	// reset scroll-to element
	this.scrollToElement = null;

	// start animation IN, straight away for performance
	if (!popstate || this.options.animateHistoryBrowsing) {
		this.triggerEvent('animationInStart');
		document.documentElement.classList.remove('is-animating');
	}
};

exports.default = renderPage;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var triggerEvent = function triggerEvent(eventName, originalEvent) {
	// call saved handlers with "on" method and pass originalEvent object if available
	this._handlers[eventName].forEach(function (handler) {
		try {
			handler(originalEvent);
		} catch (error) {
			console.error(error);
		}
	});

	// trigger event on document with prefix "swup:"
	var event = new CustomEvent('swup:' + eventName, { detail: eventName });
	document.dispatchEvent(event);
};

exports.default = triggerEvent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var on = function on(event, handler) {
	if (this._handlers[event]) {
		this._handlers[event].push(handler);
	} else {
		console.warn("Unsupported event " + event + ".");
	}
};

exports.default = on;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var off = function off(event, handler) {
	var _this = this;

	if (event != null) {
		if (handler != null) {
			if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
				return savedHandler === handler;
			}).length) {
				var toRemove = this._handlers[event].filter(function (savedHandler) {
					return savedHandler === handler;
				})[0];
				var index = this._handlers[event].indexOf(toRemove);
				if (index > -1) {
					this._handlers[event].splice(index, 1);
				}
			} else {
				console.warn("Handler for event '" + event + "' no found.");
			}
		} else {
			this._handlers[event] = [];
		}
	} else {
		Object.keys(this._handlers).forEach(function (keys) {
			_this._handlers[keys] = [];
		});
	}
};

exports.default = off;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var updateTransition = function updateTransition(from, to, custom) {
	// transition routes
	this.transition = {
		from: from,
		to: to,
		custom: custom
	};
};

exports.default = updateTransition;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(1);

var _helpers = __webpack_require__(0);

var getAnimationPromises = function getAnimationPromises() {
	var promises = [];
	var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
	animatedElements.forEach(function (element) {
		var promise = new Promise(function (resolve) {
			element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
				if (element == event.target) {
					resolve();
				}
			});
		});
		promises.push(promise);
	});
	return promises;
};

exports.default = getAnimationPromises;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helpers = __webpack_require__(0);

var getPageData = function getPageData(request) {
	// this method can be replaced in case other content than html is expected to be received from server
	// this function should always return {title, pageClass, originalContent, blocks, responseURL}
	// in case page has invalid structure - return null
	var html = request.responseText;
	var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);

	if (pageObject) {
		pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
	} else {
		console.warn('Received page is invalid.');
		return null;
	}

	return pageObject;
};

exports.default = getPageData;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var use = exports.use = function use(plugin) {
	if (!plugin.isSwupPlugin) {
		console.warn('Not swup plugin instance ' + plugin + '.');
		return;
	}

	this.plugins.push(plugin);
	plugin.swup = this;
	if (typeof plugin._beforeMount === 'function') {
		plugin._beforeMount();
	}
	plugin.mount();

	return this.plugins;
};

var unuse = exports.unuse = function unuse(plugin) {
	var pluginReference = void 0;

	if (typeof plugin === 'string') {
		pluginReference = this.plugins.find(function (p) {
			return plugin === p.name;
		});
	} else {
		pluginReference = plugin;
	}

	if (!pluginReference) {
		console.warn('No such plugin.');
		return;
	}

	pluginReference.unmount();

	if (typeof pluginReference._afterUnmount === 'function') {
		pluginReference._afterUnmount();
	}

	var index = this.plugins.indexOf(pluginReference);
	this.plugins.splice(index, 1);

	return this.plugins;
};

var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
	return this.plugins.find(function (p) {
		return pluginName === p.name;
	});
};

/***/ })
/******/ ]);
});