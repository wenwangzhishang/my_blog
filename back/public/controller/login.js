var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
mongoose.connect('mongodb://localhost:27017/vueblog');
// 连接的是我本地数据库中的Table库
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
 
// 每一个Schema对应MongoDB中的一个集合（collection）。Schema中定义了集合中文档（document）的格式。
var UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    // status: String
});
const Users = mongoose.model('login', UserSchema);
// 用户访问的是vueblogs库中的login集合
// 用户注册，向数据库中添加用户数据
router.post('/register', function (req, res) {
    const newUser = new Users({ // 用户传参
        name : req.body.name,
        password : req.body.password,
        // status: req.body.status
    });
    const name = req.body.name;
    Users.find({name: name},(err, docs) => {
        if(docs.length > 0) {
            res.send({isSuccess: false, message: '用户名已存在'})
        } else { // 向logins集合中保存数据
            newUser.save(err => {
                const datas =  err ? {isSuccess: false} : {isSuccess: true, message: '注册成功'}
                res.send(datas);
            });
        }
    })
});

// 用户登录,查询数据库，判断用户名和密码是否匹配
router.post('/login', function (req, res) {
    const name = req.body.name;
    const password = req.body.password;
    Users.find({name: name}, function (err, users) {
        console.log(users);
        if(users.length === 0) {
            res.send({isSuccess: false, message: '该用户不存在'});
        } else if (users[0].password === password) {
            res.send({isSuccess: true, message: '登录成功'});
        } else if (users[0].password !== password) {
            res.send({isSuccess: false, message: '密码不正确，请重新输入'});
        }
    });
});
 
// 修改密码
router.post('/change', function (req, res) {
    const name = req.body.name;
    const OldPass = req.body.OldPass;
    const NewPass = req.body.NewPass;
    Users.find({name: name}, function (err, user) {
        if(user.length === 0) {
            res.send({isSuccess: false, message: '该用户名不存在'});
        } else {
            const data = user[0];
            if(data.password === OldPass) {
                data.password = NewPass;
                data.save(err => {
                    const datas =  err ? {isSuccess: false, message: '密码修改失败'} : {isSuccess: true, message: '密码修改成功'}
                    res.send(datas);
                });
            } else {
                res.send({isSuccess: false, message: '您输入的密码不正确'});
            }
 
        }
    });
});
module.exports = router;
