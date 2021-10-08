'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import { queryAll } from '../utils';


var _helpers = require('../helpers');

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