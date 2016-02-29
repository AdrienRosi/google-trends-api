var rp = require('request-promise');
const COUNTRY = require('../resources/countryCodes.js');
const DATE = require('../resources/dateValidate.js');

module.exports = function(category, date, country){
	if(typeof arguments[0] === 'object' && !Array.isArray(arguments[0])){
		country = arguments[0].geo;
		date = arguments[0].date
		category = arguments[0].category;
	}

	if(!category) return Promise.reject('Category must be provided');

	date = !!date ? String(date) : DATE.getToday();
	if(!DATE.isValid(date)) return Promise.reject('Date is invalid');

	country = country || 'US';
	if(country.length > 2) country = COUNTRY.getAbbreviation(country.toUpperCase());
	if(!COUNTRY.getCode(country)) return Promise.reject('Could not locate country');

	var options = {
		method: 'POST',
		uri: 'http://www.google.com/trends/topcharts/trendingchart',
		form: {
			ajax: '1',
			geo: country,
			date: date,
			cid: category
		},
		json: true
	};

	return rp(options)
	.then(function(results){
		return results;
	});
};