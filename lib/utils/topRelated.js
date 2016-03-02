'use strict';

var rp = require('request-promise');
var createObj = require('../resources/callbacks.js');
var checkErrors = require('../resources/errorHandling.js');
var parseHtml = require('../resources/htmlParser.js');

module.exports = function request(keywords, geo, cbFunc){
	var obj = createObj(Array.from(arguments), request);

	var error = checkErrors(obj);
	if(error instanceof Error) return Promise.reject(obj.cbFunc(error));

	return Promise.all(promiseArr(obj.keywords, obj.geo))
	.then(function(htmlStrings){
		return obj.cbFunc(null, htmlStrings.map(function(htmlString){
			return parseHtml(htmlString);
		}));
	})
	.catch(function(err){
		return Promise.reject(obj.cbFunc(err));
	});
};

function promiseArr(keywords, country){
	return keywords.map(function(keyword){
		return rp(`http://www.google.com/trends/fetchComponent?hl=en-US&q=${keyword}&geo=${country}&cid=RISING_QUERIES_0_0`);
	});
}