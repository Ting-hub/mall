<template>
  <div class="detail-box" v-if="Object.keys(goods).length !==0 ">
    <div class="detail-desc">{{goods.title}}</div>

    <div class="detail-price">
      <span class="detail-newprice">{{goods.newPrice}}</span>
      <span class="detail-oldprice">{{goods.oldPrice}}</span>
      <span class="detail-p-desc">{{goods.discount}}</span>
    </div>
    <div class="detail-serve">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="detail-serve-serve">
      <div v-for="(item,index) in goods.services" :key="index">
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  props:{
   goods:{
	  type: Object,
    default:{}
      }
}
}
</script>

<style scoped>
.detail-box{
  /* height: 200px; */
  /* background-color: pink; */
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
   border-bottom: 4px solid rgba(100,100,100,.1);
  
}
.detail-desc{
  font-size: 16px;
  color: black;
  margin: 10px 5px 10px 5px;
}
.detail-price{
  height: 40px;
 
  /* background-color: blueviolet; */

}
.detail-newprice{
color: var(--color-high-text);
font-size: 24px;
}
.detail-oldprice{
text-decoration: line-through;
font-size: 13px;
margin-left: 3px;
}
.detail-p-desc{
  padding: 2px 5px;
 margin-left: 5px;
 color: #fff;
 font-size: 12px;
 border-radius:8px ;
 background-color: var(--color-high-text);
 /* 相对于当前位置位置 */
position: relative;
top: -8px;
}
.detail-serve{
  margin-top: 15px;
  display: flex;
  font-size: 13px;
  line-height: 30px;
  justify-content: space-between;
 
}
.detail-serve-serve{
  height: 70px;
  overflow: hidden;
  display: flex;
  line-height: 70px;
  justify-content: space-between;
  border-top: 1px solid rgba(100,100,100,.1); 
  
}
.detail-serve-serve div{
  font-size: 14px;
  color: black;
  
}
.detail-serve-serve img{
  width: 14px;
}

</style>