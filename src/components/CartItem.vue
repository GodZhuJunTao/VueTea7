<template>
    <li class="goods-item">
        <div class="goods-select">
            <label :class="['iconfont','c-label',{'icon-xianshi_xuanze':!data.selected,'icon-xianshi_xuanzetianchong':data.selected}]" @click="select">
            </label>
        </div>
        <div class="goods-img">
            <a href="javascript:;">
                <img :src="data.img" alt="">
            </a>
        </div>
        <div class="goods-details">
            <p class="goods-title"><a href="javascript:;">{{data.name}}</a></p>
            <p class="goods-genre">{{data.genre}}</p>
            <div class="goods-price-num">
                <div class="goods-price"><span>￥{{data.price}}.0</span></div>
                <div class="goods-num">
                    <a href="javascript:;" class="goods-add" @click="changeNum('sub')">-</a>
                    <span>{{data.num}}</span>
                    <a href="javascript:;" class="goods-minus" @click="changeNum('add')">+</a>
                </div>
            </div>
        </div>
    </li> 
</template>

<script>
export default {
    props:{
        idx:[Number,String]
    },
    computed:{
        data(){
            return this.$store.state.cart.cartList[this.idx];
        }
    },
    methods:{
        select(){
            this.$store.commit('selectItem',{checked:!this.data.selected,idx:this.idx})
        },
        changeNum(alter){
            let _num = this.data.num;
            if(alter === 'add'){
                if(_num>=99){
                    _num=99;
                    return;
                }else{
                    _num++;
                }
            }else{
                if(_num<=1){
                    _num = 1;
                    return;
                }else{
                    _num--;
                }
            }
            this.$store.commit('changeNum',{num:_num,idx:this.idx})
        },
    }
}
</script>

<style lang="scss" scoped>
    .goods-item{
        display: flex;
        align-items: center;
        height:80px;
        padding:10px;
        border-bottom: 1px solid #ccc;
        background-color:#fff;
        input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
        input[type="number"]{
            -moz-appearance: textfield;
        }
        .goods-select{
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
        .goods-details{
            flex:1;
            .goods-title{
                font-size: 13px;
                a{
                    color: #000;
                    font-size:14px;
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
                        font-size:14px;
                    }
                }
                .goods-num{
                    a{
                        display: inline-block;
                        background-color: rgb(230, 227, 227);
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 20px;
                        font-size:16px;
                    }
                    span{
                        display:inline-block;
                        font-size:14px;
                        margin: 0 10px;
                        height:20px;
                        width:20px;
                        text-align: center;
                        vertical-align: top;
                        line-height: 20px;
                    }
                }
            }
        }
    }
</style>

