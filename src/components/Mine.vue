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
          <li>
            <span class="iconfont icon-leaves01"></span>
            <p>待付款</p>
          </li>
        </ul>
      </div>
    </div>
    <BottomBar/>
  </div>
</template>
<script>
import BottomBar from "./BottomBar";
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
      ]
    };
  },
  methods: {},

  components: { BottomBar }
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  font-size: 13px;
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
    padding: 0 12px;
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
  }
}
</style>
