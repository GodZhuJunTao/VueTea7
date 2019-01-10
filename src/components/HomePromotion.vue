<template>
    <div class="promot">
        <p class="promot-title">
            <span><i class="iconfont icon-naozhong"></i>今日特价</span>
        </p>
        <div class="promot-action">
            <p>距离结束 :  <span>02</span> : <span>43</span> : <span>34</span></p>
            <div>
                <img src="../assets/img/promot.jpeg" alt="">
                <div>
                    <h4>青花碧螺春4罐400g</h4>
                    <div>
                        <p><del>￥179.0</del><strong>￥49.0</strong></p>
                        <p><span>仅剩6份</span><a href="javascript:;">立即抢购</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.promot{
    display:flex;
    flex-direction:column;
    align-items:center;
    .promot-title{
        height: 40px;
        width: 100%;
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
    .promot-action{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        box-sizing: border-box;
        width:90%;
        height:138px;
        background:#fff;
        border-radius:5px;
        padding:14px;
        &>p{
            font-size:12px;
            line-height: 24px;
            span{
                display:inline-block;
                padding:0 8px;
                border-radius:7px;
                color:#fff;
                background:#000;
            }
        }
        &>div{
            height: 80px;
            display:flex;
            justify-content: space-between;
            img{
                height: 100%;
            }
            &>div{
                flex:1;
                display:flex;
                flex-direction:column;
                justify-content: space-between;
                padding-left:5px;
                h4{
                    font-size:14px;
                    line-height:22px;
                }
                div{
                    display:flex;
                    flex-direction:column;
                    justify-content: space-between;
                    align-items:flex-end;
                    p:nth-child(1){
                        margin-bottom:8px;
                    }
                    del,span{
                        font-size:8px;
                        color:#9B9B9B;
                    }
                    strong{
                        font-size:10px;
                        color:#A01019;
                    }
                    a{
                        display: inline-block;
                        width:72px;
                        height: 26px;
                        background:#FFDF01;
                        border-radius:5px;
                        font-size:12px;
                        color:#000;
                        line-height: 26px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
