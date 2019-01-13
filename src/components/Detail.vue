<template>
    <div class="page">
        <header>
            <mt-button icon="back" plain @click="back"></mt-button>
            <p>
                <a href="javascript:;" class="active">商品</a>
                <a href="javascript:;">详情</a>
                <a href="javascript:;">评价</a>
            </p>
            <mt-button icon="more" plain></mt-button>
        </header>
        <div class="main">
            <div class="detailBanner">
                <mt-swipe :auto="0" :show-indicators="false" @change="handleChange">
                    <mt-swipe-item v-for="item in picNum" :key="item.id" class="">
                        <img :src="item.url"/>
                    </mt-swipe-item>
                </mt-swipe>
                <span>{{currentPic}}/5</span>
            </div>
            <div class="portion">
                <div class="goodsInfo">
                    <p class="name">{{goodsDetail.Name}}</p>
                    <p class="price">
                        <strong>￥{{goodsDetail.Price}}.0</strong>
                        <del>￥{{goodsDetail.OldPrice}}.0</del>
                    </p>
                </div>
                <div class="teaCurrency">
                    <span>茶币</span>
                    <span>买就赠送<strong>{{goodsDetail.GiftPoints}}</strong>茶币</span>
                </div>
                <div class="server">
                    <span>服务</span>
                    <span><i class="iconfont icon-xuanze"></i>全国包邮</span>
                    <span><i class="iconfont icon-xuanze"></i>48小时发货</span>
                    <span><i class="iconfont icon-xuanze"></i>7天无理由退货</span>
                    <span class="iconfont icon-right-line"></span>
                </div>
                <div class="detailAd">
                    <img src="@/assets/img/detailAd1.jpeg"/>
                </div>
                <div class="title">
                    <span>商品详情</span>
                </div>

                <div class="theDetail">
                    <img src="@/assets/img/theDetail.jpg">
                </div>
            </div>
        </div>
        <div class="chooseGoods">
            <mt-popup
            v-model="popupVisible"
            position="bottom">
                <div class="buyPanel">
                    <div class="goodsInfo">
                        <div class="goodsPic">
                            <img :src="goodsDetail.PictureUrl.split('?')[0]">
                        </div>
                        <div class="goodsText">
                            <strong>￥{{goodsDetail.Price}}.0</strong>
                            <p>{{goodsDetail.Name}}</p>
                            <p>库存：10000</p>
                        </div>
                    </div>
                    <div class="goodsNum">
                        <p>数量</p>
                        <p>
                            <a href="javascript:;" @click="subNum">-</a>
                            <input type="number" :value="gNum">
                            <a href="javascript:;" @click="addNum">+</a>
                        </p>
                    </div>
                    <div class="confirm">
                        <a href="javascript:;" @click="closeGoods">确定</a>
                    </div>
                </div>
            </mt-popup>
        </div>
        <footer>
            <div class="iconA">
                <a href="javascript:;" @click="goto('Server')">
                    <i class="iconfont icon-kefu"></i>
                    <span>客服</span>
                </a>
                <a href="javascript:;" @click="goto('Cart')">
                    <i class="iconfont icon-cart"></i>
                    <span>购物车</span>
                </a>
                <a href="javascript:;">
                    <i class="iconfont icon-tuanduicankaoxian-"></i>
                    <span>收藏</span>
                </a>
            </div>
            <div class="buyA">
                <a href="javascript:;" @click="chooseGoods">加入购物车</a>
                <a href="javascript:;" @click="chooseGoods">立即购买</a>
            </div>
        </footer>
    </div>
</template>

<script>
import '@/sass/Detail.scss';
export default {
    data(){
        return {
            gId:'',
            goodsDetail:{PictureUrl:"http://img.tea7.com/0013244_0.jpeg?x-oss-process=image/resize,w_300"},
            picNum:[],
            currentPic:1,
            popupVisible:false,
            gNum:1
        }
    },
    methods:{
        handleChange(index) {
            this.currentPic = index*1 + 1;
        },
        back(){
            this.$router.back();
        },
        goto(name){
            this.$router.push({name});
        },
        chooseGoods(){
            this.popupVisible = true;
        },
        closeGoods(){
            this.popupVisible = false;
        },
        subNum(){
            if(this.gNum<=1){
                this.gNum = 1;
            }else{
                this.gNum--;
            }
        },
        addNum(){
            if(this.gNum>=99){
                this.gNum = 99;
            }else{
                this.gNum++;
            }
        }
    },
    created(){
        this.gId = this.$route.params.id;
        this.$axios({
            method:'get',
            url:`/dbapi/Product/GetProductBaseInfo`,
            params:{
                var: 92747.34230305992,
                Id: this.gId
            }
        }).then(res=>{
            this.goodsDetail = res.data;
            // 获取图片的序号
            let pNum = res.data.PictureUrl.split('_')[0].split('/')[3];
            let num = pNum.slice(-2)*1 -1;
            for(let i=0;i<5;i++){
                let obj = {};
                obj.id = i+1;
                num++;
                if(num<10){
                    num = '0' + num;
                }else if(num>=100){
                    num = '96';
                }
                obj.url = 'http://img.tea7.com/' + pNum.slice(0,-2) + num +'_0.jpeg';
                this.picNum.push(obj);
            }
        }).catch((err)=>{
            // Indicator.close();
            console.log(err);
        });
    },
    mounted(){
        // console.log(this.picNum);
    }
}
</script>

<style lang="scss" scoped>
    .page{
        background:#fff;
        &>header{
            height: 50px;
            width:100%;
            border-bottom:1px solid #e3e5e9;
            display:flex;
            justify-content: space-between;
            align-items: center;
            .mint-button--default.is-plain{
                border:none;
            }
            &>p{
                flex:1;
                height: 100%;
                display:flex;
                justify-content: space-around;
                a{
                    display:inline-block;
                    height: 100%;
                    line-height: 50px;
                }
                .active{
                    color:#b0352f;
                }
            }
        }
        footer{
            height: 54px;
            border-top:1px solid #ccc;
            display:flex;
            .iconA{
                flex:1;
                display:flex;
                a{
                    flex:1;
                    display:flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    border-right:1px solid #ccc;
                    i{
                        font-size:20px;
                    }
                    span{
                        font-size:10px;
                    }
                }
            }
            .buyA{
                flex:1;
                display:flex;
                a{
                    flex:1;
                    display: inline-block;
                    height: 100%;
                    line-height: 54px;
                    font-size:14px;
                    color:#fff;
                    text-align:center;
                    &:nth-child(1){
                        background:#D0BBA0;
                    }
                    &:nth-child(2){
                        background:#B1362F;
                    }
                }
            }
        }
    }
</style>
