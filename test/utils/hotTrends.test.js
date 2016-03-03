'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var should = chai.should();

var hotTrends = require(__dirname + '/../../lib/utils/hotTrends.js');

module.exports = 
describe('hotTrends.js', function(){
	it('should reject if country is invalid', function(){
		return hotTrends('ZZ').should.be.rejectedWith('Could not locate country');
	});
});