const express = require('express');
const app = express();

app.listen(1996, '127.0.0.1');

app.use(express.static('./1.txt'));

app.get('./1.txt', (req, res) => {
    res, JSON({
        status:true,
        data:[
            {
                name:'xiaoming',
                age:14,
                id:1
            },
            {
                name:'xiaohong',
                age:15,
                id:2
            }
        ],
        msg:'请求成功'
    });
});