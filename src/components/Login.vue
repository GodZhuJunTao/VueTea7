<template>
  <div class="page">
    <mt-header title="短信登录" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <mt-field placeholder="请输入手机号" type="tel" v-model="phone" class="phone"></mt-field>
      <mt-field placeholder="请输入短信验证码" type="tel" v-model="captcha" class="captcha"></mt-field>
      <mt-button type="danger" size="normal" class="captchaBtn">获取手机验证码</mt-button>
      <mt-button type="danger" size="large" class="loginBtn">登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
.phone {
  margin-top: 5rem;
  border: 1px solid #ccc;
  border-radius: .3125rem;
}

.captcha {
  float: left;
  width: 65%;
  height: 2.9375rem;
  margin-top: 1.25rem;
  border: 1px solid #ccc;
  border-radius: .3125rem 0 0 .3125rem;
}
.captchaBtn {
  height: 3rem;
  width: 35%;
  float: left;
  margin-top: 1.25rem;
  font-size: .875rem;
  border-radius:  0 .3125rem .3125rem 0;
}
.loginBtn{
    height:3rem;
    margin-top: 5.5rem
}
</style>
