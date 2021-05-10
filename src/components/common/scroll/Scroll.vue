<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
import Pulldown from '@better-scroll/pull-down'

BScroll.use(Pullup)
BScroll.use(Pulldown)
export default {
  data(){
    return{
      scroll:null
    }
    
  },
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
    click:true,
    observeDOM:true,
    observeImage:true,
    mouseWheel:true,
    probeType:this.probeType,
    pullUpLoad:true
    }),
      this.scroll.on('scroll',position=>{
      this.$emit('scrollShow',position)
    }),
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
 
  },
  methods:{
    /**
     * scrollTo方法就是滑动到指向的x,y坐标的地方
     * 设置了一个默认值 */
    scrollTo(x,y,time=500){
       this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
   
   
  }
  
    
}


</script>

<style>

</style>