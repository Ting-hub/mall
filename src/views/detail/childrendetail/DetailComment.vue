<template>
  <div class="recommand">
    <div class="re-nav">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="re-info">
        <div class="info-top">
          <img :src="recommandInfoUser.avatar" alt="">
          <span>{{recommandInfoUser.uname}}</span>
        </div>
        <div class="info-desc">
          <span>{{recommandInfo.content}}</span>
        </div>
        <div class="info-b">
          <!-- 因为一般服务器返回的都是时间數，所以我们还需要转化一下 -->
          <span>{{requireTime(recommandInfo.created)}}</span>
          <span>{{recommandInfo.style}}</span>
        </div>
        <div class="info-img">
          <img v-for="(imgsrc,index) in recommandInfo.images" :key="index" :src="imgsrc" alt="">
        </div>
    </div>
  
  </div>
</template>

<script>
import {formatDate} from '@/common/utils.js'
export default {
props:{
  recommandInfoUser:{
    type:Object
  },
   recommandInfo:{
    type:Object
  }
},
 methods:{
    requireTime(time){
      // 要转化成毫秒才行
      const date = new Date(time * 1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped> 
.recommand{
  font-size: 14px;
margin-top: 20px;
border-top:5px solid #f2f5f8;;
padding: 0px 27.6px;
}
.re-nav{
  line-height: 55px;
  display: flex;
  justify-content:space-between;
  border-bottom:3px solid #f2f5f8;;
  margin-bottom: 10px;

}
.info-top img{
  width: 45px;
  border-radius: 50%;
}
.info-top{
  font-size: 16px;
   line-height: 45px;
   display: flex;
}
.info-top span{
  margin-left: 5px;
}
.info-desc{
  margin: 7px 0px;
}
.info-b{
  color:#999;
  font-size: 13px;
}
.info-b span{
  margin-right: 5px;
}

.info-img img{
  width: 60px;
  height: 60px;
}
</style>