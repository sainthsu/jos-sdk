# jos

JOS=Jingdong Open Service，是京东开放服务的简称。
通过JOS，可以打通卖家信息系统和京东的营销系统、供应链系统、物流系统、服务系统，实现卖家信息系统和京东信息系统的无缝对接。
通过JOS，第三方独立软件开发商（ISV）可以为卖家开发独立的商用软件系统，并共享京东的供应商、卖家等企业客户资源。
JOS是面向电商的云服务平台。

## Usage

###if use jossdk do auth
####for pure node http server
```javascript
var http = require("http");
var SDK = require("../lib/jos");

var jos = new SDK("C0B9006470545DE1FF19943981D14915","8eb73dc2d8d34f80a0070692ae4f17d1");
jos.setAuthPage("/oauth");
jos.setRedirectUrl("/redirect");

var server = http.createServer(function(req,res){

    jos.handleAuth(req,res,function(err,data){
        res.end(data);
    });
    jos.use("jingdong.ware.product.catelogy.list.get")
        .set("catelogyId",123)
        .set("level",123)
        .set("isIcon",true)
        .set("isDescription",true)
        .set("client","jingdong")
        .request(function(err,data){
            res.end(data);
        });
});

server.listen(6868);
```
####for express middleware
```javascript
var express = require('express');
var app = express();
var SDK = require("../lib/jos");

var jos = new SDK("C0B9006470545DE1FF19943981D14915","8eb73dc2d8d34f80a0070692ae4f17d1");
jos.setAuthPage("/oauth");
jos.setRedirectUrl("http://flakor.com");

app.use(jos.middleware(function(err,data){
    console.log(data);
}));
app.listen(3000);
console.log('Listening on port 3000');
```
###only for api request
```javascript
var jos = new JOS(appid,sign,token);
var result = jos.use("").set().set().set().request();
or
var result = jos.use("").set({set:"66666"}).request();
```
## Developing by

saint(mail:saint@aliyun.com)
blog:http://www.flakor.cn
