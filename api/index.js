/**
 * New node file
 */

var Request = function() {
	this.apiMethod = null;
	this.apiParams = {};
};

Request.prototype.set = function(setting,val){
	if (1 === arguments.length)
	{
		return this.apiParams[setting];
	}
	else
	{
		this.apiParams[setting] = val;
		return this;
	}
};

Request.prototype.use = function(method) {
	this.api = require("./"+method);
	this.apiMethod = this.api.method;
    return this.api;
};

Request.prototype.check = function() {
    this.api.checkParams(this.apiParams);
};

module.exports = new Request();