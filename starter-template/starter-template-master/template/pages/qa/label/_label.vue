<template>
    <div>
<div class="wrapper qa-content"> 
   <div class="fl left-list" > 
    <div class="tab-content"> 
     <div id="index" class="tab-pane active"> 
      <div class="tab-bottom-line"> 
       <ul class="sui-nav nav-tabs"> 
        <li :class=" type === 'new' ?'active':'' "><a @click="type = 'new'">最新回答</a></li> 
        <li :class=" type === 'hot' ?'active':'' "><a @click="type = 'hot'">热门回答</a></li> 
        <li :class=" type === 'wait' ?'active':'' "><a @click="type = 'wait'">等待回答</a></li> 
       </ul> 
       <div class="qa-list"> 
        <div class="tab-content"> 
         <div id="new" :class="type === 'new' ? 'tab-pane active':'tab-pane'"> 
          <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in newlist" :key="index"> 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{ item.thumbup }}</p> 
               <p>有用</p> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{ item.reply }}</p> 
               <p>回答</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{ item.replyname }}</span>{{ item.replytime }}<span></span>回答</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{ item.title }}</a></p> 
             </div> 
             <div class="other"> 
              <ul class="fl sui-tag"> 
               <li>Php</li> 
               <li>Javascript</li> 
              </ul> 
              <div class="fr brower"> 
               <p>浏览量 {{ item.solve }} | {{ item.createtime }} 来自 <a href="#">{{ item.nickname }} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li> 
        
          </ul> 
         </div> 
         <div id="hot" :class="type === 'hot' ? 'tab-pane active':'tab-pane'"> 
               <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in hotlist" :key="index"> 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{ item.thumbup }}</p> 
               <p>有用</p> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{ item.reply }}</p> 
               <p>回答</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{ item.replyname }}</span>{{ item.replytime }}<span></span>回答</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{ item.title }}</a></p> 
             </div> 
             <div class="other"> 
              <ul class="fl sui-tag"> 
               <li>Php</li> 
               <li>Javascript</li> 
              </ul> 
              <div class="fr brower"> 
               <p>浏览量 {{ item.solve }} | {{ item.createtime }} 来自 <a href="#">{{ item.nickname }} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li> 
        
          </ul> 
         </div> 
         <div id="wait" :class="type === 'wait' ? 'tab-pane active':'tab-pane'"> 
                 <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in waitlist" :key="index"> 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{ item.thumbup }}</p> 
               <p>有用</p> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{ item.reply }}</p> 
               <p>回答</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{ item.replyname }}</span>{{ item.replytime }}<span></span>回答</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{ item.title }}</a></p> 
             </div> 
             <div class="other"> 
              <ul class="fl sui-tag"> 
               <li>Php</li> 
               <li>Javascript</li> 
              </ul> 
              <div class="fr brower"> 
               <p>浏览量 {{ item.solve }} | {{ item.createtime }} 来自 <a href="#">{{ item.nickname }} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li> 
        
          </ul> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 
     <div id="php" class="tab-pane">
       php 
     </div> 
     <div id="js" class="tab-pane">
       Javascript 
     </div> 
     <div id="python" class="tab-pane">
       python 
     </div> 
     <div id="java" class="tab-pane">
       java 
     </div> 
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="block-btn"> 
     <p>今天，有什么好东西要和大家分享么?</p> 
     <a class="sui-btn btn-block btn-share" href="./qa-submit.html" target="_blank">发布问题</a> 
    </div> 
    <div class="hot-tags"> 
     <div class="head"> 
      <h3 class="title">热门标签</h3> 
     </div> 
     <div class="tags"> 
      <ul class="sui-tag"> 
       <li>Php</li> 
       <li>Javascript</li> 
       <li>Gif</li> 
       <li>Java</li> 
       <li>C#</li> 
       <li>iOS</li> 
       <li>C++</li> 
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
    </div>
</template>

<script>
import "~/assets/css/page-sj-qa-logined.css"
import problemApi from '@/api/problem'
import axios from 'axios'
export default {
    asyncData(parms){
    return  axios.all([problemApi.findQaList('newlist',parms.id,1,10),problemApi.findQaList('hotlist',parms.id,1,10),problemApi.findQaList('waitlist',parms.id,1,10)])
      .then( axios.spread(function(newlist,hotlist,waitlist){
           return{
            newlist:newlist.data.data.rows,
            hotlist:hotlist.data.data.rows,
            waitlist:waitlist.data.data.rows,

           }
      }) )
      
    },
    data(){
      return {
        type :'new'
      }
    }
}
</script>

