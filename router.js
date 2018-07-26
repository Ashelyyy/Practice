// 1.引包
const express = require('express');
const C_user = require('./controllers/c_user');
// 2.返回router对象,配置路由
const router = express.Router();
router.get('/signin', C_user.renderSignin)

// 3.返回路由模块
module.exports = router;