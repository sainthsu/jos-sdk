/**
 * New node file
 */
var urllib = require("urllib");


var request = function() {
	this.apiMethod = null;
	this.apiParams = {};
};

request.prototype.set = function(setting,val){
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

request.prototype.use = function(method) {
	this.api = require("./"+method);
	this.apiMethod = this.api.getMethod();
    this.apiParams['method'] = this.apiMethod;
};

request.prototype.check = function() {
    this.api.checkParams(this.apiParams);
};

request.prototype.send = function() {
    urllib.request();
};

module.exports = new request();