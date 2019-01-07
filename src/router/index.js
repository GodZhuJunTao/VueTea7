import Vue from 'vue';
//1.安装
//2.引入路由插件Vue-Router
import VueRouter from 'vue-router';

//3.使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@com/Home';
import List from '@com/List';
import Mine from '@com/Mine';
import Search from '@com/Search';
import Master from '@com/Master';
import Login from '@com/Login';
import Cart from '@com/Cart';
import Server from '@com/Server';

//4.实例化路由
const routes = [
    {name:'Home',path:'/home',component:Home},
    {
        path:'/list',
        component:List,
        // children:[
        //     {
        //         path:'',
        //         redirect:{name:'In_theaters'}
        //     },
        //     {
        //         path:'in_theaters',//当url为/list/in_theaters匹配这个子路由
        //         name:'In_theaters',
        //         component:In_theaters
        //     },
        //     {
        //         path:'coming_soon',//当url为/list/coming_soon匹配这个子路由
        //         name:'Coming_soon',
        //         component:Coming_soon
        //     },
        //     {
        //         path:'new_movies',//当url为/list/new_movies匹配这个子路由
        //         name:'New_movies',
        //         component:New_movies
        //     },
        //     {
        //         path:'top250',//当url为/list/top250匹配这个子路由
        //         name:'Top250',
        //         component:Top250
        //     },
        // ]
    },
    {name:'Mine',path:'/mine',component:Mine},
    {name:'Cart',path:'/cart',component:Cart},
    {
        name:'Search',
        path:'/search',
        component:Search,
        // 把params中的参数写入Search组件的属性,常用方法
        // 等效于：<Search {...params} /> 只能放params
        props:true

        // Function模式
        // 等效于：<Search :keyword="route.query.keyword" />
        // props:(route)=>{
        //     return {keyword:route.query.keyword};
        // }  //这样就可以用query传参了

        // Object模式：静态属性
        // 等效于：<Search name="tiantian" age=18 />
        // props:{name:'tiantian',age:18}
    },
    {name:'Master',path:'/Master',component:Master},
    {name:'Login',path:'/login',component:Login},
    {name:'Server',path:'/server',component:Server},
    {path:'/',redirect:{name:'Home'}}  //可直接跳到home目标路由上
];
let router = new VueRouter({
    routes
});

//全局路由守卫
//在进入某个路由前执行的代码
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){ //判断页面是否需要登录验证
        //判断是否登录
        if(sessionStorage.getItem('token')){
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }else{
        next();
    }
})

export default router;