<template>
  <div class="page">
    <div class="MineTop">
      <mt-button size="normal" class="Btn">登录 / 注册</mt-button>
    </div>
    <div class="MineCentent">
      <ul class="uList">
        <li v-for="item in list" :key="item.name">
          <p>{{item.num}}</p>
          <p :class="{active:true}">{{item.name}}</p>
        </li>
      </ul>
      <div class="order">
        <p class="myOrder">
          <span class="iconfont icon-icon_order"></span>我的订单
        </p>
        <p class="allOrder">全部订单
          <span class="iconfont icon-right-line"></span>
        </p>
      </div>
      <div class="todoList">
        <ul>
          <li v-for="item in todoTbas" :key="item.text">
            <span :class="item.icon"></span>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <ul class="other">
        <li v-for="item in otherTbas" :key="item.text">
            <p><span :class="item.icon"></span>{{item.text}}</p>
            <i class="iconfont icon-right-line"></i>
        </li>
      </ul>
    </div>
    <HomeTitle class="HomeTitle">猜你喜欢</HomeTitle>
    <BottomBar/>
  </div>
</template>
<script>
import BottomBar from "./BottomBar";
import HomeTitle from './HomeTitle';
export default {
  data() {
    return {
      list: [
        {
          name: "茶币",
          num: "0"
        },
        {
          name: "优惠券",
          num: "0"
        },
        {
          name: "收藏",
          num: "0"
        },
        {
          name: "足迹",
          num: "1"
        }
      ],
      todoTbas:[
          {
              text:'待付款',
              icon:'iconfont icon-icon'
          },
          {
              text:'待发货',
              icon:'iconfont icon-daifahuo'
          },
          {
              text:'待收货',
              icon:'iconfont icon-daishouhuo'
          },
          {
              text:'待评价',
              icon:'iconfont icon-daipingjia'
          }
          
      ],
      otherTbas:[
          {
              text:'地址管理',
              icon:'iconfont icon-dizhi-01'
          },
           {
              text:'我的客服',
              icon:'iconfont icon-kefu'
          },
           {
              text:'意见反馈',
              icon:'iconfont icon-yijianfankui'
          },
           {
              text:'认证茶师',
              icon:'iconfont icon-personalcenter'
          },
           {
              text:'设置',
              icon:'iconfont icon-shezhi'
          }
      ]
    };
  },
  methods: {},

  components: { BottomBar,HomeTitle }
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  font-size: 13px;
  margin-bottom: 60px;
  .HomeTitle{
      background-color: #ffffff;
      margin-top:5px;
      font-weight: 100;
  }
}
.MineTop {
  display: flex;
  justify-content: center;
  height: 25%;
  background: url(../assets/img/cbtopbg.jpg);
  .Btn {
    height: 30px;
    width: 90px;
    background: rgba(255, 181, 0, 0.9);
    color: #fff;
    align-self: center;
    font-size: 12px;
  }
}
.MineCentent {
  .uList {
    display: flex;
    padding: 0 12px;
    background-color: #ffffff;
    li {
      flex: 1;
      flex-direction: column;
      text-align: center;
      p {
        padding: 5px 0;
      }
      .active {
        color: rgb(148, 144, 144);
      }
    }
  }
  .order {
    display: flex;
    padding: 10px 12px;
    justify-content: space-between;
    margin-top: 10px;
    background-color: #ffffff;
    .myOrder {
      span {
        padding-right: 10px;
        color: rgb(207, 23, 23);
      }
    }
  }
  .todoList {
    display: flex;
    background-color: #ffffff;
    ul{
         display: flex;
        li{
            flex: 1;
            flex-direction: column;
            text-align: center;
            padding: 10px 20px;
        }
    }
  }
  .other{
       margin-top:10px;
      background-color: #ffffff;
      li{
        display: flex;
        justify-content: space-between;
        padding: 12px 12px;
        border-top:1px solid #cccdda;
        p{
          span{
            padding-right: 10px;
            color: rgb(207, 23, 23); 
            font-size: 18px;
            font-weight: 900;
          }
        }
      }
  }
}
</style>
