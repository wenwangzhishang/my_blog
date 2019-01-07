
var express = require('express');
var app = express();
 
// 模拟登录注册接口
var UserController = require('./public/controller/login');
app.use('/', UserController);

var port = process.env.PORT || 3000; // 启动的端口号
 
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
