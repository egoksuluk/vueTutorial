import {createStore} from "vuex";

const store = createStore({
    state : {
        productList : ["Elma","Armut","Kiraz"],
        user : {
            name : "Emrah",
            lname : "Göksülük",
            username : "egoksuluk"
        },
        theme : "dark",
    },
    mutations : {
        setTheme(state,theme){
            state.theme = theme;
        },
        setUser(state,user){
            state.user = user ; 
        }
    },
    actions : {
        setUser( { commit } ,user){
            setTimeout(() => {
                commit("setUser",user);
            }, 2000);
        }
    },
    getters : {
        _productList(state){
            return state.productList;
        },
        _currentUser : state => state.user,
        _activeTheme : state => state.theme,
    }
});

export default store ; 