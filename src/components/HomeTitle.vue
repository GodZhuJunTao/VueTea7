<template>
    <p class="home-title">
        <span><slot></slot></span>   
    </p>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .home-title{
        height: 40px;
        text-align:center;
        span{
            position:relative;
            font-size:14px;
            line-height:40px;
            font-weight:bolder;
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
