<template>
  <div class="goodsitem" @click="itemclick"> 
      <img :src="imagesrc" @load="imageLoad" alt="">
      <p class="des">{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
  </div>
</template>

<script>


export default {
props:{
  goodsitem:{
    type:Object,
    default(){
      return {}
    }
  }
},
computed:{
    imagesrc(){
      return  this.goodsitem.image || this.goodsitem.show.img
    }
},
methods:{
  imageLoad(){
   this.$emit('imageload')
  // console.log("ss");
  },
  itemclick(){
    this.$router.push('/detail/'+this.goodsitem.iid)
  }
}
}
</script>

<style>
.goodsitem{
  width: 170px;
  text-align: center;
  margin: 5px 0px 3px 10px;
  
  /* position: absolute; */
  /* overflow: hidden; */
}

.goodsitem img{
width: 170px;
border-radius: 5px;
}

.des{
  font-size: 13px;
  /* 设置第二行隐藏 */
    overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    width:170px;
}
.price{
  color: pink
}
.collect::before{
content:'⭐';
/* content: url("~assets/img/home/goods/collect.png") ; */

}
</style>