<template>
    <div class="commend">
        <HomeTitle>小七推荐</HomeTitle>
        <ul class="commend-list">
            <li v-for="item in commendList" :key="item.title">
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.description}}</p>
                </div>
                <img :src="item.img"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            commendList:[
                {
                    title:'秋冬暖心茶',
                    description:'红茶当季',
                    img:require('@/assets/img/commend1.jpeg')
                },
                {
                    title:'茶礼新风尚',
                    description:'热门茶礼',
                    img:require('@/assets/img/commend2.jpeg')
                },
                {
                    title:'品绿春常在',
                    description:'鲜灵绿茶',
                    img:require('@/assets/img/commend3.jpeg')
                },
                {
                    title:'匠心茶具汇',
                    description:'就爱淘“器”',
                    img:require('@/assets/img/commend4.jpeg')
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .commend{
        display:flex;
        width:100%;
        flex-direction:column;
        justify-content:space-around;
        // height: 240px;
        background: #fff;
        .commend-list{
            display:flex;
            flex-wrap:wrap;
            li{
                box-sizing: border-box;
                width: 50%;
                padding:4px;
                position:relative;
                div{
                    position:absolute;
                    top:0;
                    left:0;
                    padding:12px 0 0 8px;
                    h4{
                        font-size:12px;
                        margin-bottom:14px;
                    }
                    p{
                        font-size:10px;
                        color:#757575;
                    }
                }
                img{
                    width:100%;
                }
            }
        }
    }
</style>
