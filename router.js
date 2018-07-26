// 1.引包
const express = require('express');
const C_user = require('./controllers/c_user');
// 2.返回router对象,配置路由
const router = express.Router();
// 渲染登录页
router.get('/signin', C_user.renderSignin);

// 表单数据处理
router.post('/handleForm', C_user.handleForm);

// 3.返回路由模块
module.exports = router;