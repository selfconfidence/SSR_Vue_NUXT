<template>
    
 <div class="wrapper loginsign"> 
   <div class="item signup"> 
    <div class="form"> 
     <h3 class="loginsign-title">注册新账号</h3> 
     <form class="sui-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">名字</label> 
       <div class="controls"> 
        <input type="text" id="inputname" placeholder="真实姓名或常用昵称" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="different"> 
       <div class="radio-content"> 
        <div id="a1" class="phone"> 
         <div class="control-group number"> 
          <input type="text" v-model="pojo.mobile" placeholder="仅支持大陆手机号" class="input-xlarge" /> 
         </div> 
         <div class="control-group code"> 
          <div class="input-append"> 
           <input id="appendedInputButton" type="text" placeholder="短信验证" class="span2 input-large msg-input" /> 
           <button type="button" @click="userSendMes" class="sui-btn msg-btn">获取验证码</button> 
          </div> 
         </div> 
         <div class="control-group"> 
          <label for="inputpassword" class="control-label">密码</label> 
          <div class="controls"> 
           <input type="text" id="inputpassword" placeholder="请输入6-16位密码" class="input-xlarge" /> 
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
      <div class="control-group btn-signup"> 
       <label class="control-label"></label> 
       <div class="controls"> 
        <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label> 
        <button type="button" class="sui-btn btn-danger btn-yes">注 册</button> 
       </div> 
      </div> 
     </form> 
    </div> 
   </div> 
   <div class="item"> 
    <div class="form"> 
     <h3 class="loginsign-title">用户登录</h3> 
     <form class="sui-form login-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">手机号：</label> 
       <div class="controls"> 
        <input type="text" v-model="mobile" id="inputname" placeholder="11位手机号" class="input-xlarge" data-rules="required" /> 
       </div> 
      </div> 
      <div class="control-group"> 
       <label for="inputpassword" class="control-label">密码：</label> 
       <div class="controls"> 
        <input type="text" id="inputpassword" v-model="password" placeholder="输入登录密码" class="input-xlarge" /> 
       </div> 
      </div> 
      <div class="controls"> 
       <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;">记住登录状态</span> </label> 
       <button type="button" @click="login" class="sui-btn btn-danger btn-yes">登 录</button> 
      </div> 
      <!--微信扫码登陆-->
      <div id = "weixin" class="other-methods"> 
         
      </div> 
     </form> 
    </div> 
   </div> 
  </div>   

</template>
<script>
import "~/assets/css/page-sj-person-loginsign.css"
import userApi from "@/api/user"
import { cookiesSet } from "@/utils/auth"
export default {
    data(){
         return{
           pojo:{},
           mobile:'',
           password:''
         }      
    },
    //钩子函数 等页面全加载后在执行该函数
    mounted(){
        //跳转后需要进行获取参数之后在此请求,但是微信官网不支持跨域,所以需要提供一个服务端进行请求,用前端 node编写服务端,用java也可以.
        var obj = new WxLogin({
            id:"weixin",
            appid:"wx3bdb1192c22883f3",
            scope:"snsapi_login",
            redirect_uri:"http://note.java.itcast.cn/weixinlogin"
        })
    },
    methods:{
        userSendMes(){
            if(this.pojo.mobile == null || this.pojo.mobile == '' || this.pojo.mobile == undefined){
                
                return;
            }
       userApi.sendsms(this.pojo.mobile).then(res=>{
           this.$message({
              message:res.data.message,
              type:(res.data.flag?"success":"error")
           })
       })
        },
        login(){
           userApi.login({"mobile":this.mobile,"password":this.password}).then( res =>{
               //获取回调信息
      if(res.data.flag){
            this.$message({
              message:res.data.message,
              type:(res.data.flag?"success":"error")
           })
           cookiesSet(res.data.data.user_token,res.data.data.user_name,res.data.data.user_icon);
               location.href="/"
        }else{
                    this.$message({
              message:res.data.message,
              type:(res.data.flag?"success":"error")
           })
               }
           })
        }
    },
    head:{
        script:[
            {src:'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'}
        ]
    }
}
</script>

