/**
 * Created by saint on 6/13/14.
 */

var http = require("http");
var OAuth = require("../index").OAuth;
var api = require("../index").API;

var server = http.createServer();

OAuth.getAccessToken = function(request,response) {
    //console.log(request.headers);
    //console.log(request.method);

    if(/oauth/gi.test(request.url))
    {
        var oauth = new OAuth("8299609293DA72A1514815195D26F3EC","63d58296a409497da0df5799e3c63675");
        var url = oauth.getAuthorizeURL("http://flakor.com");

        response.writeHead(302, {
            'Location': url
        });
        response.end();
    }
    else
    {
        var reqUrl = require('url').parse(request.url,true);
        if(reqUrl.pathname == "/redirect")
        {
            if(reqUrl.query.code !== undefined)
            {
                var code = reqUrl.query.code;
                oauth._getAccessToken(code,function(){

                });
            }
            else
            {
                throw new Error(reqUrl.query.error);
                response.write(reqUrl.query.error);
                response.write("visit /oauth !");
                response.end();
            }
        }
    }
};

server.listen(6868);