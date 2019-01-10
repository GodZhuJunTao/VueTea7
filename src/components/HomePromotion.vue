<template>
    <p class="promo-title">
        <span><i class="iconfont icon-naozhong"></i>今日特价</span>
    </p>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .promo-title{
        height: 40px;
        text-align:center;
        span{
            position:relative;
            font-size:16px;
            line-height:40px;
            i{
                color:#b0352f;
                margin-right:3px;
                font-size:22px;
            }
        }
        span::before,span::after{
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: block;
            background: #d4c0a7;
            top: 50%;
            margin-top: -4px;
        }
        span::before{
            left:-15px;
        }
        span::after{
            right:-15px;
        }
    }
</style>
