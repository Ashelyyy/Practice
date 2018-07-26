const express = require('express');

// 1.函数处理
 exports.renderSignin = (req, res) => {
	res.render('signin.html');
}

// 2.导出函数处理模块