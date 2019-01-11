export default {
    install(Vue,options){
        // 创建全局组件
        Vue.component('HomeTitle',{
            template:`<p class="home-title"><span><slot></slot></span></p>`
        })
    }
}