/**
 * Created by saint on 1/11/14.
 */
/*!
 * 对返回结果的一层封装，如果遇见微信返回的错误，将返回一个错误
 * 参见：http://mp.weixin.qq.com/wiki/index.php?title=返回码说明
 */
var oauthCode = require("./oauthError");
exports.wrapper = function (callback) {
    return function (err, data, res) {
        if (err) {
            err.name = 'JOSERROR' + err.name;
            return callback(err, data, res);
        }
        if (data.code!=0) {
            err = new Error(oauthCode[data.code]);
            err.name = 'JOSError';
            return callback(err, data, res);
        }
        callback(null, data, res);
    };
};

/*!
 * 对提交参数一层封装，当POST JSON，并且结果也为JSON时使用
 */
exports.postJSON = function (data) {
    return {
        dataType: 'json',
        type: 'POST',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};