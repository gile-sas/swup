'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = require('../utils');

var _helpers = require('../helpers');

var getAnimationPromises = function getAnimationPromises() {
	var promises = [];
	var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
	animatedElements.forEach(function (element) {
		var promise = new Promise(function (resolve) {

			var listener = function listener(event) {
				if (element == event.target) {
					resolve();
				}
			};
			element.addEventListener((0, _helpers.transitionEnd)(), listener);
			// // modif max on ajoute ce custom loading
			// this.on('cancelLoading', () => {
			// 	element.removeEventListener(transitionEnd(), listener)
			// 	resolve(false)
			// })
		});
		promises.push(promise);
	});
	return promises;
};

exports.default = getAnimationPromises;