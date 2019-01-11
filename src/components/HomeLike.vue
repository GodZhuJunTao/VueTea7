<template>
    <div class="home-like">
        <HomeTitle>猜你喜欢</HomeTitle>
        <ul class="like-list">
            <li v-for="item in likeList" :key="item.ProductId">
                <img :src="item.DefaultPicSrc.split('?')[0]"/>
                <h4>{{item.ProductName}}</h4>
                <p>￥{{item.Price}}.0</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            likeList:[]
        }
    },
    created(){
        this.$axios({
            method:'post',
            url:`/dbapi/Product/GetProductRecommend`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data:{
                groupName: 'IndexGuessYouLike',
                notproductIds: ''
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              ret = ret.slice(0,-1);
              return ret
            }]
        }).then(res=>{
            let data = res.data;
            this.likeList = data;
            console.log(this.likeList);
        }).catch((err)=>{
            Indicator.close();
            console.log(err);
        });
    }
}
</script>

<style lang="scss" scoped>
    .home-like{
        margin-top:9px;
        background:#fff;
        .like-list{
            padding:0 9px;
            display: flex;
            justify-content: space-between;
            flex-wrap:wrap;
            li{
                height: 231px;
                width: 146px;
                display: flex;
                flex-direction: column;
                img{
                    display:block;
                    width:100%;
                }
                h4{
                    font-size:12px;
                    line-height: 14px;
                    color:#343434;
                    height: 48px;
                    margin-top:8px;
                }
                p{
                    font-size:12px;
                    color:#A41F24;
                }
            }
        }
    }
</style>

