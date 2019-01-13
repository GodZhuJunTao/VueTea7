<template>
    <div class="page">
        <header>
            <mt-header title="购物车" class="cart-title" fixed>
                <mt-button slot="right">编辑</mt-button>
                <mt-button slot="right"><span class="iconfont icon-xiaoxizhongxin"></span></mt-button>
            </mt-header>
        </header>
        <div class="main">
            <div class="goods-item">
                <div class="goods-select">
                    <span class="iconfont icon-right-line"></span>
                </div>
                <div class="goods-img">
                    <a href="#">
                        <img src="../assets/img/home_cate2.jpg" alt="">
                    </a>
                </div>
                <div class="goods-details">
                    <p class="goods-title"><a href="#">洞庭山原产-碧螺春500g-清爽绿茶大份量礼盒</a></p>
                    <p class="goods-genre">清香型</p>
                    <div class="goods-price-num">
                        <div class="goods-price"><span>￥261.0</span></div>
                        <div class="goods-num">
                            <span class="goods-add">+</span>
                            <input type="number" value="1"/>
                            <span class="goods-minus">－</span>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
        <BottomBar/>
    </div>
</template>
<script>
import BottomBar from './BottomBar';
export default {
    components:{BottomBar},
}
</script>
<style lang="scss" scoped>
    .page{
        &>header{
            height: 50px;
        }
        .cart-title{
            font-size: 16px;
        }
        .icon-xiaoxizhongxin{
            font-size: 22px;
            margin-left: 30px;
        }

        .main{
            background-color: #f5f5f5;
            .goods-item{
                display: flex;;
                height:80px;
                padding:10px;
                border-bottom: 1px solid #ccc;
                 background-color:#fff;
                .goods-select{
                    height: 70px;
                    width: 30px;
                    line-height: 60px;
                }
                .goods-img{
                    width: 80px;
                    padding: 0 5px;
                    img{
                        height: 70px;
                        width: 70px;
                        border: 1px solid #ccc;
                    }
                }
                .goods-title{
                    font-size: 13px;
                    width:200px;
                    a{
                        color: #000;
                    }    
                }
                .goods-genre{
                    line-height:16px;
                    font-size: 10px;
                    color: rgb(158, 156, 156);
                }
                .goods-price-num{
                    display:flex;
                    justify-content: space-between;
                    height: 20px;
                    padding-top: 11px;
                    .goods-price{
                        span{
                            color: rgb(160, 14, 14);
                        }
                    }
                    .goods-num{
                        color:rgb(187, 178, 178);
                        span{
                            display: inline-block;
                            background-color: rgb(230, 227, 227);
                            height: 20px;
                            width: 20px;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 20px;

                        }
                        input{
                            display:inline-block;
                            margin: 0 10px;
                            height:20px;
                            width:20px;
                            text-align: center;
                        }
                    }
                }
            }
        }
        
    }
</style>