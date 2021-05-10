<template>
  <div>
    <detail>
     <template v-slot:left>
        <img src="~assets/img/common/back.jpg" alt="" @click="back">
      </template>

      <template v-slot:center>
        <div class="detail-navbar">
        <div class="detail-navbar-item" :class="{active:currentindex === index}" v-for="(item,index) in detailTitle" :key=index @click="itemClick(index)">
          <span>{{item}}</span>
        </div>
         </div>
      </template>
    </detail>
  </div>
</template>

<script>
import Detail from 'components/common/navbar/NavBar' 
export default {
props:{
  navindex:
  {
    type:Number
  }
 
},
components:{
  Detail
},
mouted(){

},
data(){
  return {
    detailTitle:['商品','参数','评论','推荐'],
    isactive:false,
    currentindex:0
  }
},
methods:{
 itemClick(index){
   this.currentindex = index,
   this.$emit('changeList',index)
 },
 back(){
   this.$router.go(-1)
 }
}
}
</script>

<style scoped>
.detail-navbar{
  display: flex;
}
.detail-navbar-item{
  flex: 1;
  font-size: 15px;
}

.active span{
  color: var(--color-high-text);
   padding: 5px;
  border-bottom:3px solid var(--color-tint) ;
}
img{
  width: 12px;
  margin-top:14px;
}

</style>
