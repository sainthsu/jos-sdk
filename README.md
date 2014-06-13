

# jos



## Usage

==if use jos do auth
*for pure node http
var jos = new JOS(appid,sign);

jos.setRedirectUrl("http://www.flakor.org");
jos.setAuthPage("http://localhost:6868/auth");
jos.handleAuth(req,res);

var result = jos.use("").set().set().set().request();
var result = jos.use("").set({set:"66666"}).request();

==for express middleware
//express.use("",jos.authHandler);

== only for api request

var jos = new JOS(appid,sign,token);
var result = jos.use("").set().set().set().request();
or
var result = jos.use("").set({set:"66666"}).request();

## Developing

saint(saint@aliyun.com)
