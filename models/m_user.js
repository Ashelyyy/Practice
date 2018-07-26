const mysql = require('mysql');
const db = require('../tools/db_config.js');
// 查询数据库

function checkForm(email, callback) {
	const sqlstr = 'SELECT * FROM `users` WHERE `email`=?';
	db.query(sqlstr, email, (err, results) => {
		if(err) {
			return callback(err);
		}

		callback(null, results);
	})
}

// 导出表单处理模块
exports.checkForm = checkForm;
	