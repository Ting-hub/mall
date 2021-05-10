<template>
  <div class="navbar">
    <div class="leftnav"><slot name="left"></slot></div>
    <div class="centernav"><slot name="center"></slot></div>
    <div class="rightnav"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
height: 44px;
display: flex;
text-align: center;
line-height: 44px;
box-shadow: 0 1px 1px rgba(100, 100, 100,.1);
background: #fff;

}
.leftnav,.rightnav{
width: 60px;

}
.centernav{
  flex:1;

}
</style>