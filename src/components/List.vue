<template>
    <div class="page">
        <header>
            <mt-header title="分类" fixed>
                <mt-button icon="search" slot="right"></mt-button>
            </mt-header>
        </header>
        <div class="main list-box">
            <cube-scroll-nav
            :side="true"
            :data="categoryCompleteList">
                <div class="list-top">
                    <img src="@/assets/img/list_top.jpg">
                </div>
                <cube-scroll-nav-panel
                v-for="item in categoryCompleteList"
                :key="item.Name"
                :label="item.Name"
                :title="item.Name">
                    <ul>
                        <li v-for="goods in item.children" :key="goods.Id" @click="gotolist(goods.Id,goods.ParentCategoryId)">
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
// import Categories from '@/mock/categories';

import '@/sass/list.scss';
export default {
    data(){
        return {
            categoryCompleteList:this.$store.state.categoryCompleteList
        }
    },
    methods:{
        gotolist(id,pId){
            this.$store.commit('changeCategory',{id,pId});
            this.$router.push({path:'/category'});
        }
    },
    components:{BottomBar},
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
