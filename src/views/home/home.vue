<template>
  <div id="home" >
   <div class="nav" ><nav-bar class="center"><template  v-slot:center><div>婷婷的购物街</div></template></nav-bar></div>
   <tab-control 
    class="tabcontrol" 
    @tabClick="tabClick" 
    :titles="['流行','新款','精选']"
    v-show="isShowTab"
    ref="retabcontrol"
    ></tab-control>
   <!-- 这里的probeType因为是驼峰模式，所以要用-t链接 -->
   <Scroll  class="contents"
            ref="scroll" 
            :probe-type="3" 
            @scrollShow="scrollShow"
            @pullingUp="pullingUp"
            :pull-up-load="true"
            >
   <Swiper :banners="banners"></Swiper>
   <Recommend :recommend="recommend"></Recommend>
   <Feature></Feature>
   <tab-control ref="tabcontrol" class="tabcontrol" @tabClick="tabClick" :titles="['流行','新款','精选']"></tab-control>
   <good-list class="goodlist" :goods="goods[currenttitle].list"></good-list>
  <!-- <div class="pp"></div> -->
   </Scroll>
   <!-- 插播一个知识点，组件是不能直监听点击的，如果要的话需要用到.native native:监听组件根元素的原生事件-->
    <back-top @click.native="backclick" v-show=" isShowreturn"></back-top>
   </div>
 
</template>

<script>

// 分类写好，养成好习惯
import {getHomeMultidata} from 'network/home.js'
import {getHomeGoodsdata} from 'network/home.js'

import Swiper from './childcom/swiper'
import Recommend from './childcom/recommend'
import Feature from './childcom/feature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/backTop'

export default {
  name:'home',
components:{
  NavBar,
  Swiper,
  Recommend,
  Feature,
  TabControl,
  GoodList,
  Scroll,
  BackTop
},
data(){
  return{
    // 存储数据
    banners:[],
    dKeyword:[],
    recommend:[],
    keywords:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currenttitle:'pop',
    isShowreturn:false,
    isShowTab:false,
    proviewsStatus:0
  }
},
// 组件加载完就请求数据
created(){
  // 请求首页前面的数据
  this.getHomeMultidata()
  // 请求后面商品的数据
  this.getHomeGoodsdata('pop'),
  this.getHomeGoodsdata('new'),
  this.getHomeGoodsdata('sell')
  },
  mounted(){
    /**$el是拿到组件里面的所有元素对应的属性*/
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
  },
  updated(){
    
  },
  /**只有用了keep-alive才有用的activated  deactivated */
  activated(){
    this.$refs.scroll.scrollTo(0,this.proviewsStatus,0)
    // 重新启动组件时更新一次更好
    this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
    this.proviewsStatus = this.$refs.scroll.scroll.y
  // console.log(this.proviewsStatus);
  },
methods:{
    /**
     * 事件监听的方法
     */
    tabClick(index){
      switch(index){
        case 0:this.currenttitle = 'pop';break;
        case 1:this.currenttitle = 'new';break;
        case 2:this.currenttitle = 'sell';break
      }

      this.$refs.retabcontrol.currentindex = index
      this.$refs.tabcontrol.currentindex = index

    },
    /**
     * 网络请求的方法
     */
    getHomeGoodsdata(type){
      const page = this.goods[type].page+1
      getHomeGoodsdata(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page +=1
       
      })
      
    },
    getHomeMultidata(){
     getHomeMultidata().then(res=>{
    this.banners = res.data.data.banner.list
    this.dKeyword = res.data.data.dKeyword.list
    this.recommend = res.data.data.recommend.list
    this.keywords = res.data.data.keywords.list
  })
    },
    refreshHeight(){
      this.$refs.scroll.scroll.refresh()
     
    },
    backclick(){
      /** this.$refs.scroll 是拿到这个组件，拿到它可以直接调用组件的方法*/ 
      this.$refs.scroll.scrollTo(0,0)
    },
    scrollShow(positon){
      this.isShowreturn = positon.y<-1000
      // console.log(positon);
      if(positon.y<-630){
        this.isShowTab = true
      }
      else{
        this.isShowTab = false
      }
    },
    pullingUp(){
      this.getHomeGoodsdata(this.currenttitle)
      this.$refs.scroll.finishPullUp()
      // this.$refs.scroll.scroll.refresh()
    }

  }
}

</script>

<style scoped>
.center{
  background: var(--color-tint);
  color: #fff;
}
.nav{
  /* 固定顶部条 */
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 9;
}
.tabcontrol{
  background-color: #fff;
}
#home{
  padding-top: 44px;
  position:relative;
  height: 100vh;

}

.contents{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right:0px; 
  /* height: 100px; */
  overflow: hidden;
}
.pp{
  height: 500px;
  width:100%;
  /* background-color:red ; */
}
</style>