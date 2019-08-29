--  #设置客户端来连接服务器端的编码
 SET NAMES UTF8;
--  #丢弃数据库
DROP DATABASE IF EXISTS travel;
-- # 创建数据库,设置存储的编码未UTF8
CREATE DATABASE travel CHARSET=UTF8;
-- 进入数据库
USE travel;
-- 创建保存用户数据的表
CREATE TABLE t_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(11),
    upwd VARCHAR(32)
);
-- #插入数据
INSERT INTO t_user VALUES("1","13839494671","12345678");
INSERT INTO t_user VALUES('null','13403896464',"12345689");


