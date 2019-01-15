<template>
    <div class="page">
        <header>
            <mt-header title="购物车" class="cart-title" fixed>
                <mt-button slot="right">编辑</mt-button>
                <mt-button slot="right"><span class="iconfont icon-xiaoxizhongxin"></span></mt-button>
            </mt-header>
        </header>
        <div class="main">
            <ul>
                <li is="CartItem" v-for="(item,idx) in cartList" :key="item.id" :data="item" :idx="idx"></li>
            </ul>
        </div>
        <footer>
            <div class="operation">
                <label class="c-label">
                    <input type="checkbox" class="checkAll" v-model="checkAll">
                    <i  :class="['iconfont',{'icon-xianshi_xuanze':!checkAll,'icon-xianshi_xuanzetianchong':checkAll}]"></i>
                    <span>全选（0）</span>
                </label>
                <a href="javascript:;">去结算</a>
            </div>
            <BottomBar/>
        </footer>
    </div>
</template>
<script>
import CartItem from './CartItem';
import BottomBar from './BottomBar';
import '@/sass/cart.scss';
export default {
    data(){
        return {
            // checkAll:false,
        }
    },
    computed:{
        cartList(){
            return this.$store.state.cart.cartList
        },
        checkAll:{
            get(){
                return this.cartList.every(item=>item.selected);
            },
            set(checked){
                this.$store.commit('selectItem',{checked});
            }
        }
    },
    components:{BottomBar,CartItem},
    created(){
        let arr = this.cartList;
        this.$store.commit('acquireCartList',arr);
    }
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
        }
        
    }
</style>