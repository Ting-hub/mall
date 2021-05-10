<template>
<div>
  <tabbar>
    <tabbaritem path="/home">
       <template v-slot:img-active>
         <!-- DOM里面的别名配置需要前面加上 ~ -->
         <img src="~assets/img/home/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:img>
         <img src="~assets/img/home/tabbar/home.svg" alt="">
      </template>
       <template v-slot:des>
         <div>首页</div>
      </template>
    </tabbaritem>



    <tabbaritem path="/category">
       <template v-slot:img-active>
         <img src="~assets/img/home/tabbar/category_active.svg" alt="">
      </template>
        <template v-slot:img>
         <img src="~assets/img/home/tabbar/category.svg" alt="">
      </template>
       <template v-slot:des>
         <div>分类</div>
      </template>
    </tabbaritem>


    <tabbaritem path="/shopcar">
      <template v-slot:img-active>
         <img src="~assets/img/home/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:img>
         <img src="~assets/img/home/tabbar/shopcart.svg" alt="">
      </template>
       <template v-slot:des>
         <div>购物车</div>
      </template>
    </tabbaritem>



    <tabbaritem path="/profile">
      <template v-slot:img-active>
         <img src="~assets/img/home/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:img>
         <img src="~assets/img/home/tabbar/profile.svg" alt="">
      </template>
       <template v-slot:des>
         <div>我的</div>
      </template>
    </tabbaritem>

  </tabbar>
  </div>
</template>
<script>
import Tabbar from 'components/common/Tabbar/tabbar'
import Tabbaritem from 'components/common/Tabbar/tabbar-item'

export default {
  components:{
 Tabbar,
 Tabbaritem
  }
}
</script>
<style>

</style>
