<template>
    <div class="page">
        <header>
            <mt-header title="商品" fixed>
                <mt-button icon="back" slot="left" @click="back"></mt-button>
            </mt-header>
            <div class="homeTabs">
                <cube-scroll
                ref="scroll"
                :data="parentList"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li v-for="item in parentList" class="list-item" :key="item.Id"><a href="javascript:;" :class="{active:item.Id==selectedLabel}">{{ item.Name }}</a></li>
                    </ul>
                </cube-scroll>
            </div>
        </header>
        <div class="main">
            <!-- <ListModule/> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categoryCompleteList:this.$store.state.categoryCompleteList,
            selectedLabel:''
        }
    },
    computed:{
        parentList(){
            let {pId} = this.$route.params;
            let cateList = [];
            let arr = this.$store.state.categoryCompleteList;
            for(let i=0;i<arr.length;i++){
                if(arr[i].Id==pId){
                    cateList = arr[i].children;
                }
            }
            return cateList;
        }
    },
    methods:{
        back(){
            this.$router.back();
        }
    },
    created(){
        // console.log(this.parentList);
    },
    mounted(){
        // console.log('mm',this.parentList);
    }
}
</script>

<style>

</style>
