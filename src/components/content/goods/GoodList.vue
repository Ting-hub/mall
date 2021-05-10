<template>
  <div class="goodlistitem">
    <div v-for="(item,index) in goods" :key="index">
      <good-list-item  @imageload="aaa" :goodsitem="item"></good-list-item>
    </div>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  components:{
  GoodListItem
  },
  props:{
     goods:{
      type:Object,
      default(){
       return {}
    }
  }
},
methods:{
   aaa(){
    this.$emit('refreshHeight')
  }
}
}
</script>

<style>
.goodlistitem{
display: flex;
width: 100%;
flex-flow: wrap;
position: relative;

 } 
</style>