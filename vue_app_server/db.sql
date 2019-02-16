#xz_news[id/title/ctime/img_url/point/content]
USE xz;
CREATE TABLE xz_news(
   id  INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(255),
   ctime  DATETIME,
   img_url VARCHAR(255),
   point   INT,
   content VARCHAR(2000)
);
INSERT INTO xz_news VALUES(null,'1231',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1232',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1233',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1234',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1235',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1236',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1237',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1238',now(),
'http://127.0.0.1:3000/1.png',0,'1239');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12310');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12311');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12312');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12313');
INSERT INTO xz_news VALUES(null,'12314',now(),
'http://127.0.0.1:3000/1.png',0,'12314');
INSERT INTO xz_news VALUES(null,'12315',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'12316',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'12317',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12318');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12319');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12320');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12321');
INSERT INTO xz_news VALUES(null,'12322',now(),
'http://127.0.0.1:3000/1.png',0,'123');




#创建表 xz_comment 评论表
CREATE TABLE xz_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(2000),
  ctime DATETIME,
  nid   INT
);
INSERT INTO xz_comment VALUES(null,'1',now(),1);
INSERT INTO xz_comment VALUES(null,'2',now(),1);
INSERT INTO xz_comment VALUES(null,'3',now(),1);
INSERT INTO xz_comment VALUES(null,'4',now(),1);
INSERT INTO xz_comment VALUES(null,'5',now(),1);
INSERT INTO xz_comment VALUES(null,'6',now(),1);
INSERT INTO xz_comment VALUES(null,'7',now(),1);
INSERT INTO xz_comment VALUES(null,'8',now(),1);
INSERT INTO xz_comment VALUES(null,'9',now(),1);
INSERT INTO xz_comment VALUES(null,'10',now(),1);
INSERT INTO xz_comment VALUES(null,'11',now(),1);
INSERT INTO xz_comment VALUES(null,'12',now(),1);
INSERT INTO xz_comment VALUES(null,'13',now(),1);
INSERT INTO xz_comment VALUES(null,'14',now(),1);
INSERT INTO xz_comment VALUES(null,'15',now(),1);
INSERT INTO xz_comment VALUES(null,'16',now(),1);
INSERT INTO xz_comment VALUES(null,'17',now(),1);
INSERT INTO xz_comment VALUES(null,'18',now(),1);
INSERT INTO xz_comment VALUES(null,'19',now(),1);
INSERT INTO xz_comment VALUES(null,'20',now(),1);
INSERT INTO xz_comment VALUES(null,'21',now(),1);
INSERT INTO xz_comment VALUES(null,'22',now(),1);


#创建商品表
#xz_product
#id       INT
#name     VARCHAR(255)
#img_url  VARCHAR(255)
#price    DECIMAL(10,2) 
#bank     INT

CREATE TABLE xz_product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  img_url VARCHAR(255),
  price DECIMAL(10,2),
  detail VARCHAR(255),
  bank  INT
);
INSERT INTO xz_product VALUES
(1, '小米MIX3', 'http://127.0.0.1:3000/img/MIX3.1.png', '4999.00','磁动力滑盖全面屏 / 前后旗舰 AI 双摄 / 四曲面彩色陶瓷机身 / 高效 10W 无线充电', 150),
(2, '小米8青春版', 'http://127.0.0.1:3000/img/小米8青春版.1.png', '1299.00','「4GB+64GB 深空灰 1299元」「6GB+64GB 全色系1499元」潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器', 100),
(3, '小米6X', 'http://127.0.0.1:3000/img/小米6X.1.png', '1399.00','「6GB+64GB，赤焰红、樱花粉限时1299元」「6GB+128GB，1499元」轻薄美观的拍照手机 / 前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器' ,120),
(4, '黑鲨游戏手机Helo', 'http://127.0.0.1:3000/img/黑鲨.1.png', '3199.00','「限时优惠中，全系最高立省300元，2999元起」「全系加赠弹性保护壳」双液冷 / 独显+AMOLED全面屏 / Gamer Studio / X+1天线 / 骁龙845 / 正面双扬声器 / 标配二代手柄 / 一键Shark模式 / AI灯效', 58),
(5, '小米MIX2s', 'http://127.0.0.1:3000/img/小米MIX2s.1.png', '2699.00','「6GB+128GB，立省900元」「8GB+256GB，黑色／白色立省600元，翡翠色立省400元」陶瓷机身 手机中的艺术品 / 搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 高效 Qi 无线充电', 60);




#购物车:
#xz_cart
#id     编号
#count  数量
#price  价格
#name   商品名称
#pid    商品编号
#uid    用户编号

#SELECT id,count,price,name,pid,uid
#FROM  xz_cart
#WHERE  uid = ?
# pno2-029282823-
CREATE TABLE xz_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  pid INT,
  price DECIMAL(10,2),
  count INT
);
INSERT INTO xz_cart VALUES(null,1,1,10,1);
INSERT INTO xz_cart VALUES(null,1,2,12,2);

#分析:查询购物信息
#[id,uid,price,count],[name]
#xz_cart              xz_product
#多表查询套路
#-将所有表名保存FROM 后
#FROM xz_cart,xz_product
#-为每一张表起一个别名
#FROM xz_cart c,xz_product p
#-查找两张表1个列有关系(= != <= >= )
#WHERE  c.pid = p.id 

SELECT c.uid,c.id,c.count,c.price,p.name
FROM xz_cart c,xz_product p
WHERE  c.pid = p.id 

#用户注册
# 用户登录:id name pwd 
# 用户信息:avatar phone addr ..
# 创建xz_cart xz_login    
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25)
  pwd  VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
INSERT INTO xz_login VALUES(null,'jerry',md5('123'));