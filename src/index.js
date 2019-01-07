import App from './App';
import Vue from 'vue';

import router from './router';

//实例化Vue
new Vue({
    el:"#app",
    render:h=>h(App),

    //5.主入router实例到vue实例
    router
})