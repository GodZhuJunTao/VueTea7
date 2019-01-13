<template>
    <div class="page">
        <header>
            <mt-header title="茶七产品" fixed>
                <i slot="left" class="logoImg"></i>
                <i class="iconfont icon-xiaoxizhongxin server" slot="right" @click="goto('Contact')"></i>
            </mt-header>
            <div class="search">
                <input type="text" placeholder="搜索您喜欢的产品">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div class="homeTabs">
                <cube-scroll
                ref="scroll"
                :data="topTabs"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li class="list-item" key="推荐"><a href="javascript:;" class="active">推荐</a></li>
                        <li v-for="item in topTabs" class="list-item" :key="item.label"><a href="javascript:;" @click="gotolist(item.Id,item.ParentCategoryId)">{{ item.label }}</a></li>
                    </ul>
                </cube-scroll>
            </div>
        </header>
        <div class="main">
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
                    label: '金骏眉',
                    Id:17,
                    ParentCategoryId:16
                }, {
                    label: '武夷岩茶',
                    Id:15,
                    ParentCategoryId:38
                }, {
                    label: '紫砂壶',
                    Id:30,
                    ParentCategoryId:1
                }, {
                    label: '龙井',
                    Id:44,
                    ParentCategoryId:33
                }, {
                    label: '漳平水仙',
                    Id:25,
                    ParentCategoryId:38
                }, {
                    label: '茉莉花茶',
                    Id:34,
                    ParentCategoryId:43
                }, {
                    label: '铁观音',
                    Id:23,
                    ParentCategoryId:38
                }, {
                    label: '碧螺春',
                    Id:51,
                    ParentCategoryId:33 
                }, {
                    label: '正山小种',
                    Id:18,
                    ParentCategoryId:16
                }, {
                    label: '功夫茶具',
                    Id:4,
                    ParentCategoryId:1
                }, {
                    label: '建盏',
                    Id:68,
                    ParentCategoryId:1
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
            let obj = {name};
            if(id){
                obj.params = {id}
            }
            this.$router.push(obj);
        },
        gotolist(id,pId){
            this.$store.commit('changeCategory',{id,pId});
            this.$router.push({path:'/category'});
        }
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
        
    }
}
</script>
<style lang="scss" scoped>
    .page{
        background:#f5f5f5;
        &>header{
            z-index:10;
            height: 92px;
            .mint-header{
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
                    font-size:16px;
                    width:100%;
                    padding:0 15%;
                }
                i{color:#555555;position:absolute;top:50%;left:10px;transform:translateY(-50%);}
            }
        }
        

    }
</style>
