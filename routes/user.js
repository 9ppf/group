//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//1.登陆接口 post
router.post("/login",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	console.log($upwd);
	if(!$uname){
		res.send("1");
		return;
	}
	if(!$upwd){
		res.send("2");
		return;
	}
	var sql="select * from t_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("登陆成功");
		}else{
			res.send("用户名或密码错误");
		}
	});
});
//用户注册
router.post('/reg',function(req,res){
	//获取数据
	//console.log(req.body);
	//验证数据是否为空
	if(!req.body.uname){
	  res.send({code:401,msg:'uname required'});
	  //阻止往后执行
	  return;
	}
	if(!req.body.upwd){
	  res.send({code:402,msg:'upwd required'});
	  return;
	}
	if(!req.body.email){
	  res.send({code:403,msg:'email required'});
	  return;
	}
	if(!req.body.phone){
	  res.send({code:404,msg:'phone required'});
	  return;
	}
	//把数据插入到数据库 
	//执行SQL语句
	pool.query('INSERT INTO user SET ?',[req.body],function(err,result){
	  if(err) throw err;
	  if(result.affectedRows>0){
		res.send({code:200,msg:'register suc'});
	  }
	});
  });

//导出路由器
module.exports=router;