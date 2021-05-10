<template>
<div id="tabbaritem" @click="itemClick">
  <div v-if="!isactive"><slot name="img"></slot></div>
  <div v-else><slot name="img-active"></slot></div>
  <div :class="{activefont:isactive}"><slot name="des"></slot></div>
</div>
</template>

<script>
export default {
   props:{
      path:String
    },
  data(){
  return{
    // isactive:false
  }
},
methods:{
  itemClick(){
    this.$router.push(this.path)
     this.isactive = !this.isactive
  }
},
computed:{
  isactive(){
    // $route是当前活跃的路由
    // 等于-1表示字符串里有这个字符
    return this.$route.path.indexOf(this.path) !== -1
  }
}
}
</script>

<style>
#tabbaritem{
  flex:1;
  font-size: 14px;
}
#tabbaritem img{
  width: 23px;
  margin-top:3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.activefont{
  color:var(--color-high-text)
}
</style>