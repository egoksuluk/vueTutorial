import {createStore} from "vuex";

export default createStore ({
    state : {
        userCart : [],
    },
    getters : {
        _userCart : state => state.userCart || [] ,
        _userCartCount : state => state.userCart.length || 0 ,
    },
    mutations : {
        addNewItemToCart(state,cartItem){
            state.userCart.push(cartItem);
        },
        removeItemFromCart(state,cartItem){
            state.userCart = state.userCart.filter(f => f.id !== cartItem.id);
        },
    },
    actions : {},
})