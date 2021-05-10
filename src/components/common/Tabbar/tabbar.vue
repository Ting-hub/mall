<template>
  <div id="tabbar">
   <slot></slot>
  </div>
  <!-- <router-view/> -->
</template>

<script>
export default {

}
</script>

<style>

#tabbar{
  display: flex;
  text-align: center;
  /* 一般tabbar都是49 */
  position: fixed;
  bottom: 0px;
  left:0px;
  right: 0px;
  height: 49px;
  background: #f6f6f6;
  /* box-shadow: ;   x, y, 宽度 颜色*/
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);
}

</style>