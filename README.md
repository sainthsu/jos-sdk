# jos

JOS=Jingdong Open Service，是京东开放服务的简称。
通过JOS，可以打通卖家信息系统和京东的营销系统、供应链系统、物流系统、服务系统，实现卖家信息系统和京东信息系统的无缝对接。
通过JOS，第三方独立软件开发商（ISV）可以为卖家开发独立的商用软件系统，并共享京东的供应商、卖家等企业客户资源。
JOS是面向电商的云服务平台。

## Usage

###if use jos do auth
####for pure node http server
```javascript
var jos = new JOS(appid,sign);

jos.setRedirectUrl("http://www.flakor.org");
jos.setAuthPage("http://localhost:6868/auth");
jos.handleAuth(req,res);

var result = jos.use("").set().set().set().request();
var result = jos.use("").set({set:"66666"}).request();
```
####for express middleware
//express.use("",jos.authHandler);

###only for api request
```javascript
var jos = new JOS(appid,sign,token);
var result = jos.use("").set().set().set().request();
or
var result = jos.use("").set({set:"66666"}).request();
```
## Developing by

saint(mailto:saint@aliyun.com)
blog:http://www.flakor.cn
