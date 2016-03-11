'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var should = chai.should();

var topRelated = require(__dirname + '/../../lib/utils/topRelated.js');

module.exports = 
describe('topRelated.js', function(){
	it('should reject if country is invalid', function(){
		return topRelated('dogs', 'ZZ').should.be.rejectedWith('Could not locate country');
	});
	it('should reject if no keyword is provided', function(){
		return topRelated().should.be.rejectedWith('Keywords must be provided');
	});
});