import App from './App';
import Vue from 'vue';

import router from './router';
// 引入Vuex的store
import store from './store';

//实例化Vue
new Vue({
    el:"#app",
    render:h=>h(App),

    // 注入router实例到vue实例
    router,
    // 注入store
    store
})