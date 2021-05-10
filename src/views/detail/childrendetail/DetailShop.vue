<template>
  <div class="shop">
    <div class="shop-logo">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-desc">
      <div class="desc-sell">
        <div class="sell-s">
          <div>
            {{sellCountFilter(shop.sells)}}
            </div>
          <span>总销量</span>
        </div>
          <div class="sell-b">
            <div>{{shop.goodsCount}}</div>
            <span>全部宝贝</span>
          </div>
        </div>
          <!-- <div v-for="(item,index) in shop.score" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.score}}</span>
            <span class="isBetter" v-show="item.isBetter">高</span>
            <span class="isNotBetter" v-show="!item.isBetter">低</span>
            </div> -->
          <table class="desc-desc">
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="isNotBetter" :class="{'isBetter': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
        

    </div>
  </div>
</template>

<script>
export default {
  props:{
  shop:{
    type:Object,
    default:{}
  }

},
  methods: {
      sellCountFilter(value) {
        if (value < 10000) return value
        else return (value/10000).toFixed(1) + '万'
      }
    }
}
</script>

<style scoped>
.shop{
  padding: 0 8px;
  font-size: 14px;
}
.shop-logo{
  margin-top: 20px;
  line-height: 45px;
  display: flex;
  
}
.shop-logo img{
  height: 45px;
  border: 1px solid #888;
  border-radius: 50%;
  margin-right: 8px;
}
.shop-logo span{
  vertical-align: center;
  font-size: 14px;
}
.shop-desc{
  display: flex;
  text-align: center;
  margin-top: 35px;
}
.desc-sell{
  flex: 1;
  display: flex;
  border-right: 2px solid rgba(100,100,100,.1);

}
.sell-s{
  flex: 1;
}
.sell-b{
  flex: 1;
}
.desc-desc{
  flex: 1;
  
}
.desc-desc span{
  margin-right: 8px;
 
}
/* 放在后面的会覆盖前面的相同属性样式 */
.isNotBetter span{
  background-color: #5ea732;
  color: #fff;
}
.isBetter span{
   
    color: #fff;
    background-color: #f13e3a;
}

</style>