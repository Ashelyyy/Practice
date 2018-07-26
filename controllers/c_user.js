const express = require('express');
const db = require('../tools/db_config.js');
const M_user = require('../models/m_user');



// 1.函数处理,导出函数处理模块
// 渲染登陆页面
 exports.renderSignin = (req, res) => {
	res.render('signin.html');
}

// 表单数据处理
exports.handleForm = (req, res) => {

	// 获取表单数据
	const body = req.body;
	// console.log(body);

	// 查询数据库
	M_user.checkForm(body.email, (err, results) => {
		if(err) {
			return res.send({
				code: 500,
				message: err.message
			})
		}

		// 如果邮箱为空或者不存在
		if(!results[0]) {
			return res.send({
				code: 1,
				message: '邮箱不存在'
			})
		}

		// 邮箱存在,验证该邮箱输入的密码是否正确
		if(results[0].password != body.password) {
			return res.send({
				code: 2,
				message: '请输入正确的密码'
			})
		}

		// 验证成功,提示跳转
		res.send({
			code: 200,
			message: '输入正确,跳转到列表页面'
		})
	})
	
}