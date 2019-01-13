<template>
    <ul class="cate-list">
        <li v-for="item in goodslist" :key="item.Id" @click="toDetail(item.Id)">
            <img :src="item.PictureUrl.split('?')[0]"/>
            <h4>{{item.Name}}</h4>
            <p>￥{{item.Price}}.0</p>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            goodslist:[]
        }
    },
    computed:{
        gId(){
            return this.$store.state.categoryId
        }
    },
    methods:{
        getGoods(){
            this.$axios({
                method:'get',
                url:`/dbapi/Product/GetProducts`,
                params:{
                    PageIndex: 0,
                    PageSize: 10,
                    ParentCategoryId: this.gId,
                    ProductTagIdsStr: '',
                    ProductTypeId: 1
                }
            }).then(res=>{
                let data = res.data;
                this.goodslist = data.Products;
            }).catch((err)=>{
                console.log(err);
            });
        },
        toDetail(id){
            this.$router.push({path:'/detail/'+id});
        }
    },
    created(){
        this.getGoods();
    },
    watch: {
        gId: function (val, oldVal) {
            // console.log('new: %s, old: %s', val, oldVal);
            this.getGoods();
        }
    },
}
</script>

<style lang="scss">
    .cate-list{
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
</style>