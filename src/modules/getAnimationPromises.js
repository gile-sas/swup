import { queryAll } from '../utils';
import { transitionEnd } from '../helpers';

const getAnimationPromises = function() {
	const promises = [];
	let animatedElements = queryAll(this.options.animationSelector);
	animatedElements.forEach((element) => {
		const promise = new Promise((resolve) => {

			const listener = (event) => {
					if (element == event.target) {
						resolve();
					}
			}
			element.addEventListener(transitionEnd(), listener)
			// modif max on ajoute ce custom loading
			this.on('cancelLoading', () => {
				element.removeEventListener(transitionEnd(), listener)
				resolve(false)
			})

		});
		promises.push(promise);
	});
	return promises;
};

export default getAnimationPromises;
