<template>
    <div class="page">
        <mt-header title="分类" fixed>
            <!-- <i slot="left">图标</i> -->
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        列表页
        <div>{{dataJson}}</div>
        <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
export default {
    data(){
        return {
            dataJson:[]
        }
    },
    methods:{
        
    },
    components:{BottomBar},
    created(){
        this.$axios({
            method:'post',
            url:`/dbapi/Category/GetCategoryList`,
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
            data:{
                DisplayPic: true
            }
        }).then(res=>{
            let data = res;
            this.dataJson = data;
        }).catch((err)=>{
            Indicator.close();
            console.log(err);
        });
    }
}
</script>
<style lang="scss" scoped>
    .page{
        margin-top:50px;
    }
</style>
