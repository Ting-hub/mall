<template>
 <Swiper>
   <SwiperItem v-for="item in banners" :key="item.title">
   <a :href='item.link'>
     <img :src="item.image" alt="">
   </a>
   </SwiperItem>
 </Swiper>

</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
components:{
  Swiper,
  SwiperItem
},
props:{
  banners:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>

</style>