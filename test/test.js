/**
 * Created by saint on 7/23/14.
 */
var http = require("http");
var SDK = require("../lib/jos");

var jos = new SDK("C0B9006470545DE1FF19943981D14915","8eb73dc2d8d34f80a0070692ae4f17d1");
jos.setAuthPage("http://flakor.com/oauth");
jos.setRedirectUrl("http://flakor.com/redirect");

var server = http.createServer(function(req,res){

    jos.handleAuth(req,res);
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
