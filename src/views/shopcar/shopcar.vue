<template>
  <div class="cart">
    <nav-bar class="nav">
      <template v-slot:center>
        <span>购物车({{cartListLength}})</span>
      </template>
    </nav-bar>
    <cart-list></cart-list>
    <bottom-bar class="bottombar"></bottom-bar>
  </div>
</template>

<script>
// 需要导入
// 这个方法直接把getter映射到这里来
  import {mapGetters} from 'vuex'

  import NavBar from 'components/common/navbar/NavBar'
  import CartList from'./childrenCart/cartList'
  import BottomBar from './childrenCart/cartBottombar'
export default {
  components:{
    NavBar,
    CartList,
    BottomBar
  },
  //使用对象运算符将getter混入computed对象中
  computed:{
    ...mapGetters([
    'cartListLength'
  ])
  }
  
}
</script>

<style scoped>
.nav{
  background: var(--color-tint);
  color: #fff;
  font-weight: 200;
  font-size: 18px;
}
.cart{
  height: 100vh;
  
}
.bottombar{
  position: relative;
  bottom: 41px;
}

</style>