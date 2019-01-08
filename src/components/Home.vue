<template>
    <div class="page">
        <mt-header title="茶七产品" fixed>
            <i slot="left" class="logoImg"></i>
            <i class="iconfont icon-xiaoxizhongxin server" slot="right" @click="goto('Server')"></i>
        </mt-header>
        <div class="search">
            <input type="text" placeholder="搜索您喜欢的产品">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="carousel">
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in recommend" :key="item.id">
                    <img :src="item.url"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div>{{dataJson}}</div>
    </div>
</template>
<script>
import { Indicator} from 'mint-ui';
export default {
    data(){
        return {
            recommend:[
                {
                    id:1,
                    url:require('@/assets/img/banner1.jpeg')
                },
                {
                    id:2,
                    url:require('@/assets/img/banner2.jpeg')
                },
                {
                    id:3,
                    url:require('@/assets/img/banner3.jpeg')
                },
                {
                    id:4,
                    url:require('@/assets/img/banner4.jpeg')
                },
            ],
            dataJson:[]
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
<style lang="scss" scoped>
    .page{
        .mint-header{
            .logoImg{
                display: block;
                width: 20px;
                height: 20px;
                background:url(../assets/img/logo.jpg) no-repeat;
                background-size:100%;
            }
            .server{
                font-size: 22px;
            }
        }
        .search{
            box-sizing: border-box;
            position:fixed;
            top:10px;
            left:15%;
            z-index:2;
            width:70%;
            input[type="text"]{
                box-sizing: inherit;
                height: 30px;
                border-radius:15px;
                width:100%;
                padding:0 15%;
            }
            i{color:#555555;position:absolute;top:50%;left:10px;transform:translateY(-50%);}
        }
        .carousel{
            height: 160px;
            .mint-swipe-item img{
                width:100%;
            }
        }

    }
</style>
