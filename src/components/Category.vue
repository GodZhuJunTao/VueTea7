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
                        <li v-for="item in parentList" class="list-item" :key="item.Id"><a href="javascript:;" :class="{active:item.Id==activeId}" @click="getList(item.Id)">{{ item.Name }}</a></li>
                    </ul>
                </cube-scroll>
            </div>
        </header>
        <div class="main">
            <CategoryList :listId="id"/>
        </div>
    </div>
</template>

<script>
import CategoryList from './CategoryList';
export default {
    data(){
        return {
            categoryCompleteList:this.$store.state.categoryCompleteList,
            pId:this.$store.state.categoryPId
        }
    },
    computed:{
        parentList(){
            let cateList = [];
            let arr = this.$store.state.categoryCompleteList;
            for(let i=0;i<arr.length;i++){
                if(arr[i].Id==this.pId){
                    cateList = arr[i].children;
                }
            }
            return cateList;
        },
        activeId(){
            let res = {};
            this.parentList.forEach(item=>{
                if(item.Id==this.id){
                    res = item
                }
            })
            return res.Id
        },
        id(){
            return this.$store.state.categoryId
        }
    },
    methods:{
        back(){
            this.$router.back();
        },
        getList(id){
            this.$store.commit('changeCategory',{id,pId:this.pId});
            console.log('cChange:',this.id);
        }
    },
    components:{CategoryList},
    created(){
        // console.log('craete:',this.parentList,'pId:',this.$store.state.categoryPId,'Id:',this.$store.state.categoryId);
    },
    mounted(){
        // console.log('mm',this.parentList);
        let {id} = this.$store.state.categoryId;
    }
}
</script>

<style lang="scss" scoped>
    .page{
        background:#fff;
        &>header{
            height: 92px;
            width:100%;
        }
        .main{
            padding-top:10px;
        }
    }
</style>
