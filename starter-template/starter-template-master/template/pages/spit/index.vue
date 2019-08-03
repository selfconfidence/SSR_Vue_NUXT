<template>
    <div>
   <div class="wrapper tag-item"> 
    <div class="fl left-list"> 
     <div class="tc-data-list"> 
      <div class="tc-list"> 
       <ul class="detail-list"> 
        <li class="qa-item" v-for="(item,index) in items" :key="index"> 
         <div class="fl record"> 
          <div class="number"> 
           <div class="border useful"> 
            <p class="usenum"><a @click="thumbup(index)" class="zan"><i :class="'fa fa-thumbs-up '+item.zan" aria-hidden="true"></i></a></p> 
            <p class="zannum" > {{item.thumbup}} </p> 
           </div> 
           <div class="border answer"> 
            <a href="#" class="star"><i class="fa fa-star-o " aria-hidden="true"></i></a> 
           </div> 
          </div> 
         </div> 
         <div class="info"> 
          <p class="text"> <router-link :to="'/spit/item/'+item._id"> {{item.content}} </router-link> </p> 
          <div class="other"> 
           <div class="fl date"> 
            <span>{{item.publishtime}}</span> 
           </div> 
           <div class="fr remark"> 
            <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i class="fa fa-share-alt" aria-hidden="true"></i> 分享</a> 
            <a href="#" data-toggle="modal" data-target="#remarkModal" class="comment"><i class="fa fa-commenting" aria-hidden="true"></i> 回复</a> 
           </div> 
          </div> 
         </div> 
         <div class="clearfix"></div> </li>  
       </ul> 
      </div> 
     </div> 
    </div> 
    <div class="fl right-tag"> 
     <div class="block-btn"> 
      <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>       
      <router-link class="sui-btn btn-block btn-share" to="/spit/submit">发吐槽</router-link>
     </div> 
    </div> 
    <div class="clearfix"></div> 
   </div>
   </div>
</template>

<script>
import "~/assets/css/page-sj-spit-index.css"
import spitApi from  '@/api/spit';
import {cookiesGet} from '@/utils/auth'
export default {
   data(){
      return {
          pageNo:1
      }
   },
    asyncData(){
        return spitApi.findByPageList(0,10,{}).then(
           res => {
              //为了 点赞样式，需要在数组中新加一个属性  map方法（map方法的作用不难理解，即“映射”，也就是原数组被“映射”成对应新数组）
              let temp = res.data.data.rows.map( item =>{
                 return {
                    //es6 语法  ...   展开运算符 
                    ...item,
                    zan:''
                  
                   
                 }
              } )
             return {items:temp}
           }
        )
    },
    methods:{
   loadMore(){
       this.pageNo ++;
        spitApi.findByPageList(this.pageNo,10,{}).then( res => {
         this.items =  this.items.concat( res.data.data.rows );
        })
},
    //点赞数
    thumbup(index){
       //根据登录信息控制点赞
       if(cookiesGet().user_name === undefined){
           this.$message({
              message:'登录后才能点赞哦~',
              type:'warning'
           })

           return;
       }

       if(this.items[index].zan === 'color'){
           this.$message({
              message:'不可重复点赞哦~',
              type:'warning'
           })
           return;
       }
        spitApi.thumbup(this.items[index]._id).then(res =>{
          if(res.data.flag){
             this.items[index].thumbup++;
              this.items[index].zan = 'color';
          }
        })

    }
    }
}
</script>
