import { classify, createHistoryRecord, fetch } from '../helpers';

const loadPage = function(data, popstate) {
	// create array for storing animation promises
	let animationPromises = [],
		xhrPromise;
	const animateOut = () => {
		this.triggerEvent('animationOutStart');

		// handle classes
		document.documentElement.classList.add('is-changing');
		document.documentElement.classList.add('is-leaving');
		document.documentElement.classList.add('is-animating');
		if (popstate) {
			document.documentElement.classList.add('is-popstate');
		}
		document.documentElement.classList.add('to-' + classify(data.url));

		// animation promise stuff
		animationPromises = this.getAnimationPromises('out');
		Promise.all(animationPromises).then(() => {
			this.triggerEvent('animationOutDone');
		});

		// create history record if this is not a popstate call
		if (!popstate) {
			// create pop element with or without anchor
			let state;
			if (this.scrollToElement != null) {
				state = data.url + this.scrollToElement;
			} else {
				state = data.url;
			}

			createHistoryRecord(state);
		}
	};

	this.triggerEvent('transitionStart', popstate);

	// set transition object
	if (data.customTransition != null) {
		this.updateTransition(window.location.pathname, data.url, data.customTransition);
		document.documentElement.classList.add(`to-${classify(data.customTransition)}`);
	} else {
		this.updateTransition(window.location.pathname, data.url);
	}

	// start/skip animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		animateOut();
	} else {
		this.triggerEvent('animationSkipped');
	}

	// start/skip loading of page
	if (this.cache.exists(data.url)) {
		xhrPromise = new Promise((resolve) => {
			resolve();
		});
		this.triggerEvent('pageRetrievedFromCache');
	} else {
		if (!this.preloadPromise || this.preloadPromise.route != data.url) {
			xhrPromise = new Promise((resolve, reject) => {

				// modif max on ajoute ce custom loading
				this.on('cancelLoading', () => {
					resolve(false)
				})

				// modif max added swupObject
				fetch({ ...data, headers: this.options.requestHeaders, swupObject: this }, (response) => {
					if (response.status === 500) {
						this.triggerEvent('serverError');
						reject(data.url);
						return;
					} else {
						// get json data
						let page = this.getPageData(response);
						if (page != null) {
							page.url = data.url;
						} else {
							reject(data.url);
							return;
						}
						// render page
						this.cache.cacheUrl(page);
						this.triggerEvent('pageLoaded');
					}
					resolve();
				});
			});
		} else {
			xhrPromise = this.preloadPromise;
		}
	}

	// when everything is ready, handle the outcome
	Promise.all(animationPromises.concat([xhrPromise]))
		.then((all_status) => {
			// modif max on check le cancelLoading
			let ok = true
			all_status && all_status.forEach(function(status) {
				if(status === false) ok = false;
			})

			if(ok) {
				// render page
				this.renderPage(this.cache.getPage(data.url), popstate);
			} else {
				// modif max we remove classes
				// document.documentElement.classList.remove('is-animating');
				// document.documentElement.className.split(' ').forEach((classItem) => {
				// 	if (
				// 		new RegExp('^to-').test(classItem) ||
				// 		classItem === 'is-changing' ||
				// 		classItem === 'is-rendering' ||
				// 		classItem === 'is-popstate'
				// 	) {
				// 		document.documentElement.classList.remove(classItem);
				// 	}
				// });
			}

			// dans tous les cas
			this.preloadPromise = null;
		})
		.catch((errorUrl) => {
			// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
			this.options.skipPopStateHandling = function() {
				window.location = errorUrl;
				return true;
			};

			// go back to the actual page were still at
			window.history.go(-1);
		});
};

export default loadPage;
