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

	// modif max on annule la requete
	setOptions.swupObject && setOptions.swupObject.on('cancelLoading', () => {
		request.abort()
	})

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status !== 500) {
				callback(request);
			} else {
				callback(request);
			}
		}
	};

	request.open(options.method, options.url, true);
	Object.keys(options.headers).forEach((key) => {
		request.setRequestHeader(key, options.headers[key]);
	});
	request.send(options.data);
	return request;
};

export default fetch;
