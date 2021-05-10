<template>
  <swiper class="detailitem">
    <swiper-item v-for="(item,index) in swiperitem" :key="index"> 
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
props:{
  swiperitem:{
    type:Array,
    default:[]
  }
},
components:{
  Swiper,
  SwiperItem
}
}
</script>

<style scoped>
.detailitem{
  height: 270px;
  overflow: hidden;
}
</style>