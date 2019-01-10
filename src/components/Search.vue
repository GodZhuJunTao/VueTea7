<template>
    <div class="page search-list">
        <mt-search
            v-model="keyword"
            cancel-text="取消"
            autofocus
            @input="search"
            placeholder="搜索">
        </mt-search>
    </div>
</template>
<script>
export default {
    props:['keyword'],
    data(){
        return {
            // keyword:'',//刚开始为空的
            timer:null,
            result:[]
        }
    },
    methods:{
        search(){
            clearTimeout(this.timer);

            if(!this.keyword) return;
            
            this.timer = setTimeout(()=>{
                this.$axios.get('/dbapi/search',{
                    params:{
                        q:this.keyword //接口查询需要的字段为'q'，即url?q=xxx
                    }
                }).then(res=>{
                    console.log(res.data);
                    let data = res.data;
                    this.result = data.subjects;
                })

            },1000);
        },
        goto(id){
            // this.$router.push({path:'/detail/'+id});//第一种方式传参，path方式
            this.$router.push({name:'Detail',params:{id},query:{keyword:'海王'}});//第二种方式传参，name方式，可放params、query、hash
        }
    },
    created(){
        console.log(this.$route,this.keyword);
        // this.keyword = this.$route.params.keyword;
        //路由传参，但是params刷新页面会丢失，因为是动态路由；query就不会，因为拼接在路径上的
        this.search();
    }
}
</script>
<style lang="scss">
</style>
