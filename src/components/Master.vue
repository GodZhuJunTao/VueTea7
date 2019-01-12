<template>
    <div class="page">
        <header class="master-header">
            <mt-header title="茶师亲制个性好茶-茶七网" class="cart-title" fixed>
                <mt-button slot="right"  icon="more"></mt-button>
            </mt-header>
        </header>
        <div class="main">
            茶师茶
        </div>
        <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
import '@/sass/master.scss';
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
        &>header{
            height: 50px;
            
        }
    }
</style>
