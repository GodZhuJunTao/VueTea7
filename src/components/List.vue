<template>
    <div class="page">
        <mt-header title="分类" fixed>
            <!-- <i slot="left">图标</i> -->
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        列表页
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
    }
</style>
