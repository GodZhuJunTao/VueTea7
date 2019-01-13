<template>
    <div class="home-banner">
        <div class="carousel">
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in recommend" :key="item.id" class=""  @click.native="toDetail(item.gId)">
                    <img :src="item.url"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>  
        <ul class="icon-nav">
            <li v-for="tab in iconNavTabs" :key="tab.name">
                <a href="javascript:;">
                    <img :src="tab.iconPic">
                    {{tab.name}}
                </a>
            </li>
        </ul>
        <div class="headline">
            <div class="news"></div>
            <div class="news-banner">
                <ul ref="newsUl">
                    <li v-for="item in  headlineNews" :key="item.idx"><a href="javascript:;">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            recommend:[
                {
                    id:1,
                    url:require('@/assets/img/banner1.jpeg'),
                    gId:2312
                },
                {
                    id:2,
                    url:require('@/assets/img/banner2.jpeg'),
                    gId:2085
                },
                {
                    id:3,
                    url:require('@/assets/img/banner3.jpeg'),
                    gId:2303
                },
                {
                    id:4,
                    url:require('@/assets/img/banner4.jpeg'),
                    gId:3004
                },
            ],
            iconNavTabs:[
                {
                    iconPic:require('@/assets/img/icon_nav1.png'),
                    name:'自饮茶'
                },
                {
                    iconPic:require('@/assets/img/icon_nav2.png'),
                    name:'茶具'
                },
                {
                    iconPic:require('@/assets/img/icon_nav3.png'),
                    name:'茶礼盒'
                },
                {
                    iconPic:require('@/assets/img/icon_nav4.png'),
                    name:'领福利'
                },
                {
                    iconPic:require('@/assets/img/icon_nav5.png'),
                    name:'官方验证'
                },
            ],
            headlineNews:[
                {
                    title:"岩茶为何不提春茶概念",
                    idx:0
                },
                {
                    title:"重要公告|真假客服官方验证功能上线",
                    idx:1
                }
            ]
        }
    },
    methods:{
        changeNews(){
            var ulTimer;
            clearInterval(ulTimer);
            ulTimer = setInterval(()=>{
                var prevItem = this.headlineNews[0];
                this.headlineNews.shift();
                this.headlineNews.push(prevItem);
                if(this.$refs.newsUl){
                    this.$refs.newsUl.style.top = 0;
                    var newsTimer;
                    clearInterval(newsTimer);
                    newsTimer = setInterval(()=>{
                        if(this.$refs.newsUl){
                            var cur = parseInt(getComputedStyle(this.$refs.newsUl,false).top);
                            if(cur > -16){
                                this.$refs.newsUl.style.top = cur - 1 + "px";
                            }else{
                                clearInterval(newsTimer);
                            }
                        }else{
                            clearInterval(newsTimer);
                        }
                    },30);
                }else{
                    clearInterval(ulTimer);
                }
            },4000);
        },
        toDetail(id){
            this.$router.push({path:'/detail/'+id});
        }
    },
    mounted(){
        this.changeNews();
        
    }
}
</script>

<style lang="scss" scoped>
.home-banner{
    background: #fff;
    margin-bottom:10px;
    .carousel{
        height: 140px;
        .mint-swipe-item img{
            width:100%;
        }
    }
    .icon-nav{
        display: flex;
        justify-content:space-around;
        height: 60px;
        padding:15px 0;
        li{
            display: flex;
            justify-content:space-between;
            flex-direction:column;
            a{
                font-size:12px;
                text-align:center;
                img{
                    display:block;
                    height: 32px;
                    width: 32px;
                    padding:0 13px 10px;
                }
            }
        }
    }
    .headline{
        display:flex;
        height: 16px;
        padding:10px 6px;
        .news{
            height: 16px;
            width: 64px;
            margin-right:13px;
            background:url(../assets/img/headline.png) no-repeat center center;
            background-size: contain;
        }
        .news-banner{
            height: 16px;
            flex:1;
            overflow: hidden;
            position:relative;
            ul{
                position:absolute;
                top:0;
                left:0;
                li{
                    height: 16px;
                    a{
                        vertical-align:top;
                        font-size:12px;
                        line-height: 16px;
                    } 
                } 
            }
        }
    }
}
</style>
