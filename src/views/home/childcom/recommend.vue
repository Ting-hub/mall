<template>
  <div class="home-recommend">
    <div class="reitem" v-for="item in recommend" :key="item.title">
        <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
      </a>
     
     
    </div>
   
  </div>
</template>

<script>
export default {
props:{
  recommend:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.home-recommend{
  display: flex;
  text-align: center;
  font-size:14px ;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.reitem{
flex:1;
}
.reitem img{
width: 75px;
margin-bottom: 5px;
}
</style>