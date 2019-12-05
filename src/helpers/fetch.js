const fetch = (setOptions, callback = false) => {
	let defaults = {
		url: window.location.pathname + window.location.search,
		method: 'GET',
		data: null,
		headers: {}
	};

	let options = {
		...defaults,
		...setOptions
	};

	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status !== 500) {
				callback(request);
			} else {
				callback(request);
			}
		}
	};

	// modif max on annule la requete
	setOptions.swupObject && setOptions.swupObject.on('cancelLoading', () => {
		request.onreadystatechange = function() {
			console.log('SWUP: request aborted');
		}
		request.abort()
	})


	request.open(options.method, options.url, true);
	Object.keys(options.headers).forEach((key) => {
		request.setRequestHeader(key, options.headers[key]);
	});
	request.send(options.data);
	return request;
};

export default fetch;
