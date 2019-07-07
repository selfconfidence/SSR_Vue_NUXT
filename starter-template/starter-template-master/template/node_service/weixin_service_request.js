//这是使用node服务对跨域服务执行微信地址的整合

var http = require("http");
var https = require("https");
var url = require("url")

http.createServer(function(request,response){
    //获取到参数
    let params =  url.parse(request.url,true).query;
    let AppID = "wx3bdb1192c22883f3";
    let AppSecret = "db9d6b88821df403e5ff11742e799105";
    //为了获取到access_token
    if(params.operation == "token"){
       https.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${AppID}&secret=${AppSecret}&code=${params.code}&grant_type=authorization_code`,function(res){
        res.on("data",function(chunk){
            response.writeHead(200,{'Content-Type':'application/json;charset=utf-8' ,"Access-Control-Allow-Origin":"*" })
            response.end(chunk);
        })
       }) 
    }
    if(params.operation == "userInfo"){
      https.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${params.access_token}&openid=${params.openid}`,function(res){
          res.on("data",function(chunk){
            response.writeHead(200,{'Content-Type':'application/json;charset=utf-8' ,"Access-Control-Allow-Origin":"*" })
            response.end(chunk);
          })
      })
    }


  
}).listen(8888)