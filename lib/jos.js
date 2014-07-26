var querystring = require('querystring');
var crypto = require('crypto');
var API = require("./../api/index");
var OAuth = require("./oauth");
var http = require("http");

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

function getSortObject(obj) {
    var keys = Object.keys(obj);
    keys.sort();
    var sortedObject = Object();
    for(var i in keys){
        var key = keys[i];
        sortedObject[key]=obj[key];
    }

    return sortedObject;
}

function checkValueType(val ,type) {
    switch (type)
    {
        case "Number":
            if(isNaN(val))
                throw new Error(val+"must be a Number");
            break;
        case "NumberArray":
            if(!val instanceof  Array)
            {
                throw new Error(val+"must be an Array")
            }
            else
            {
                for(var i in val)
                {
                    if(isNaN(val[i]))
                        throw new Error(val+"must be a Number");
                    break;
                }
            }
            break;
        case "String":
            if(!val instanceof  String)
            {
                throw new Error(val+"must be an String!!!")
            }

            break;
        case "StringArray":
            if(!val instanceof  Array)
            {
                throw new Error(val+"must be an Array!!1")
            }
            else
            {
                for(var i in val)
                {
                    if(!val instanceof  String)
                    {
                        throw new Error(val+"must be an String!!!")
                    }
                    break;
                }
            }
            break;
        case "Boolean":
            if(!val instanceof  Boolean)
            {
                throw new Error(val+"must be an Boolean!!!")
            }

            break;
        case "ByteArray":
            break;
    }
}

var JOS = function (appKey,appSecret,token) {
	this._apiUrl = 'http://gw.api.360buy.com/routerjson';
	this._sandbox = 'http://gw.api.sandbox.360buy.com/routerjson';
	
	this.appKey = appKey;
	this.appSecret = appSecret || undefined;
	this.accessToken = token || undefined;

	this.apiVersion = '2.0';
    this.sdkVersion = '{version:"0.0.1":buildBy:"saint(saint@aliyun.com)"}';
	this.gatewayUrl = this._apiUrl;
	this.checkParams = true;
	
	this.sysParams = {};
    this.sysParams.app_key = this.appKey;
    if(token)
        this.sysParams.access_token = this.accessToken;
    this.sysParams.v = this.apiVersion;

    this.apiParams = {};
};

JOS.prototype.set = function(setting, val){
    if (1 === arguments.length) {
        return this.apiParams[setting];
    } else {
        this.apiParams[setting] = val;
        return this;
    }
};

JOS.prototype.setRedirectUrl = function(url) {
    this.redirectUrl = url || undefined;
};

JOS.prototype.setAuthPage = function(page) {
    this.authPage = page || undefined;
};

JOS.prototype.getSdkVersion = function() {
	return this.sdkVersion;
};

JOS.prototype.getApiVersion = function() {
    return this.apiVersion;
};

//Object / Array / Function / String / Number / Boolean
JOS.prototype.use = function(val) {
    if( (typeof val=='string')&&val.constructor==String)
    {
        this.sysParams.method = val;
        this.api = API.use(val);
    }
    else if(val instanceof Object)
    {
        this.api = val;
        this.sysParams.method = val.method;
    }
    else
    {
        throw new Error("val must be String or JingDong Api Object");
    }
    this.apiParams = {};
    return this;
};

JOS.prototype.useSandbox = function () {
	this.gatewayUrl = this._sandbox;
    return this;
};

JOS.prototype.request = function(callback) {
	if ('function' !== typeof callback) { throw new Error('callback function required'); }
    //if (!request instanceof Request){ throw new Error('first param must be a Request instance!'); }

	if(this.checkParams)
	{
		this.check(this.api);
	}

	var query = this.buildParams();
    var url = this.gatewayUrl + "?" + query;

    console.log(url);

    var req = http.request(url, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            callback(null,chunk);
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(e) {
        callback(e);
        console.log('problem with request: ' + e.message);
    });

    req.end();

	return this;
};

JOS.prototype.buildParams = function () {
	this.sysParams['sign'] = this.generateSign();
    this.sysParams = getSortObject(this.sysParams);
    var query = "360buy_param_json="+JSON.stringify(this.apiParams)+"&timestamp="+this.timestamp+"&"+querystring.stringify(this.sysParams);
    return query;
};

JOS.prototype.generateSign = function () {
	var md5 = crypto.createHash("md5");
    this.timestamp = this.getTimestamp();
    //this.sysParams['timestamp'] = this.timestamp;
    this.apiParams = getSortObject(this.apiParams);

    var str = this.appSecret+"360buy_param_json"+JSON.stringify(this.apiParams);
    if(this.accessToken != undefined && this.accessToken != '')
    {
        str +="access_token"+this.accessToken;
    }
    str +="app_key"+this.appKey+
    "method"+this.sysParams['method']+
    "timestamp"+this.timestamp+
    "v"+this.apiVersion+this.appSecret;

    console.log("sign:"+str);
    var sign = md5.update(str,"utf8").digest("hex").toUpperCase();

    return sign;
};

JOS.prototype.getTimestamp = function(){
    return   new Date().pattern("yyyy-MM-dd HH:mm:ss");
};

JOS.prototype.check = function(api) {
    if(api.authorization)
    {
        var token = this.accessToken;
        if(!token || token == '')
        {
            throw new Error("access token is needed!!!");
        }
    }
    var check = api.check;
    var params = this.apiParams;
    for(var property in check)
    {
        if(check[property].required)
        {
            if(!params[property]){
                checkValueType(params[property],check[property].type);
            }
        }
        else
        {
            checkValueType(params[property],check[property].type);
        }
    }

};

JOS.prototype.handleAuth = function(request,response,callback) {
    //console.log(request.headers);
    //console.log(request.method);

    if(this.oauth == undefined)
    {
        this.oauth = new OAuth(this.appKey,this.appSecret);
        this.oauth.redirect = this.redirectUrl;
    }
    var oauth = this.oauth;

    //console.log(this.oauth);
    if(new RegExp(this.authPage).test(request.url))
    {
        var url = oauth.getAuthorizeURL("test");

        response.writeHead(302, {
            'Location': url
        });
        response.end();
    }
    else if(new RegExp(this.redirectUrl).test(request.url))
    {
        var query = require('url').parse(request.url,true).query;

        if(query.code !== undefined && query.code != '')
        {
                var code = query.code;
                oauth._getAccessToken(code,callback);
        }
        else
        {
            throw new Error(query.error);
            response.writeHead(302, {
                'Location': this.authPage
            });
            response.end();
        }
    }
};

JOS.prototype.middleware = function(callback){
        var self = this;

        return function(request, response, next) {

            if(self.oauth == undefined)
            {
                self.oauth = new OAuth(self.appKey,self.appSecret);
                self.oauth.redirect = self.redirectUrl;
            }
            var oauth = self.oauth;

            //console.log(this.oauth);
            if(new RegExp(self.authPage).test(request.url))
            {
                var url = oauth.getAuthorizeURL("test");

                response.writeHead(302, {
                    'Location': url
                });
                response.end();
            }
            else if(new RegExp(self.redirectUrl).test(request.url))
            {
                var query = require('url').parse(request.url,true).query;

                if(query.code !== undefined && query.code != '')
                {
                    var code = query.code;
                    oauth._getAccessToken(code,callback);
                }
                else
                {
                    throw new Error(query.error);
                    response.writeHead(302, {
                        'Location': self.authPage
                    });
                    response.end();
                }
            }
            else { next(); }
        };
}
module.exports = JOS;
