// 在这里面设置所有的关于首页的网络请求

import {request} from 'network/request'

export function getHomeMultidata(){
  const config = {
    url:'/home/multidata'
  }
  return request(config)
}

export function getHomeGoodsdata(type,page){
  const config = {
    url:'/home/data',
    params:{
      type,
      page
    }
  }
  return request(config)
}