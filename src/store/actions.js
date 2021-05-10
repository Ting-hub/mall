export default {

    /**
     * 这里用了数组的解构,原本是context,调用时 context.state  context.commit
     */
     addListToCart({state,commit},payload){
     
      return new Promise((resolve,reject)=>{
        let list = state.cartList.find(item=>item.id === payload.id)

        if(list){
          commit('listCountAdd',list)
          resolve("商品数量+1")
        }else{
          payload.count = 1
          commit('addToCart',payload)
          resolve("添加新商品")
        }
      })

    }   
}