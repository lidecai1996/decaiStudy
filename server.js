//引入express框架
const express = require('express');
// cookieParser用来读取cookie的
const cookieParser = require('cookie-parser');
// session
const cookieSession = require('cookie-session')
let server = express();


// cookie

server.use(cookieParser());
server.use(cookieSession({
    name:'lidecai',
    keys: ['aaa', 'bbb', 'ccc'],
    maxAge:20*1000
}));
server.use('/', function (req, res) {
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
       req.session['count']++;
    }
    console.log(req.session['count'])
    res.send('11112222');
});

// 端口
server.listen(1996);