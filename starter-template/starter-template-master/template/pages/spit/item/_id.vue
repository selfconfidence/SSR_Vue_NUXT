<template>
      <div class="wrapper tc-detail"> 
    <div class="fl left-list"> 
     <div class="tc-detail"> 
      <!-- 标题区 --> 
      <div class="detail-tit"> 
       <div class="detail-author"> 
        <a href="javascript:;">{{ pojo.nickname }}</a> 发布 
       </div> 
       <div class="detail-content"> 
        <p>{{ pojo.content }}</p> 
        <img src="~/assets/img/widget-tc-detail.png" alt="" /> 
       </div> 
       <div class="detail-tool"> 
        <ul> 
         <li><span class="star"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ pojo.thumbup }}</span></li> 
         <li><a href="#" data-toggle="modal" data-target="#shareModal"><i class="fa fa-share-alt" aria-hidden="true"></i> {{ pojo.share }}</a></li> 
         <li><a @click="dialogVisible = true;content=''" data-toggle="modal" data-target="#remarkModal"><i class="fa fa-commenting" aria-hidden="true"></i>{{ pojo.comment }}</a></li> 
        </ul> 
       </div> 
      </div> 
      <!-- 评论区 --> 
      <div class="comment-area"> 
       <div class="comment-tit"> 
        <span>评论</span> 
       </div> 
       <ul class="comment-list"> 
        <li v-for="(item,index) in commentList" :key="index"> 
         <div class="item-photo"> 
          <img src="~/assets/img/widget-widget-photo.png" alt="" /> 
         </div> 
         <div class="item-content"> 
          <p class="author"><a href="javascript:;">{{ item.nickname }}</a> 发布</p> 
          <p class="content">{{ item.content }}</p> 
         </div> 
         <div class="item-thumb"> 
          <div>
           <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{ item.visits }}
          </div> 
         </div> </li> 
       
       </ul> 
      </div> 
     </div> 
    </div> 
    <!--<div class="fl right-tag"> 
     <div class="block-btn"> 
      <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p> 
      <a class="sui-btn btn-block btn-share" href="~/assets/spit-submit.html" target="_blank">发吐槽</a> 
     </div> 
    </div> -->

    <el-dialog
  title="吐槽吧"
  :visible.sync="dialogVisible"
  width="30%">
  

  <div class="quill-editor" 
         :content="content"
         @change="onEditorChange($event)"
         v-quill:myQuillEditor="editorOption">
    </div>



  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">提交</el-button>
  </span>
</el-dialog>
    <div class="clearfix"></div> 
   </div> 
</template>

<script>
import "~/assets/css/page-sj-spit-detail.css"
import spitApi from '@/api/spit'
import axios from 'axios'
export default {
     data(){
         return{
           dialogVisible: false,
               content: '',
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }
        }
         }
     },
    asyncData(parameter){
      return  axios.all([ spitApi.findById(parameter._id) ,spitApi.commentList(parameter._id,1,13) ]).then(
            axios.spread(function(pojo,commentList){
                return{
                   pojo:pojo.data.data,
                   commentList:commentList.data.data.rows
                }
               
            })
        )
    },
    methods:{
       onEditorChange({ editor, html, text }) {
        this.content = html
      },
         save(){
          spitApi.save({content : this.content}).then( res =>{
                   this.$message({
                       message:res.data.message,
                       type:(res.data.flag?'success':'error')
                   })
                   
          });
          this.dialogVisible = false;
          spitApi.commentList(this.pojo._id,1,13).then(res =>{
           
                this.commentList = res.data.data.rows
            
          })
      }
    }
    
}
</script>
<style>
    .quill-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
  
</style>