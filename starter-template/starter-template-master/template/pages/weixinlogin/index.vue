<template>

   <div></div> 
</template>

<script>
//这是用来中转服务的
import { getUrlParam } from "@/utils/param"
import weixinLogin from "@/api/weixinlogin"
import { cookiesSet } from "@/utils/auth"
export default {
    mounted(){
        //获取唯一标识code值
       let code =  getUrlParam("code");
       let AppID = "wx3bdb1192c22883f3";
       let AppSecret = "db9d6b88821df403e5ff11742e799105";
       weixinLogin.getCode(code).then(res => {
           //获取到access_token
           let access_token = res.data.access_token;
           let openid = res.data.openid;
           //获取到之后在获取微信用户详细信息
         
           weixinLogin.getinfo(access_token,openid).then(res2=>{
               //存入cookies 中
             
           cookiesSet(access_token,res2.data.nickname,res2.data.headimgurl);
           //跳转首页认证
           location.href="/";
           })

       })
    }
}
</script>

