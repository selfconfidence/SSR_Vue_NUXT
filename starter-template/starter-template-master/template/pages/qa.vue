<template>
<div>
<div class="tab-nav "> 
   <div class="wrapper"> 
    <ul class="fl sui-nav nav-tabs navbar-dark"> 
     <nuxt-link tag="li" active-class="active"  to="/qa/label/0" exact><a>首页</a></nuxt-link>
         <nuxt-link v-for="(item,index) in labelList" :key="index" tag="li" active-class="active"  :to="'/qa/label/'+item.id" exact><a> {{ item.labelname }} </a></nuxt-link>


    </ul> 
    <span class="fr more"><a href="~/assets/qa-allTag.html" target="_blank">更多</a></span> 
    <div class="clearfix"></div> 
   </div> 
    
  </div>
   <nuxt-child/>
  </div> 

</template>

<script>
import qaApi from '@/api/label'

export default {
  asyncData(){
   return   qaApi.toplist().then( res =>{
          return {
             
              labelList : res.data.data
          }
      } )
  }

}
</script>
