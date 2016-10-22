'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var should = chai.should();

var top30in30 = require(__dirname + '/../../lib/utils/top30in30.js');

module.exports = 
describe('top30in30.js', function(){
	it('should resolve', function(){
		return top30in30().should.be.fulfilled;
	});
});