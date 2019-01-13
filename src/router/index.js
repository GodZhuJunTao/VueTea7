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
import Reg from '@com/Reg';
import Cart from '@com/Cart';
import Server from '@com/Server';
import Category from '@com/Category';
// import CategoryList from '@com/CategoryList';
import Detail from '@com/Detail';

//4.实例化路由
const routes = [
    {name:'Home',path:'/home',component:Home},
    {
        path:'/list',
        component:List
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
    },
    {name:'Master',path:'/Master',component:Master},
    {name:'Login',path:'/login',component:Login},
    {name:'Reg',path:'/reg',component:Reg},
    {name:'Server',path:'/server',component:Server},
    {name:'Detail',path:'/detail/:id',component:Detail},
    {
        // name:'Category',
        path:'/category',
        component:Category,
        // children:[
        //     {
        //         path:'',
        //         redirect:{name:'CategoryList'}
        //         // component:CategoryList
        //     },
        //     {
        //         name:'CategoryList',
        //         path:'/categorylist',
        //         component:CategoryList
        //     }
        // ]
    },
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