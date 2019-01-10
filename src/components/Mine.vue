<template>
    <div class="page">
        <div class="MineTop">
            <mt-button size="normal" class="Btn">登录 / 注册</mt-button>     
        </div>
        <div class="MineCentent">
            <ul class="uList">
               <li v-for="item in list" :key="item.name">
                    <p>{{item.num}}</p>
                    <p :class="{active:true}">{{item.name}}</p> 
               </li>   
            </ul>
            <div class="order">
                <p class="myOrder"><span class="iconfont icon-icon_order"></span>我的订单</p>
                <p class="allOrder">全部订单 ></p>
            </div>
            
        </div>
    <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
export default {
    data(){
        return{
            list:[
                {
                    name:"茶币",
                    num:"0"
                },{
                    name:"优惠券",
                    num:"0"
                },{
                    name:"收藏",
                    num:"0"
                },{
                    name:"足迹",
                    num:"1"
                }
            ]
        }
    },
    methods:{

    },

    components:{BottomBar}
}
</script>
<style lang="scss" scoped>
    .page{
        height:100%;
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5; 
    }
    .MineTop{
        display: flex;
        justify-content: center;
        height:25%;
        background:url(../assets/img/cbtopbg.jpg);
        .Btn{
            height:30px;
            width:90px;
            background: rgba(255, 181, 0, 0.9);
            color: #fff;
            align-self:center;
            font-size:12px;
        }
    }
    .MineCentent{
        
        .uList{
           display: flex;
           background-color: #ffffff;
           li{
               flex:1;
               flex-direction: column;
               text-align: center;
               p{
                   padding: 5px 0;
               }
               .active{color:rgb(148, 144, 144);}
           }
        }
        .order{
            display:flex;
            margin-top: 10px;
            background-color: #ffffff;
        }
    }
</style>
