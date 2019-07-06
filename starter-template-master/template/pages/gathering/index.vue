<template>
<div>
    <div v-for="(item,index) in items" :key="index">{{item.name}}</div>
</div>
</template>

<script>
//架构组成服务端渲染
import axios from 'axios'
export default {
    //初始化方法
    asyncData(){
       return axios.get("http://192.168.238.166:7300/mock/5c768cf6df7e1f0ee717ace4/excavate/gathering").then(
            res =>{
                return {items:res.data.data};
            }
           
       )
    }
}
</script>
