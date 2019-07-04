//引入express框架
const express = require('express');

let server = express();
// cookie

server.use('/', function (req, res) {
    // 设置cookie的键值，和专用目录，还设置了有效期
    res.cookie('user','lidecai',{path:'/aaa',maxAge:10*1000});
    res.send('11112222');
});

// 端口
server.listen(1996);