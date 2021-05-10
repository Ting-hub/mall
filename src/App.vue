<template>
  <div> 

    <!-- 最新的写法 -->
    <router-view v-slot="{ Component }">
      <transition>
         <keep-alive exclude="Detail">
           <component :is="Component"/>
         </keep-alive>
      </transition>
    </router-view>

<!-- 以前的keep-alive写法 -->
    <!-- <keep-alive include="home">
    <router-view></router-view>
    </keep-alive> -->

  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/content/maintabbar/tabbar'

export default {
components:{
  Tabbar,
}
}
</script>

<style>
/* style中引入要用这个语句 */
@import url("assets/css/base.css");
/* 做一些统一的规范，开发中经常用 */
@import url("assets/css/normalize.css")
</style>