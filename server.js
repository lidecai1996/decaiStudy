//引入express框架
const express = require('express');
// cookieParser用来读取cookie的
const cookieParser = require('cookie-parser');
let server = express();
// cookie
server.use(cookieParser());
server.use('/', function (req, res) {
   console.log(req.cookies);
    res.send('11112222');
});

// 端口
server.listen(1996);