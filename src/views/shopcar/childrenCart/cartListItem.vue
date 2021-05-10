<template>
<div class="cartitem">
<cart-botton class="botton" @click="bottonclick" :isclick = "cartitem.isclick"></cart-botton>
  <div class="cart-img">
    <img :src="cartitem.image" alt="">
  </div>
  <div class="cart-desc">
    <span class="item-desc">{{cartitem.title}}</span>
    <span class="item-title">{{cartitem.desc}}</span>
    <div class="item-price-count">
      <span class="item-price">￥{{cartitem.lowPrice}}</span>
      <span class="item-count">x{{cartitem.count}}</span>
    </div>
  </div>
</div>
</template>

<script>
import cartBotton from './cartBotton'
export default {
props:{
  cartitem:{
    type:Object,
    default:{}
  }
 
},
components:{
  cartBotton
},
data(){
  return {
    isclick:false
  }
},
methods:{
  bottonclick(){
    this.isclick = !this.isclick
    this.cartitem.isclick = this.isclick
  }
}
}
</script>

<style scoped>
.cartitem{
  height: 140px;
  width: 100%;
  display: flex;
  padding: 10px 10px 10px 5px;
  border-bottom: 1px solid #aaa;
  vertical-align: middle;
}
.botton{
   margin: 45px 5px 0px 0px;
}

.cartitem img{
  height: 110px;
  border-radius: 5px;
  margin-right: 14px;
}
.cart-desc span{
    overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
}
.item-desc{
  font-size: 15px;
}
.item-title{
  font-size: 13px;
  color: #aaa;
}
.item-price{
  color: chocolate;
  position: relative;
}
.item-count{
  position: relative;
  left: 170px;
}
.item-price-count{
  margin-top: 30px;
}
.item-price-count span{
  display:inline;
  font-size: 15px;
}
</style>