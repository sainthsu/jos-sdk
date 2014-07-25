/**
 * Created by saint on 7/25/14.
 */

// app.js
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