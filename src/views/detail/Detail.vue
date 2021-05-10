<template>
  <div id="Detail">
    <!-- <div>
      {{$store.state.cartList}}
    </div> -->
    <detail-navbar ref="navbar" class="detail-nav" @changeList = "changeList" :navindex = "navindex"></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type='3' @scrollShow = "scrollShow">
    <detail-swiper :swiperitem="swiperitem"></detail-swiper>
    <detail-base-info :goods = "goods"></detail-base-info>
    <detail-shop :shop = "shop"></detail-shop>
    <detail-info :detail-info = "detailInfo"  @imageLoad="imageLoad"></detail-info>
    <detail-item-params ref="params" :itemparamsrule = "itemparamsrule" :itemparamsinfo = "itemparamsinfo"></detail-item-params>
    <detail-comment ref="comment" :recommand-info="recommandInfo" :recommand-info-user="recommandInfoUser"></detail-comment>
    <detail-recommend ref="recommend" :recommend = "recommend"></detail-recommend>
    </scroll>
    <detail-bottom-bar @addToCart = "addToCart"></detail-bottom-bar>
 
  </div>
</template>

<script>
  import DetailNavbar from './childrendetail/detailNavbar'
  import DetailSwiper from './childrendetail/datailSwiper' 
  import DetailBaseInfo from './childrendetail/DetailBaseInfo'
  import DetailShop from './childrendetail/DetailShop'
  import DetailInfo from './childrendetail/DetailInfo'
  import DetailItemParams from './childrendetail/DetailItemParams'
  import DetailComment from './childrendetail/DetailComment'
  import DetailRecommend from './childrendetail/DetailRecommend'
  import DetailBottomBar from './childrendetail/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'


  import {getDetailData,DetailGoods,Shop,getRecommendData} from 'network/detail'

export default{
name:'Detail',
data(){
  return {
  id:null,
  swiperitem:[],
  goods:{},
  shop:{},
  detailInfo:{},
  itemparamsrule:{},
  itemparamsinfo:{},
  recommandInfo:{},
  recommandInfoUser:{},
  recommend:{},
  indexList:[],
  navindex:null

}
},
components:{
  DetailNavbar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShop,
  DetailInfo,
  Scroll,
  DetailItemParams,
  DetailRecommend,
  DetailComment,
  DetailBottomBar,
 
},
created(){
  this.id= this.$route.params.id
  getDetailData(this.id).then(res=>{
    this.swiperitem = res.data.result.itemInfo.topImages
    this.goods = new DetailGoods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
    console.log(res);
    this.shop = new Shop(res.data.result.shopInfo)
    this.detailInfo = res.data.result.detailInfo

    this.itemparamsrule = res.data.result.itemParams.rule
    this.itemparamsinfo = res.data.result.itemParams.info

    this.recommandInfo = res.data.result.rate.list[0]
    this.recommandInfoUser = res.data.result.rate.list[0].user
 })
 
  getRecommendData().then(res=>{
    // console.log(res);
    this.recommend = res.data.data.list
  })
},
methods:{
  changeList(index){
   this.$refs.scroll.scroll.scrollTo(0,-this.indexList[index],200)

  },
  imageLoad(){
     // 每次点击都先赋一个空值
    this.indexList = []
    this.indexList.push(0)
    this.indexList.push(this.$refs.params.$el.offsetTop)
    this.indexList.push(this.$refs.comment.$el.offsetTop)
    this.indexList.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.indexList);
// console.log('haha');
},
scrollShow(position){
  const positiony = -position.y
  // 最后一个条件防止一直频繁赋值
    if(0<=positiony&&positiony<this.indexList[1]&&this.navindex != 0)this.navindex = 0
    else if(this.indexList[1]<=positiony&&positiony<this.indexList[2]&&this.navindex != 1) this.navindex = 1
    else if(this.indexList[2]<=positiony&&positiony<this.indexList[3]&&this.navindex != 2) this.navindex = 2
    else if(this.indexList[3]<=positiony&&this.navindex != 3) this.navindex = 3

   this.$refs.navbar.currentindex =this.navindex

},
addToCart(){
  const cartData = {}
  
  cartData.image = this.swiperitem[0]
  cartData.desc = this.goods.desc
  cartData.title = this.goods.title
  cartData.lowPrice = this.goods.lowPrice
  cartData.id = this.id
  cartData.isclick = false
/**
 * dispatch会返回一个promise
 * 
 * 
 */

  this.$store.dispatch('addListToCart',cartData)
}
},


}
</script>

<style scoped>
#Detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  /* 这里的计算空格不能省 */
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail-nav{
  position: relative;
  z-index: 99;
  background-color: #fff;
}

</style>