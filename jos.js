var querystring = require('querystring');
var crypto = require('crypto');

Date.prototype.pattern = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份           
            "d+": this.getDate(), //日           
            "h+": this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, //小时           
            "H+": this.getHours(), //小时           
            "m+": this.getMinutes(), //分           
            "s+": this.getSeconds(), //秒           
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度           
            "S": this.getMilliseconds() //毫秒           
        };
        var week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };

var JOS = function (appKey,sign) {
	this._apiUrl = 'http://gw.api.360buy.com/routerjson';
	this._sandbox = 'http://gw.api.sandbox.360buy.com/routerjson';
	
	this.appKey = appKey;
	this.sign = sign;
	this.accessToken = undefined;
	this.apiVersion = '2.0';
	this.gatewayUrl = this._apiUrl;
	this.checkRequest = false;
	
	this.sysParams = {};
};

JOS.prototype.set = function(setting, val){
  if (1 === arguments.length) {
    return this.sysParams[setting];
  } else {
    this.sysParams[setting] = val;
    return this;
  }
};

JOS.prototype.getSdkVersion = function() {
	return '0.0.1alph';
};

JOS.prototype.use = function () {
	
};

JOS.prototype.request = function(request,callback) {	
	if ('function' !== typeof callback) { throw new Error('callback function required'); }
	if(this.checkRequest)
	{
		request.check();
	}
	
	request.apiParams = object;
	this.timestamp = new Date().pattern("yyyy-MM-dd HH:mm:ss");
	
	var data  = request.send(this.sysParams,request.apiParams);
	callback(data);
	return this;
};

JOS.prototype.buildParams = function () {
	
};

JOS.prototype.generateSign = function () {
	//crypto.createHash();

};

module.exports = JOS;
