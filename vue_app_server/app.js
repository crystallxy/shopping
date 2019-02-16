//vue_app_server 服务器
const express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000);
const pool = require("./pool");

//express mysql 参数 request;response
//跨域访问配置
//1:加载模块cors
const cors = require("cors");
//2:配置cors
app.use(cors({
  origin:["http://127.0.0.1:3001",
         "http://localhost:3001"],//允许列表
  credentials:true   //是否验证
}));
//3:加载第三方模块: express-session
const session = require("express-session");
//4:对模块配置
app.use(session({
  secret:"128位随机字符串",   //安全令牌
  resave:false,              //请求保存
  saveUninitialized:true,    //初始化
  cookie:{                   //sessionid保存时
    maxAge:1000*60*60*24     //间1天 cookie
  }
}));
//功能十一:用户登录
app.get("/login",(req,res)=>{
  //1:获取登录参数
  var name = req.query.name;
  var pwd = req.query.pwd;
  //2:正则
  //3:创建sql
  var sql =" SELECT count(id) as c,id";
     sql +=" FROM xz_login";
     sql +=" WHERE name = ? AND pwd = md5(?)";
  //4:如果参数匹配成功将用户id保存session对象
  pool.query(sql,[name,pwd],(err,result)=>{
       if(err)throw err;
       var c = result[0].c;
       if(c == 1){
        req.session.uid = result[0].id
        res.send({code:1,msg:"登录成功"});
       }else{
         res.send({code:-1,msg:"用户名或密码有误"})
       }
  });
  //5:返回结果
  //  {code:1,msg:"登录成功"}
  //  {code:-1,msg:"用户名或密码错误"}
});





//功能一:首页轮播
app.get("/getImages",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
  ];
  res.send(rows);
})

//功能二:新闻分页显示
app.get("/getNews",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页码格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_news";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       obj.pageCount = pageCount;
       progress += 50;
       if(progress == 100){
        res.send(obj);
       }
  });
  //  查询当前页内容
var sql=" SELECT id,ctime,title,img_url,point";
    sql +=" FROM xz_news";
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
})

//功能三:依据新闻编号查询新闻详细信息
app.get("/getNewsInfo",(req,res)=>{
  //1:参数   id   53
  var id = req.query.id;
  //2:sql    SELECT id,title,ctime,content FROM 
  //         xz_news WHERE id = ?
  var sql=" SELECT id,title,ctime,content";
      sql+=" FROM xz_news WHERE id = ?";
  //3:json   {code:1,data:obj}
  pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result[0]});
  })
})

//功能四:发表评论
app.get("/addComment",(req,res)=>{
  //1:参数 nid content
  var nid = req.query.nid;
  var content = req.query.content;
  //console.log("1:"+nid+"|"+content);
  //2:sql  INSERT INTO
  var sql = "INSERT INTO xz_comment(id,content,ctime,nid)VALUES(null,?,now(),?)";
  pool.query(sql,[content,nid],(err,result)=>{
      if(err)throw err;  
      //console.log(2);
      //console.log(result);
      //影响行数
      if(result.affectedRows > 0){
       res.send({code:1,msg:"评论发送成功"});      
      }else{
        res.send({code:-1,msg:"评论发送失败"});    
      }
  }) 
  //3:json {code:1,msg:""}
})



//功能五:依据新闻编号(id),查询指定新闻编号评论列表
app.get("/getComments",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  var nid = parseInt(req.query.nid);
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页码格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_comment";
  sql +=" WHERE nid = ?"
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,[nid],(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       obj.pageCount = pageCount;
       progress += 50;
       if(progress == 100){
        res.send(obj);
       }
  });
  //  查询当前页内容
var sql=" SELECT id,ctime,content";
    sql +=" FROM xz_comment";
    sql +=" WHERE nid = ?";
    sql +=" ORDER BY id DESC";//按编号降序排列
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
});


//#功能六:商品列表
app.get("/getGoodsList",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 4;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页码格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_product";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       obj.pageCount = pageCount;
       progress += 50;
       if(progress == 100){
        res.send(obj);
       }
  });
  //  查询当前页内容
var sql=" SELECT id,name,img_url,price,bank";
    sql +=" FROM xz_product";
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
});

