
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 


// 设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.post('/login',function(req,res){
  // console.log(req.query);
  // if (req.body.age == 'undefined' || req.body.age == undefined){
  //     res.status(200);
  //     res.json('参数错误');
  //     return;
  // }

  if (err) throw err;
  var dbo = db.db("runoob");
  var myobj = { name: "菜鸟教程", url: "www.runoob" };
  dbo.collection("site").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("文档插入成功");
      db.close();
  });
  console.log(req.body);
  var response = {
        name:'1',
        age:'2'
      };
  console.log(response);
  // res.status(200);
  res.json(response);
  // res.end(JSON.stringify(response));
});




var server = app.listen(3000, function () {

var host = server.address().address;

  var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})



/**
 * @params test
 *  */ 
// var express = require('express');
// var url = require("url");
// var app = express();

// app.get('/',function(req,res){
//   res.send('hello, world');
//   // res.json('ok');
// });
// app.post('/', function(){
//   res.send('post');
// })
// app.get('/login', function(req, res){
  
//   var urlParse = url.parse(req.url).pathname;
//   // res.send('登录');
//   res.send(urlParse);
// })
// var server = app.listen(8080,function(){
//     // var host = server.address().address;
//     // var port = server.address().port;
//     console.log('监听');
    
// })

// var mongoose = require ('mongoose')
// ;
// var url = 'mongodb://localhost:27017/mongotest';

// mongoose.connect(url);

// mongoose.connection.on('connected', function(){
//     console.log('成功');
// })

// module.exports = mongoose;






