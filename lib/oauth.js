/**
 * Created by saint on 1/11/14.
 */
var https = require('https');
var wrapper = require('./util').wrapper;
var querystring = require('querystring');

/*!
 * 处理token，更新过期时间
 */
var processToken = function (that, callback) {
    return function (err, data, res) {
        if (err) {
            return callback(err, data);
        }
        that.accessToken = data.access_token;
        that.refreshToken = data.refresh_token;
        that.expireTime = data.time;
        that.tokenType= data.token_type;
        that.code = data.code;
        callback(err, data);
    };
};

/**
 * 根据appid和appsecret创建OAuth接口的构造函数
 *
 * Examples:
 * ```
 * var OAuth = require('jos').OAuth;
 * var api = new OAuth('appid', 'secret');
 * ```
 * @param {String} appid 在JOS平台上申请得到的appid
 * @param {String} appsecret 在JOS平台上申请得到的app secret
 */
var OAuth = function (appid, appsecret) {
    this.appid = appid;
    this.appsecret = appsecret;
};


OAuth.prototype.setRedirectUrl = function (redirectUrl) {
    this.redirect == redirectUrl;
};
/**
 * 获取授权页面的URL地址
 * @param {String} redirect 应用的回调地址，必须和应用的callback主域名匹配。
 * @param {String} state  状态参数，由应用自定义，颁发授权后会原封不动返回
 * @param {String} scope  权限参数，API组名串，多个组名时，用"，"分隔，目前支持参数：read
 */
OAuth.prototype.getAuthorizeURL = function (state, scope) {
    var url = 'https://auth.360buy.com/oauth/authorize';
    if(this.redirect === undefined)
        this.redirect = "urn:ietf:wg:oauth:2.0:oob";
    var info = {
        client_id: this.appid,
        redirect_uri: this.redirect,
        response_type: 'code',
        scope: scope || 'read',
        state: state || '',
        view: "wap"
    };

    return url + '?' + querystring.stringify(info);
};

/**
 * 返回当前的access token是否有效
 */
OAuth.prototype.isAccessTokenValid = function () {
    return this.expireTime && (new Date().getTime()) < this.expireTime;
};

/**
 * 根据授权获取到的code，换取access token
 * Examples:
 * ```
 * api.getAccessToken(code, callback);
 * ```
 * Callback:
 *
 * - `err`, 获取access token出现异常时的异常对象
 * - `result`, 成功时得到的响应结果
 *
 * Result:
 * ```
 * {
 *  "access_token": "ACCESS_TOKEN",
 *  "code":0,//返回码
 *  "expires_in": 7200,//失效时间（秒）
 *  "refresh_token": "REFRESH_TOKEN",
 *  "time": "112323223222", //在此时间内允许重置token（毫秒）
 *  "token_type": "bearer"//token类型
 * }
 * ```
 * @param {String} code 授权获取到的code
 * @param {Function} callback 回调函数
 */
OAuth.prototype._getAccessToken = function (code, callback) {
    var self = this;
    var info = {
        client_id: self.appid,
        client_secret: self.appsecret,
        code: code,
        state:self.state || '',
        grant_type: 'authorization_code',
        redirect_uri: self.redirect||'',
        scope:'read'
    };

    var options = {
        hostname: 'auth.360buy.com',
        port: 443,
        path: '/oauth/token?'+querystring.stringify(info),
        method: 'POST'
    };

    console.log(options.path);

    var req = https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            self.accessToken = chunk.access_token;
            self.refreshToken = chunk.refresh_token;
            self.expireTime = chunk.time;
            self.tokenType= chunk.token_type;
            self.code = chunk.code;
            callback(null,chunk);
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(e) {
        callback(e);
        console.log('problem with request: ' + e.message);
    });

    req.end();

};

/**
 * 根据refresh token，刷新access token，调用getAccessToken后才有效
 * Examples:
 * ```
 * api.refreshAccessToken(callback);
 * ```
 * Callback:
 *
 * - `err`, 刷新access token出现异常时的异常对象
 * - `result`, 成功时得到的响应结果
 *
 * Result:
 * ```
 *  {
 *  "access_token": "ACCESS_TOKEN",
 *  "code":0,//返回码
 *  "expires_in": 7200,//失效时间（秒）
 *  "refresh_token": "REFRESH_TOKEN",
 *  "time": "112323223222", //在此时间内允许重置token（毫秒）
 *  "token_type": "bearer"//token类型
 *  }
 * ```
 * @param {Function} callback 回调函数
 */
OAuth.prototype.refreshAccessToken = function (state,callback) {
    var self = this;

    var info = {
        client_id: self.appid,
        client_secret: self.appsecret,
        grant_type: 'refresh_token',
        refresh_token: self.refreshToken,
        state:state,
        scope:'read'
    };

    var options = {
        hostname: 'auth.360buy.com',
        port: 443,
        path: '/oauth/token?'+querystring.stringify(info),
        method: 'POST'
    };

    console.log(options.path);

    var req = https.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            self.accessToken = chunk.access_token;
            self.refreshToken = chunk.refresh_token;
            self.expireTime = chunk.time;
            self.tokenType= chunk.token_type;
            self.code = chunk.code;
            callback(null,chunk);
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(e) {
        callback(e);
        console.log('problem with request: ' + e.message);
    });

    req.end();
};

module.exports = OAuth;

