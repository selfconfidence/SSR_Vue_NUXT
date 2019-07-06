<template>
  <!--中间布局--> 
  <div class="wrapper activities"> 
   <div class="activity-card-list"> 
    <div class="top-title"> 
     <h4 class="latest">最新活动</h4>      
     <div class="clearfix"></div> 
    </div> 
    <div class="activity-list" v-infinite-scroll="loadMore">  
     <ul class="activity"> 

      <li class="activity-item" v-for="(item,index) in items" :key="index"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <nuxt-link :to="'/gathering/item/'+item.id"><a target="_blank"><img :src="item.image" alt="暂无" /></a></nuxt-link>
        </div> 
        <div class="text"> 
         <p class="title">{{ item.name }}</p> 
         <div class="fl goin"> 
          <p>时间：{{ item.starttime }}</p> 
          <p>城市：{{ item.city }}</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">立即报名</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
     
     </ul> 
    </div> 
   </div> 
  </div> 
</template>

<script>
//架构组成服务端渲染
import gatheringApi from "@/api/gathering"
import "~/assets/css/page-sj-activity-index.css"
export default {
    //asyncData是用于异步加载数据的方法
    data(){
      return{
         pageNo:1
      }
      
    },
    asyncData(){
        return gatheringApi.gatheringSearchList(1,12,{state:'1'}).then(
          res =>{
            return {items:res.data.data.rows}
          }
        )
    },
    methods: {
      loadMore(){ //指定一个默认加载同步数据瀑布流插件
        this.pageNo++
        gatheringApi.gatheringSearchList(this.pageNo,12,{state:'1'}).then( res => {
         this.items =  this.items.concat( res.data.data.rows )
        })
         
        
      }
    }
}
</script>
