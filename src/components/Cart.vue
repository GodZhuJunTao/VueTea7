<template>
    <div class="page">
        <mt-header title="购物车" fixed>
            <!-- <i slot="left">图标</i> -->
            <mt-button slot="right">编辑</mt-button>
            <mt-button slot="right">客服</mt-button>
        </mt-header>
        购物车
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
        margin-top:3.125rem;
    }
</style>