<template>
    <div class="page">
        <header>
            <mt-header title="茶七网客服" fixed>
                <mt-button icon="back" slot="left" @click="goto('back')"></mt-button>
            </mt-header>
        </header>
        <div class="main">
            性感美眉在线陪聊

        </div>
        <input type="text" placeholder="请输入你想说的骚话" class="inputBox" autofocus>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        goto(name){
            if(name==='back'){
                this.$router.back();
            }else{
                this.$router.push({name});
            }
        }
    },

}
</script>
<style lang="scss">
    .page{
        &>header{
            height: 50px;
        }
        .inputBox{height:50px;border:1px solid #ccc;padding:0 10px;}
    }
</style>