//功能七:将商品信息添加至购物车
app.get("/addCart",(req,res)=>{
  //1:参数 uid pid price count
  var uid   = parseInt(req.query.uid);
  var pid   = parseInt(req.query.pid);
  var price = parseFloat(req.query.price);
  var count = parseInt(req.query.count);
  //2:sql  INSERT
  var sql=" INSERT INTO `xz_cart`(`id`, ";
      sql+=" `uid`, `pid`, `price`,";
      sql+=" `count`) VALUES (null,?,?,?,?)";
  pool.query(sql,[uid,pid,price,count],(err,result)=>{
      if(err)throw err;
      if(result.affectedRows > 0){
        res.send({code:1,msg:"添加成功"});
      }else{
        res.send({code:-1,msg:"添加失败"});
      }
  })
  //3:json {code:1,msg:"添加成功"}
});

//功能八:查询商品详细信息
app.get("/getProduct",(req,res)=>{
   //1:参数 商品id
   var pid = parseInt(req.query.id);
   //2:sql  SELECT id,name,price,
   var sql =" SELECT `id`, `name`, `img_url`";
   sql+=" , `price`,`detail`, `bank` FROM `xz_product`"; sql+=" WHERE id = ?";
   pool.query(sql,[pid],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result[0]})
   });
   //3:json {code:1,data:{}}
});

//功能九:用户注册
app.get("/register",(req,res)=>{
   //1:参数 name,pwd
   var name = req.query.name;
   var pwd = req.query.pwd;
   //1.1:验证
   var reg = /^[a-z0-9_]{8,12}$/;
   if(!reg.test(name)){
     res.send({code:-1,msg:"用户名格式不正确"});
     return;
   }
   var sql = "INSERT INTO xz_login VALUES(null";
      sql +=",?,md5(?))";
   pool.query(sql,[name,pwd],(err,result)=>{
          if(err)throw err;
          if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
          }else{
            res.send({code:-1,msg:"注册失败"});
          }
   })
});

//功能十:用户名是否存在
app.get("/existsName",(req,res)=>{
  //1:参数
  var name = req.query.name;
  //2:sql
  var sql = " SELECT count(id) as c FROM xz_login";
      sql+=" WHERE name = ?";
  pool.query(sql,[name],(err,result)=>{
       if(err)throw err;
       //result node.js 数组
       //[{c:0}]
       ///result[0].c
       if(result[0].c > 0){
         res.send({code:-1,msg:"该用户名己存在"})
       }else{
         res.send({code:1,msg:"欢迎使用"});
       }
  })    
  //3:json
});

//功能十一：用户登录
app.get("/login",(req,res)=>{
  // 1:获取登录的参数
  var name=req.query.name;
  var pwd=req.query.pwd;
    //1.1:正则
  // 2:创建sql
  var sql = " SELECT count(id) as c,id FROM xz_login";
  sql+=" WHERE name = ? AND pwd=md5(?)"; 
  // 3:如果参数匹配成功将用户id保存session对象
  // 4:返回结果
  pool.query(sql,[name,pwd],(err,result)=>{
    if(err) throw err;
    var c=result[0].c;
    if(c==1){
      req.session.uid=result[0].id;
      res.send({code:1,msg:"登录成功"})
    }else{
      res.send({code:-1,msg:"用户名或密码错误"})
    }
  })
  //   {code:1,msg:"登录成功"}
  //   {code:-1,msg:"用户名或密码错误"}
})

//功能十二:查询购物车中数据
app.get("/getCartList",(req,res)=>{
  //1:参数
  var uid = req.session.uid;
  console.log("|"+uid+"|");
  //2:sql
  var sql =" SELECT p.name,c.count,c.price";
      sql +=" ,c.id";
      sql +=" FROM xz_product p,xz_cart c";
      sql +=" WHERE p.id = c.pid";
      sql +=" AND c.uid = ?";
  console.log(sql);    
  pool.query(sql,[uid],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result});
  }) 
})
//功能十三:同步购物中商品数量
app.get("/updateCart",(req,res)=>{
  //1:参数 id count
  var id = parseInt(req.query.id);
  var count = parseInt(req.query.count);
  //2:sql UPDATE
  var sql = " UPDATE xz_cart SET count = ?";
     sql += " WHERE id = ?";
  pool.query(sql,[count,id],(err,result)=>{
    if(err)throw err; //17:30 sub add
    if(result.affectedRows > 0){
      res.send({code:1,msg:"更新成功"});
    }else{
      res.send({code:-1,msg:"更新失败"});
    }
  })
  //3:json {code:1,msg:""}
})
//功能十四:商品详情页轮播
app.get("/MIX3Images",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/MIX3.1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/MIX3.2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/MIX3.3.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/MIX3.4.png"},
  ];
  res.send(rows);
})