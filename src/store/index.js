import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        tabs:[
            {
                text:'首页',
                icon:'iconfont icon-home',
                path:'/home',
                name:'Home'
            },
            {
                text:'列表',
                icon:'iconfont icon-circle',
                path:'/list',
                name:'List'
            },
            {
                text:'购物车',
                icon:'iconfont icon-cart',
                path:'/cart',
                name:'Cart'
            },
            {
                text:'茶师茶',
                icon:'iconfont icon-leaves01',
                path:'/master',
                name:'Master'
            },
            {
                text:'我的',
                icon:'iconfont icon-mine',
                path:'/mine',
                name:'Mine'
            },
        ],
        selected:'/home'
    },
    mutations:{
        changeSelected(state,payload){
            state.selected = payload.selected;
        }
    }
})