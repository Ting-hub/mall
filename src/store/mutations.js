
export default {
  listCountAdd(state,list){
    list.count += 1
  },
  addToCart(state,payload){

    state.cartList.push(payload)
  }
}