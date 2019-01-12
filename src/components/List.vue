<template>
    <div class="page">
        <header>
            <mt-header title="分类" fixed>
                <!-- <i slot="left">图标</i> -->
                <mt-button icon="search" slot="right"></mt-button>
            </mt-header>
        </header>
        <div class="main list-box">
            <cube-scroll-nav
            :side="true"
            :data="categoryCompleteList"
            @change="changeHandler"
            @sticky-change="stickyChangeHandler">
                <div class="list-top">
                    <img src="@/assets/img/list_top.jpg">
                </div>
                <cube-scroll-nav-panel
                v-for="item in categoryCompleteList"
                :key="item.Name"
                :label="item.Name"
                :title="item.Name">
                    <ul>
                        <li v-for="goods in item.children" :key="goods.Id">
                        <div>
                            <img :src="goods.PictureUrl">
                            <p>{{goods.Name}}</p>
                        </div>
                        </li>
                    </ul>
                </cube-scroll-nav-panel>
            </cube-scroll-nav>
        </div>
        <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
import Categories from '@/mock/categories';
import categoryCompleteList from '@/mock/categoryCompleteList';

import '@/sass/list.scss';
export default {
    data(){
        return {
            categoryCompleteList
        }
    },
    methods:{
        changeHandler(label) {
            if(label=="推荐"){
                console.log('怎么上到顶部啊？？？');
            }
        },
        stickyChangeHandler(current) {
            console.log('sticky-change', current)
        }
    },
    components:{BottomBar},
    created(){
        


        // 使用数据接口获取列表
        // this.$axios({
        //     method:'post',
        //     url:`/dbapi/Category/GetCategoryList`,
        //     headers: {'Content-Type': 'application/json;charset=UTF-8'},
        //     data:{
        //         DisplayPic: true
        //     }
        // }).then(res=>{
        //     let data = res;
        //     this.dataJson = data;
        // }).catch((err)=>{
        //     Indicator.close();
        //     console.log(err);
        // });
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
    .page{
        background:#fff;
        &>header{
            height: 50px;
            width:100%;
        }
    }
</style>
