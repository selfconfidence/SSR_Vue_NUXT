<template>
    <div>
        <!--两列布局--> 
  <div class="wrapper tag-item"> 
   <div class="job-intro"> 
    <div class="left-img"> 
     <img :src="enterprise_item.logo" alt="" /> 
    </div> 
    <div class="middle-intro"> 
     <div class="name">
      {{ recruit_item.jobname }} &middot; {{ enterprise_item.name }}
     </div> 
     <div class="intro">
     {{ recruit_item.condition }}/{{ recruit_item.education }}/{{ recruit_item.type }}
     </div> 
     <div class="tag"> 
      <li v-for="(item,index) in enterprise_item.labels.split(',')" :key="index">{{  item }}</li>
      
     </div> 
    </div> 
    <div class="right-tool"> 
     <p class="throw"><button class="sui-btn btn-throw">投简历</button></p> 
     <button class="sui-btn btn-collect">收藏</button> 
     <span>100收藏</span> 
     <span>291浏览</span> 
    </div> 
    <div style="clear:both"></div> 
   </div> 
   <div class="fl left-list "> 
    <div class="tit"> 
     <span>职位描述</span> 
    </div> 
    <div class="content"> 
     <p>我们提供：</p> 
     <p>{{ recruit_item.content1  }}</p> 
    
    </div> 
    <div class="tit"> 
     <span>职位要求</span> 
    </div> 
    <div class="content"> 
     
     <p> {{ recruit_item.content2  }}</p> 
    </div> 
    <div class="time">
     发布与:{{  recruit_item.createtime  }}
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="company-job"> 
     <div class="intro"> 
     <img :src="enterprise_item.logo" alt="" /> 
      <div class="title">
      {{ enterprise_item.name }}
      </div> 
      <div class="content">
     {{ enterprise_item.summary }}
      </div> 
     </div> 
     <div class="tag"> 
           <li v-for="(item,index) in enterprise_item.labels.split(',')" :key="index">{{  item }}</li>

     </div> 
     <div class="btns"> 
      <a class="sui-btn btn-home" :href="enterprise_item.url" target="_blank">企业主页</a> 
      <a class="sui-btn btn-position" href="~/assets/recruit-job.html" target="_blank">{{ enterprise_item.jobcount }}个职位</a> 
     </div> 
    </div> 
   </div> 
  </div> 
    </div>
</template>

<script>
import "~/assets/css/page-sj-recruit-detail.css"
import enterpriseApi from "@/api/enterprise"
import recruitApi from "@/api/recruit"

export default {
     //params 就是路由过来的数据
    asyncData({params}){
        //需要回调地狱两次回调嵌套查询
       return recruitApi.findById(params.id).then(
           res =>{
             return enterpriseApi.findById(res.data.data.eid).then(
                res2 =>{
                  

            return  {
                
                enterprise_item:res2.data.data,
                recruit_item:res.data.data

            }
                 }
             )
        })
    }
}
</script>
