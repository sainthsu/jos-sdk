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
//引入sdk
var SDK = require("jossdk");
 
//初始化sdk，参数分别为appkey，appscrect，第三个参数是token可以没有。
var jos = new SDK("C0B9006470545DE1FF19943981D14915","8eb73dc2d8d34f80a0070692ae4f17d1");
//设置授权的页面url
jos.setAuthPage("/oauth");
//设置回调地址，要与你APP里面填的一样
jos.setRedirectUrl("/redirect");
 
var server = http.createServer(function(req,res){
 
    jos.handleAuth(req,res,yourcallback(err,data){});
});
 
server.listen(6868);
```
####for express middleware
```javascript
var express = require('express');
var app = express();
var SDK = require("jossdk");

var jos = new SDK("C0B9006470545DE1FF19943981D14915","8eb73dc2d8d34f80a0070692ae4f17d1");
jos.setAuthPage("/oauth");
jos.setRedirectUrl("http://flakor.com");

app.use(jos.middleware(yourcallback(err,data){}));
app.listen(3000);
console.log('Listening on port 3000');
```
###only for api request
```javascript
var SDK = require("jossdk");
var jos = new SDK(appid,sign,token);
//use函数使用接口，set函数设置参数，request请求
//使用和设置无先后顺序。但是一定要先使用和设置正确的参数后再请求。
jos.use("jingdong.ware.product.catelogy.list.get")
        .set("catelogyId",123)
        .set("level",123)
        .set("isIcon",true)
        .set("isDescription",true)
        .set("client","jingdong")
        .request(yourcallback(err,data){});
or
jos.use("").set({catelogyId:"66666",level:123}).request(yourcallback(err,data){});
```

## Lisence
Copyright 2014 saint(saint@aliyun.com)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

## Developing by

saint(mail:saint@aliyun.com)
blog:http://www.flakor.cn
