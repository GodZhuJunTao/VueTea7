<template>
    <div class="page">
        <mt-header title="茶七产品">
            <i slot="left">图标</i>
            <!-- <mt-button icon="search" slot="right" @click="goto('Service')">客服</mt-button> -->
        </mt-header>
        <!-- <div class="carousel">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in recommend" :key="item.id" @click.native="goto('Detail',item.id)">
                    <img :src="item.images.large"/>
                </mt-swipe-item>
            </mt-swipe>
        </div> -->
    </div>
</template>
<script>
import { Indicator} from 'mint-ui';
export default {
    data(){
        return {
            recommend:[]
        }
    },
    methods:{
        goto(name,id){
            //编程式路由导航：获取router实例
            // this.$router 路由实例（包含跳转方法）
            // this.$route  当前路由信息
            let obj = {name};
            if(id){
                obj.params = {id}
            }
            this.$router.push(obj);//可通过path属性进行跳转，path可以传参，name不能传参
        }
    },
    created(){
        
    },
    mounted(){
        //利用App.vue中绑定在原型上的$axios使用axios
        // this.$axios.get('/dbapi/in_theaters',{
        //     params:{
        //         city:this.currentCity
        //     }
        // }).then(res=>{
        //     let data = res.data;

        //     // 获取热映top5
        //     this.recommend = data.subjects.sort((a,b)=>b.collect_count - a.collect_count).slice(0,5);

        //     // Indicator.close();
        // }).catch(()=>{
        //     // Indicator.close();
        // });
    }
}
</script>
<style lang="scss">
    .carousel{
        height: 200px;
        .mint-swipe-item img{
            width:100%;
        }
    }
</style>
