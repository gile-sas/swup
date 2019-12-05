import { classify, createHistoryRecord, fetch } from '../helpers';

const loadPage = function(data, popstate) {
	// create array for storing animation promises
	let animationPromises = [],
		xhrPromise;

	this.triggerEvent('transitionStart', popstate);

	// set transition object
	if (data.customTransition != null) {
		this.updateTransition(window.location.pathname, data.url, data.customTransition);
		document.documentElement.classList.add(`to-${classify(data.customTransition)}`);
	} else {
		this.updateTransition(window.location.pathname, data.url);
	}


	const animateOut = () => {
		// console.log('SWUP: animate out')
		this.triggerEvent('animationOutStart');

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
		document.documentElement.classList.remove('to-' + classify(data.url));
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

	// start/skip animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		// modif max
		if(!this.animationPromises) {
			animateOut();
		}
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
		const that = this
		if (!this.preloadPromise || this.preloadPromise.route != data.url) {
			xhrPromise = new Promise((resolve, reject) => {

				// modif max on ajoute ce custom loading
				this.on('cancelLoading', () => {
					that.xhrPromise = null
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

	// modif max xhrPromise sert pour le check externe, animationPromises servent pour ne pas repeter l'animation
	this.xhrPromise = xhrPromise
	if(!this.animationPromises) {
		this.animationPromises = animationPromises
	}
	const all_promises = this.animationPromises.concat([xhrPromise])
	// juste pour se rassurer:
	// https://stackoverflow.com/questions/32059531/what-happens-if-a-promise-completes-before-then-is-called

	// when everything is ready, handle the outcome
	Promise.all(all_promises)
		.then((all_status) => {
			// modif max on check le cancelLoading
			let ok = true
			all_status && all_status.forEach(function(status) {
				if(status === false) ok = false;
			})

			if(ok) {
				// render page
				// console.log('SWUP: will renderPage')
				this.xhrPromise = null
				this.animationPromises = null
				this.renderPage(this.cache.getPage(data.url), popstate);
			} else {
				// console.log('SWUP: prevent renderPage')
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
