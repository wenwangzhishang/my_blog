

// var express = require('express');
// var app = express();

post("/",function(req,res){
    console.log(req.body);
});

post('/login', function(req, res){
    res.send('成功');
});
module.exports = post;
