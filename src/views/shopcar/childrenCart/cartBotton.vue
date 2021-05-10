<template>
  <div>
    <img src="~assets/img/cart/unclick.png" v-show="!isclick" alt="">
    <img src="~assets/img/cart/click.png" v-show="isclick" alt="">
  </div>
</template>

<script>
export default {
  props:{
     isclick:false
  },
  methods:{
  }
}
</script>

<style scoped>
img{
  width: 25px;
}

</style>