<template>
    <scroll class="car">
          <cart-list-item v-for="(item,index) in cartListItem" :key="index" :cartitem="item" ></cart-list-item>
    </scroll>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll'

import cartListItem from './cartListItem'
export default {
components:{
  Scroll,
  cartListItem
},
computed:{
  ...mapGetters(['cartListItem'])
}
}
</script>

<style scoped>

.car{
   height: calc(100% - 49px - 44px);
  overflow: hidden;

}

</style>