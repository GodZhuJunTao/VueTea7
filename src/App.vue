<template>
    <div id="container">
        <router-view/>
    </div>
</template>
<script>
import Vue from 'vue';

// 引入base.css文件
import './sass/base.css'

// 引入并使用MintUI
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 引入并使用cube-ui
import Cube from 'cube-ui';
Vue.use(Cube)

// 引入common.scss
import './sass/common.scss';

// 引入字体图标
import './assets/iconfont/iconfont.css';

//引入title插件
import HomeTitle from '@/plugins/HomeTitle';
//使用插件
Vue.use(HomeTitle);

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
        }
    },
    methods:{
    }
}
</script>
<style lang="scss">
    #container{
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
