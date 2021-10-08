// import { queryAll } from '../utils';
import { transitionEnd, Link } from '../helpers';

const renderPage = function(page, popstate) {
	document.documentElement.classList.remove('is-leaving');

	// replace state in case the url was redirected
	let link = new Link(page.responseURL);
	if (window.location.pathname !== link.getPath()) {
		window.history.replaceState(
			{
				url: link.getPath(),
				random: Math.random(),
				source: 'swup'
			},
			document.title,
			link.getPath()
		);

		// save new record for redirected url
		this.cache.cacheUrl({ ...page, url: link.getPath() });
	}

	// only add for non-popstate transitions
	if (!popstate || this.options.animateHistoryBrowsing) {
		document.documentElement.classList.add('is-rendering');
	}

	// todo save current dom
	this.triggerEvent('willReplaceContent', popstate);

	// replace blocks
	for (let i = 0; i < page.blocks.length; i++) {
		document.body.querySelector(`[data-swup="${i}"]`).outerHTML = page.blocks[i];
	}

	// set title
	document.title = page.title;

	// here we trick to prevent another click before the setTimeout block below is executed
	// we will always store the last clicked, e.g. if the user clicks two times the last link will be
	// loaded
	let click_event = null
	this.linkClickHandlerOverride = event => {
		click_event = event
		event.preventDefault();
	}

	// this is delegated to the event loop so the page loads directly,
	setTimeout(() => {
		// Prepare and cleanup are custom ones used to load dom only one time in our plugins
		this.triggerEvent('contentReplacedPrepare');
		// console.warn('plugins start');
		// const d = Date.now()
		this.triggerEvent('contentReplaced', popstate);
		// console.warn('plugins ended, total time: ', (Date.now() - d) / 1000 + ' seconds');
		this.triggerEvent('contentReplacedCleanUp');
		this.triggerEvent('pageView', popstate);
		// empty cache if it's disabled (because pages could be preloaded and stuff)
		if (!this.options.cache) {
			this.cache.empty();
		}
		// we restore click
		this.linkClickHandlerOverride = null
		if (click_event) {
			this.linkClickHandler.call(this, click_event)
			click_event = null
		}
	}, 0)


	// start animation IN
	// setTimeout(() => {
	// 	if (!popstate || this.options.animateHistoryBrowsing) {
	// 		this.triggerEvent('animationInStart');
	// 		document.documentElement.classList.remove('is-animating');
	// 	}
	// }, 10);

	// handle end of animation
	const animationPromises = this.getAnimationPromises('in');
	if (!popstate || this.options.animateHistoryBrowsing) {
		Promise.all(animationPromises).then(() => {
			this.triggerEvent('animationInDone');
			this.triggerEvent('transitionEnd', popstate);
			// remove "to-{page}" classes
			document.documentElement.className.split(' ').forEach((classItem) => {
				if (
					new RegExp('^to-').test(classItem) ||
					classItem === 'is-changing' ||
					classItem === 'is-rendering' ||
					classItem === 'is-popstate'
				) {
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

export default renderPage;
