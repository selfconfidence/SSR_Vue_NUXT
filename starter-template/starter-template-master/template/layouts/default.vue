<template>

  <div>
    <header>

 <div class="wrapper"> 
    <!--头部导航--> 
    <header> 
	
     <div class="sui-navbar"> 
      <div class="navbar-inner"> 
       <a href="index-logined.html" class="sui-brand"><img src="~/assets/img/asset-logo-black.png" alt="社交" /></a> 
       <ul class="sui-nav"> 
         <!--
             使用router-link 进行路由到指定页面
             1,如果在ssr架构中使用这种导航,就会有页面样式懒加载的感觉,所以必须使用路由方式
             2,使用router-link 会显示当前点击的特效

         -->
        <nuxt-link   active-class="active" to="/" tag="li" exact><a>首页</a></nuxt-link>
        <nuxt-link active-class="active" to="/qa" tag="li" exact><a>问答</a></nuxt-link>
        <nuxt-link active-class="active" to="/gathering" tag="li" exact><a>活动</a></nuxt-link>
        <nuxt-link active-class="active" to="/friend" tag="li" exact><a>交友</a></nuxt-link>
        <nuxt-link active-class="active" to="/spit" tag="li" exact><a>吐槽</a></nuxt-link>
        <nuxt-link active-class="active" to="/recruit" tag="li" exact><a>招聘</a></nuxt-link>
        
       </ul> 
       <form class="sui-form sui-form pull-left"> 
        <input type="text" placeholder="输入关键词..." /> 
        <span class="btn-search fa fa-search"></span> 
       </form> 
       <div class="sui-nav pull-right info"> 
        <li><a href="~/assets/other-notice.html" target="_blank" class="notice">小强</a></li> 
        <li><a href="~/assets/person-homepage.html" target="_blank" class="homego"><img src="~/assets/img/widget-photo.png" alt="用户头像" /></a></li> 
       </div> 
      </div> 
     </div> 
	
    </header> 
   </div> 

    </header>

    <nuxt/>  <!--<nuxt /> 这个标签是用来装载 pages下面自定义文件的-->

    <footer>
 <div class="footer"> 
   <div class="wrapper"> 
    <div class="footer-bottom"> 
     <div class="link"> 
      <dl> 
       <dt>
        网站相关
       </dt> 
       <dd>
        关于我们
       </dd> 
       <dd>
        服务条款
       </dd> 
       <dd>
        帮助中心
       </dd> 
       <dd>
        编辑器语法
       </dd> 
      </dl> 
      <dl> 
       <dt>
        常用链接
       </dt> 
       <dd>
        传智播客
       </dd> 
       <dd>
        传智论坛
       </dd> 
      </dl> 
      <dl> 
       <dt>
        联系我们
       </dt> 
       <dd>
        联系我们
       </dd> 
       <dd>
        加入我们
       </dd> 
       <dd>
        建议反馈
       </dd> 
      </dl> 
      <dl> 
       <dt>
        关注我们
       </dt> 
       <dd>
        微博
       </dd> 
       <dd>
        twitter
       </dd> 
      </dl> 
      <div class="xuke"> 
       <h3>内容许可</h3> 
       <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p> 
       <p>本站由 mister_wei 提供更新服务</p> 
      </div> 
     </div> 
     <p class="Copyright">Copyright &copy; 2017 mister_wei 当前版本 0.0.1</p> 
    </div> 
   </div> 
  </div> 

    </footer>
  </div>

</template>

<!--引入样式文件-->
<script>
import "~/assets//plugins/normalize-css/normalize.css"
import "~/assets//plugins/yui/cssgrids-min.css"
import "~/assets//plugins/sui/sui.min.css"
import "~/assets//plugins/sui/sui-append.min.css"
import "~/assets//plugins/font-awesome/css/font-awesome.min.css"
import "~/assets//css/widget-base.css"
import "~/assets//css/widget-head-foot.css"

export default {
  
}
</script>



