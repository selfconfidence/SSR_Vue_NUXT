<template>
    
<div>

    <div class="wrapper tag-item"> 
   <div class="fl left-list"> 

    <div class="job-position"> 
     <div class="job-type reco-job"> 
      <div class="head"> 
       <h4 class="title pull-left">推荐职位</h4> 
       <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span> 
       <div class="clearfix"></div> 
      </div> 
      <ul class="yui3-g job-list" style="display:block;"> 
       <li class="yui3-u-1-2 job-item" v-for="(item,index) in recommendList" :key="index"> <p><span class="name"> <nuxt-link tag="a"  :to="'/recruit/item/'+item.id"> {{ item.jobname }} </nuxt-link></span><span class="city"><i class="fa fa-map-marker"></i> {{ item.address }}</span></p> <p class="need"><span class="money">{{ item.salary }}</span>/{{ item.condition }}/{{ item.education }}/{{ item.type }}</p> <p><span class="company">{{ item.eid }} &middot; {{ item.createtime }}</span></p> </li> 
      
      </ul> 
     </div> 
     <div class="job-type latest-job"> 
      <div class="head"> 
       <h4 class="title pull-left">最新职位</h4> 
       <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></span> 
       <div class="clearfix"></div> 
      </div> 
      <ul class="yui3-g job-list" style="display:block;"> 
       <li class="yui3-u-1-2 job-item" v-for="(item,index) in newlist" :key="index"> <p><span class="name">
         <nuxt-link tag="a"  :to="'/recruit/item/'+item.id"> {{ item.jobname }} </nuxt-link></span><span class="city"><i class="fa fa-map-marker"></i> {{ item.address }}</span></p> <p class="need"><span class="money">{{ item.salary }}</span>/{{ item.condition }}/{{ item.education }}/{{ item.type }}</p> <p><span class="company">{{ item.eid }} &middot; {{ item.createtime }}</span></p> </li> 
      
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="hot-company"> 
     <p class="mail">提交收录请发邮件至ccccccc@qq.com</p> 
     <div class="company"> 
      <div class="head"> 
       <h4>热门企业</h4> 
      </div> 
      <ul class="yui3-g company" style="display:block;"> 
       <li class="yui3-u-1-3 company-item" v-for="(item,index) in enterpriseList" :key="index"> <p><img src="~/assets/img/widget-baidu.png" alt="" /></p> <p class="title">{{ item.name }}</p> <p class="position"><a href="~/assets/recruit-company.html" target="_blank">{{ item.jobcount}}</a></p> </li> 
       
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
    
    </div>

</template>

<script>
import "~/assets/css/page-sj-recruit-index.css"
import axios from "axios"
import enterpriseApi from "@/api/enterprise"
import recruitApi from "@/api/recruit"
//因为同时要请求三个,axios提供了一种方式,能够同步请求3次
export default {
     asyncData(){
      return axios.all([enterpriseApi.hotlist(),recruitApi.recommend(),recruitApi.newlist()]).then(
         //使用特有的方式去接受参数
         axios.spread(function(enterpriseList,recommendList,newlist){
         return {
           enterpriseList:enterpriseList.data.data,
           recommendList:recommendList.data.data,
           newlist:newlist.data.data
         }
         })

         
       )
     }
}
</script>
