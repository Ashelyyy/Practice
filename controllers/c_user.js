const express = require('express');

// 1.函数处理,导出函数处理模块
// 渲染登陆页面
 exports.renderSignin = (req, res) => {
	res.render('signin.html');
}

// 表单数据处理
exports.handleForm = (req, res) => {

	// 获取表单数据
	const body = req.body;
	console.log(body);
}