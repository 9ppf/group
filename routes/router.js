const express=require('express');
//引入自定义模块user.js
const userRouter=require('./user.js');
const productRouter=require('./product.js');
//使用express创建web服务器
var server=express();
server.listen(8080);

//把用户路由器模块挂载到/user下,访问形式/user/list
//第1个参数：要挂载的URL
//第2个参数：要挂载的路由器
server.use('/user',userRouter);
//把商品路由器挂载到/product下
server.use('/product',productRouter);