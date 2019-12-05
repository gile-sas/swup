'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpers = require('../helpers');

var loadPage = function loadPage(data, popstate) {
	var _this = this;

	// create array for storing animation promises
	var animationPromises = [],
	    xhrPromise = void 0;

	// // modif
	// const customAnimateIn = () => {
	//
	// 	// on supprime la transition avec classe custom
	// 	this.options.containers.forEach(id => {
	// 		const el = document.documentElement.querySelector(id)
	// 		el && el.classList.add('no-transition')
	// 	})
	// 	// on supprime les classes
	// 	document.documentElement.classList.remove('is-leaving');
	// 	document.documentElement.className.split(' ').forEach((classItem) => {
	// 		if (
	// 			new RegExp('^to-').test(classItem) ||
	// 			classItem === 'is-changing' ||
	// 			classItem === 'is-rendering' ||
	// 			classItem === 'is-popstate'
	// 		) {
	// 			document.documentElement.classList.remove(classItem);
	// 		}
	// 	});
	// 	document.documentElement.classList.remove('is-animating');
	//
	// 	// on remet les transitions
	// 	this.options.containers.forEach(id => {
	// 		const el = document.documentElement.querySelector(id)
	// 		el && el.classList.remove('no-transition')
	// 	})
	//
	// }
	//
	// // modif max
	// this.on('cancelLoading', () => {
	// 	console.log('SWUP: customAnimateIn')
	// 	customAnimateIn()
	// })

	this.triggerEvent('transitionStart', popstate);

	// set transition object
	if (data.customTransition != null) {
		this.updateTransition(window.location.pathname, data.url, data.customTransition);
		document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
	} else {
		this.updateTransition(window.location.pathname, data.url);
	}

	var animateOut = function animateOut() {
		console.log('SWUP: animate out');
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

	// modif max on ajoute ça pour le check externe
	this.xhrPromise = xhrPromise;

	// when everything is ready, handle the outcome
	console.log(animationPromises, xhrPromise);
	Promise.all(animationPromises.concat([xhrPromise])).then(function (all_status) {
		// modif max on check le cancelLoading
		var ok = true;
		all_status && all_status.forEach(function (status) {
			if (status === false) ok = false;
		});

		if (ok) {
			// render page
			console.log('SWUP: will renderPage');
			_this.renderPage(_this.cache.getPage(data.url), popstate);
		} else {
			console.log('SWUP: prevent renderPage');
		}

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