<template>
    <div class="container">
        <router-view/>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item v-for="tab in tabs" :key="tab.name" :id="tab.name" @click.native="goto(tab.path)">
                <i slot="icon" :class="tab.icon" class="homeIcon"></i>
                {{tab.text}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import Vue from 'vue';

// 引入并使用MintUI
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 引入并使用cube-ui
import Cube from 'cube-ui'
Vue.use(Cube)

// 引入common.scss
import './sass/common.scss';

// 引入字体图标
import './assets/iconfont/iconfont.css';

import axios from 'axios';
//把axios写入Vue的原型对象，后面方便调用
Vue.prototype.$axios = axios;

// loading效果
// 利用axios拦截器全局设置
import { Indicator } from 'mint-ui';
// http请求拦截器
axios.interceptors.request.use(config=>{
    Indicator.open('加载中...');
    return config;
}), error => {
    Indicator.close();
    return Promise.reject(error);
}
// http响应拦截器
axios.interceptors.response.use(data=>{
    Indicator.close();
    return data;
}), error => {
    Indicator.close();
    return Promise.reject(error);
}


export default {
    data(){
        return {
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
            selected:'Home'
        }
    },
    methods:{
        goto(path){
            this.$router.push({path});
        }
    }
}
</script>
<style lang="scss">
    .container{
        padding-top:50px;
        .mint-header.is-fixed{
            background-color:#b0352f;
            height:50px;
        }
        .mint-tabbar > .mint-tab-item.is-selected{
            color:#b0352f;
            background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: top left;
            background-color: #fafafa;
        }
        .homeIcon{
            font-size:22px;
        }
    }
</style>
