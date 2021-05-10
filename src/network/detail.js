import {request} from 'network/request'

export function getDetailData(id){
  return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}

export function getRecommendData(){
  return request({
    url:'/recommend'
  })
}

export class DetailGoods{
  constructor(itemInfo,columns,services){
   this.title = itemInfo.title
   this.desc = itemInfo.desc
   this.newPrice = itemInfo.price
   this.oldPrice = itemInfo.oldPrice
   this.discount = itemInfo.discountDesc
   this.columns = columns
   this.services = services
   this.realPrice = itemInfo.lowNowPrice
   this.lowPrice = itemInfo.lowPrice
  
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}