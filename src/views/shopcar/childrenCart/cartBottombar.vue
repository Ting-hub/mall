<template>
  <div class="bar">
    <div class="first">
    <cart-botton class="botton" @click = "bottonclick" :isclick="bottonsys"></cart-botton>
    <span>全选</span>
    </div>
    <div class="second">
      合计:{{count}}
    </div>
    <div class="calcu">
      去计算({{itemlength}})
    </div>
  </div>
</template>

<script>
import cartBotton from './cartBotton'
export default {
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
    for(const item of this.$store.state.cartList){
      if(!this.isclick){
          item.isclick = false
      }else if(this.isclick){
          item.isclick = true
      }

    }
  }

},
computed:{
  count(){
    return '￥' + this.$store.state.cartList.filter(item=>item.isclick)
    .reduce((preValue,item)=>{
      return preValue + item.lowPrice * item.count
    },0).toFixed(2)//保留两位小数
  },
  itemlength(){
    return  this.$store.state.cartList.filter(item=>item.isclick).length
  },
  bottonsys(){
    // 当isclick = false有长度时，证明有没有选择状态
    // 当isclick = false无长度时，证明没有无选择状态
    if(this.$store.state.cartList.length === 0) return false
    
    else return !this.$store.state.cartList.filter(item=>!item.isclick).length
  }

}
}
</script>

<style scoped>
.bar{
  height: 40px;
  background-color: #eee;
  display: flex;
   line-height: 40px;
   text-align: center;
   font-size: 15px;
   color: #aab;
}
.botton{
  margin: 8px 5px 8px 10px;
}
.first{
  display: flex;
  text-align: center;
  width: 80px;
}
.second{
  flex:1
}
.calcu{
  width: 90px;
  background-color:red;
  color: #fff;
}
</style>