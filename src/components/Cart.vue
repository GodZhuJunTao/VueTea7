<template>
    <div class="page">
        <mt-header title="购物车" class="cart-title" fixed>
            <!-- <i slot="left">图标</i> -->
            <mt-button slot="right">编辑</mt-button>
            <mt-button slot="right"><span class="iconfont icon-xiaoxizhongxin"></span></mt-button>
        </mt-header>
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" src=".." alt="...">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
        </div>
    </div>

        <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
export default {
    data(){
        return {
            
        }
    },
    methods:{
        
    },
    components:{BottomBar},
}
</script>
<style lang="scss" scoped>
    .page{
        margin-top:50px;
        .cart-title{
            font-size: 16px;
        }
        .icon-xiaoxizhongxin{
            font-size: 22px;
            margin-left: 30px;
        }
    }
</style>