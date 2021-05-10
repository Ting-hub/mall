<template>
  <div class="tabcontrol">
    <div class="tab-item" @click="indexclick(index)" v-for="(item,index) in titles" :key="index" :class="{active:index===currentindex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
props:{
  titles:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{
    currentindex:0
  }
},
methods:{
indexclick(index){
  this.currentindex = index
  // 子向父发送东西
  this.$emit('tabClick',index)
}
}
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  position: sticky;
  top: 44px;
  z-index: 9;
}
.tab-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: var(--color-high-text);
  
}
.active span{
  padding: 5px;
  /* border-bottom:3px pink solid; */
  border-bottom:3px solid var(--color-tint) ;
}

</style>