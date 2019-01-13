<template>
    <div class="home-cate">
        <a href="javascript:;">
            <img :src="imgUrl"/>
        </a>
        <div>
            <cube-scroll
            ref="scroll"
            :data="cateList"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
                <ul class="list-wrapper">
                    <li v-for="item in cateList" class="list-item" :key="item.Id" @click="toDetail(item.Id)">
                        <img :src="item.PictureUrl.split('?')[0]"/>
                        <h4>{{item.Name}}</h4>
                        <p>￥{{item.Price}}.0</p>
                    </li>
                </ul>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cateList:{
            type:Array,
            required:true
        },
        imgUrl:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        toDetail(id){
            this.$router.push({path:'/detail/'+id});
        }
    },
    created(){
        
    }
}
</script>

<style lang="scss">

</style>
