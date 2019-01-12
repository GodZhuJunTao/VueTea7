<template>
    <div class="page">
        <mt-header title="茶七产品" fixed>
            <i slot="left" class="logoImg"></i>
            <i class="iconfont icon-xiaoxizhongxin server" slot="right" @click="goto('Server')"></i>
        </mt-header>
        <div class="search">
            <input type="text" placeholder="搜索您喜欢的产品">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="main">
            <div class="homeTabs">
                <cube-scroll
                ref="scroll"
                :data="topTabs"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li v-for="item in topTabs" class="list-item" :key="item.label"><a href="javascript:;" :class="{active:item.label==selectedLabel}">{{ item.label }}</a></li>
                    </ul>
                </cube-scroll>
            </div>
            <HomeBanner/>
            <HomeCommend/>
            <HomePromotion/>
            <HomeCate :cateList="homeCatePot.goodslist" :imgUrl="homeCatePot.img"/>
            <HomeCate :cateList="homeCateBai.goodslist" :imgUrl="homeCateBai.img"/>
            <HomeLike/>
        </div>
        <BottomBar/>
    </div>
</template>
<script>
import { Indicator} from 'mint-ui';
// 轮播图组件
import HomeBanner from './HomeBanner';
// 底部选项卡组件
import BottomBar from './BottomBar';
// 小七推荐组件
import HomeCommend from './HomeCommend';
// 今日特价组件
import HomePromotion from './HomePromotion';
// 一类产品组件
import HomeCate from './HomeCate';
// 猜你喜欢组件
import HomeLike from './HomeLike';

import '@/sass/home.scss';

export default {
    data(){
        return {
            selectedLabel: '推荐',
            topTabs: [
                {
                    label: '推荐'
                }, {
                    label: '金骏眉'
                }, {
                    label: '武夷岩茶'
                }, {
                    label: '紫砂壶'
                }, {
                    label: '龙井'
                }, {
                    label: '漳平水仙'
                }, {
                    label: '茉莉花茶'
                }, {
                    label: '采茶'
                }, {
                    label: '铁观音'
                }, {
                    label: '碧螺春'
                }, {
                    label: '正山小种'
                }, {
                    label: '功夫茶具'
                }, {
                    label: '建盏'
                }
            ],
            homeCatePot:{
                goodslist:[],
                img:require('@/assets/img/home_cate1.jpg')
            },
            homeCateBai:{
                goodslist:[],
                img:require('@/assets/img/home_cate2.jpg')
            },
        }
    },
    methods:{
        goto(name,id){
            //编程式路由导航：获取router实例
            // this.$router 路由实例（包含跳转方法）
            // this.$route  当前路由信息
            let obj = {name};
            if(id){
                obj.params = {id}
            }
            this.$router.push(obj);//可通过path属性进行跳转，path可以传参，name不能传参
        },
    },
    components:{BottomBar,HomeBanner,HomeCommend,HomePromotion,HomeCate,HomeLike},
    created(){
        this.$axios({
            method:'get',
            url:`/dbapi/Product/GetProducts`,
            params:{
                PageIndex: 0,
                PageSize: 10,
                ParentCategoryId: 30,
                ProductTagIdsStr: '',
                ProductTypeId: 1
            }
        }).then(res=>{
            let data = res.data;
            this.homeCatePot.goodslist = data.Products;
        }).catch((err)=>{
            // Indicator.close();
            console.log(err);
        });
        this.$axios({
            method:'get',
            url:`/dbapi/Product/GetProducts`,
            params:{
                PageIndex: 0,
                PageSize: 10,
                ParentCategoryId: 20,
                ProductTagIdsStr: '',
                ProductTypeId: 1
            }
        }).then(res=>{
            let data = res.data;
            this.homeCateBai.goodslist = data.Products;
        }).catch((err)=>{
            // Indicator.close();
            console.log(err);
        });
    },
    mounted(){
        //利用App.vue中绑定在原型上的$axios使用axios
        // this.$axios.get('/dbapi/in_theaters',{
        //     params:{
        //         city:this.currentCity
        //     }
        // }).then(res=>{
        //     let data = res.data;

        //     // 获取热映top5
        //     this.recommend = data.subjects.sort((a,b)=>b.collect_count - a.collect_count).slice(0,5);

        //     // Indicator.close();
        // }).catch(()=>{
        //     // Indicator.close();
        // });
    }
}
</script>
<style lang="scss" scoped>
    .page{
        background:#f5f5f5;
        margin-top:92px;
        margin-bottom:50px;
        .mint-header{
            z-index:10;
            .logoImg{
                display: block;
                width: 20px;
                height: 20px;
                background:url(../assets/img/logo.jpg) no-repeat;
                background-size:100%;
            }
            .server{
                font-size: 22px;
            }
        }
        .search{
            box-sizing: border-box;
            position:fixed;
            top:10px;
            left:15%;
            z-index:11;
            width:70%;
            input[type="text"]{
                box-sizing: inherit;
                height: 30px;
                border-radius:15px;
                width:100%;
                padding:0 15%;
            }
            i{color:#555555;position:absolute;top:50%;left:10px;transform:translateY(-50%);}
        }
        

    }
</style>
