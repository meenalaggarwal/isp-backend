var isps = require('../data/isp_json.js')

/* Get all ISPs with basic details*/
function getAllISPs(input, sort) {
	var response
	if (input) {
		response = isps.filter(function(isp) {
			if (input.toLowerCase() === isp.id || input.toLowerCase() === isp.name.toLowerCase()
				|| input === isp.rating || input === isp.lowest_price) {
				return {
					id: isp.id,
					name: isp.name,
					lowest_price: isp.lowest_price,
					rating: isp.rating
				}
			}
		});
		sortBy(sort, response);
	} else {
		response = isps.map(function(isp) {
			return {
				id: isp.id,
				name: isp.name,
				lowest_price: isp.lowest_price,
				rating: isp.rating
			}
		});
		sortBy(sort, response);
	}
	return response;
}

function sortBy(sort, response) {
	if (sort) {
		return response.sort(function(a, b) {
			var sortby;
			if (sort === 'rate') {
				sortby = 'rating';
			} else if (sort === 'price') {
				sortby = 'lowest_price';
			}
			if (parseFloat(a[sortby]) < parseFloat(b[sortby])) {
				return -1;
			} else if (parseFloat(a[sortby]) > parseFloat(b[sortby])) {
				return 1;
			} else {
				return 0;
			}
		})
	} else {
		return response;
	}
}

/* Get details of an ISP*/
function getISP(name) {
	return isps.find(function(isp) {
		return isp.id === name;
	});
}

module.exports = {
	getAllISPs: getAllISPs,
	getISP: getISP
};