import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

const state = {
  cartList:[]
}
export default createStore({

  state,
    /**
   * mutations唯一的目的就是修改state中状态
   * mutations中的每个方法尽可能完成的事件比较单一一点
   * 可以跟踪
  */
  mutations,
  actions,
  getters:{
    cartListLength(state){
        return state.cartList.length
      },
    cartListItem(state){
      return state.cartList
    } 
    
  },
  modules: {
  }
})
