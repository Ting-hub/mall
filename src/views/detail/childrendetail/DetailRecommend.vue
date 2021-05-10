<template>
<div class="recommend">
  <good-list :goods="recommend"></good-list>
</div>
</template>

<script>
import GoodList from 'components/content/goods/GoodList'
export default {
props:{
  recommend:{
    type:Object,
    default:{}
  }
},
components:{
  GoodList
}
}
</script>

<style scoped>
.recommend{
  
  margin-top: 20px;
  padding-top: 10px;
  border-top:5px solid #f2f5f8;;

}
</style>