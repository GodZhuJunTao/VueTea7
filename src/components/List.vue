<template>
    <div class="page">
        <mt-header title="分类" fixed>
            <!-- <i slot="left">图标</i> -->
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <div class="main">
            <div>{{categoryCompleteList}}</div>
            <!-- <cube-scroll-nav
            :side="true"
            :data="data"
            :current="current"
            @change="changeHandler"
            @sticky-change="stickyChangeHandler">
                <ul class="prepend-header" slot="prepend">
                    <li>11</li>
                    <li>22</li>
                    <li>333</li>
                </ul>
                <cube-scroll-nav-panel
                v-for="item in data"
                :key="item.name"
                :label="item.name"
                :title="item.name">
                    <ul>
                        <li v-for="food in item.foods">
                        <div>
                            <img :src="food.icon">
                            <p>{{food.name}}</p>
                        </div>
                        </li>
                    </ul>
                </cube-scroll-nav-panel>
            </cube-scroll-nav> -->
        </div>
        <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
import Categories from '@/mock/categories';
export default {
    data(){
        return {
            categoryCompleteList:[]
        }
    },
    methods:{
        
    },
    components:{BottomBar},
    created(){
        // 使用假数据
        Categories.then(res=>this.categoryCompleteList=res);
        


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
        margin:50px 0;
        flex:1;
        overflow-x:hidden;
    }
</style>
