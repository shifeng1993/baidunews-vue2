// 依赖模块引入和定义
var http = require('http');
var express = require('express');
var app = express();
var bodyParser=require("body-parser");
var xss = require('xss');
var jwt = require('jsonwebtoken')
var mysql = require('mysql');

// 设置node服务
app.set('port', 3333);
app.use(express.static(__dirname + '/file'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
http.createServer(app).listen(app.get('port'), function(){
    console.log("服务已经启动，APIhost：http://127.0.0.1:3333/");
});

// 设置mysql数据库
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'PHPlesson'
});
con.connect();
// 处理请求

// 防御xss攻击公共函数
var filter = {
  whiteList: [], // 白名单为空，表示过滤所有标签
};
//设置全局变量
var loginName = "";

var session_token = "";

/******************设置全局函数***********************/

// 权限验证函数
function CheckToken(req, res, next) {
  if (session_token === req.get('Authorization')) {
    next();
  }
}
//登录验证函数
function checkLogin(req, res, next) {
  if (!loginName) {
    res.send('您没有权限访问,请<a href="/login">登录</a>');
  }
  next();

}


/******************支持跨域请求***********************/
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});
/*********************以下是登录授权部分*************************/
app.post('/api/login', function(req, res) {
  var username = xss(req.body.username, filter);
  var password = xss(req.body.password, filter);
  loginName = username;
  var sql = "SELECT * FROM `login` WHERE `username`='" + username + "' and `password`='" + password + "'";
  con.query(sql, function(error, result) {
    if (result.length === 0) {
      res.send("登录失败");
    } else {
      res.send(loginName);
    }
  });
});

app.delete('/api/login', function(req, res) {
  loginName = null;
  session_token = null;
  res.send("退出成功");
});
app.get("/admin", checkLogin); // 登录验证

// 登录成功获取token令牌，token令牌为jwt
//
app.post('/api/token', function(req, res) {
  // 设置jwt令牌
  var token = jwt.sign({
    foo: 'bar'
  }, 'shhhhh');
  session_token = token;

  if (!loginName) {
    res.send("你无权限获取token");
  } else {
    res.send(token);
  }
});




/******************************以下是增加***********************************/

app.post('/api/admins', CheckToken, function(req, res) {
  var title = xss(req.body.data.attributes.title, filter);
  var desc = xss(req.body.data.attributes.desc, filter);
  var img = xss(req.body.data.attributes.img, filter);
  var content = xss(req.body.data.attributes.content, filter);
  var time = xss(req.body.data.attributes.time, filter);
  var type = xss(req.body.data.attributes.type, filter);
  var params = new Array(
    title, desc, img, content, time, type
  );

  var sql = 'INSERT INTO `news` (`title`, `desc`, `img`, `content`, `time`, `type`) VALUES ( ?, ?, ?, ?, ?, ?)';
  con.query(sql, params, function(error, result) {
    if (error) {
      res.json(error);
    } else {
      res.json("新闻添加成功");
    }
  });
});

/******************************以下是查询***********************************/

app.get('/api/admins', function(req, res) {
  var type = xss(req.query.type, filter);
  var sql = "";
  if (!type) {
      sql = 'SELECT * FROM news ORDER BY id DESC';
  } else {
    sql = 'SELECT * FROM news WHERE type = ' + type + '';
  }
  con.query(sql, function(error, result) {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});
app.get('/api/adminnavs', function(req, res) {
  var sql = 'select type from news group by type';
  con.query(sql, function(error, result) {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
  });
});
/******************************以下是修改***********************************/

app.get('/api/admins/:id', function(req, res) {
  id = req.params.id;
  var sql = 'SELECT * FROM news WHERE newsid = ' + id + '';
  serializer.define('admin', {
    id: 'newsid',
  }, function(err) {
    // check for definition errors
  });

  con.query(sql, function(error, result) {
    serializer.serialize('admin', result, function(err, payload) {
      if (err) {
        res.send(error);
      } else {
        res.send(payload);
      }
    });
  });
});


app.patch('/api/admins/:id', CheckToken, function(req, res) {
  var title = xss(req.body.data.attributes.title, filter);
  var desc = xss(req.body.data.attributes.desc, filter);
  var img = xss(req.body.data.attributes.img, filter);
  var content = xss(req.body.data.attributes.content, filter);
  var time = xss(req.body.data.attributes.time, filter);
  var type = xss(req.body.data.attributes.type, filter);
  var newsid = xss(req.body.data.id, filter);
  var params = new Array(
    title, desc, img, content, time, type, newsid
  );
  console.log(params);
  var sql = 'UPDATE `news` SET `title`=?,`desc`=?,`img`=?,`content`=?,`time`=?,`type`=? WHERE newsid = ?';

  con.query(sql, params, function(error, result) {

    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }

  });
});



/******************************以下是删除***********************************/


app.delete('/api/admins/:id', CheckToken, function(req, res) {
  id = req.params.id;
  var delid = new Array();
  delid.push(id);
  console.log(req.body);

  console.log(delid);
  var sql = 'DELETE FROM `news` WHERE newsid IN (' + delid + ')';
  con.query(sql, function(error, result) {

    if (error) {
      res.send(error);
    } else {
      res.json(result);
    }
  });
});
