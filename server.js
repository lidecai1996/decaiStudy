//引入express框架
const express = require('express');
// cookieParser用来读取cookie的
const cookieParser = require('cookie-parser');

let server = express();


// cookie
server.use(cookieParser('987987987qweqweqwe'));

server.use('/', function (req, res) {
   req.secret='987987987qweqweqwe';
   res.cookie('user','lidecai',{signed:true});


   console.log("签名的",req.signedCookies);

    console.log("无签名的",req.cookies);
 
    res.send('11112222');
});

// 端口
server.listen(1996);