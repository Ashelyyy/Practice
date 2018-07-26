// 1. 导包
const express = require('express');
const router = require('./router');

// 2.配置包
const app = express();
app.engine('html', require('express-art-template'));


// 统一处理静态页面
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 3.挂载路由
app.use(router);

// 4.绑定端口,开启服务器
app.listen(12345, () => {
	console.log('run it');
})