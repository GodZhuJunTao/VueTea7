<template>
  <div class="page">
    <mt-header title="短信登录" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"><span class="iconfont icon-kefu"></span></mt-button>
    </mt-header>
    <div>
      <mt-field placeholder="请输入手机号" type="tel" v-model="phone" class="phone" :attr="phoneAttr"></mt-field>
      <mt-field placeholder="请输入短信验证码" type="tel" v-model="captcha" class="captcha"></mt-field>
      <mt-button type="danger" size="normal" class="captchaBtn">获取手机验证码</mt-button>
      <mt-field placeholder="请设置密码" type="password" v-model="password" class="setPassword"></mt-field>
      <mt-field placeholder="请再次输入密码" type="password" v-model="againPassword" class="againPassword"></mt-field>
      <mt-button type="danger" size="large" class="loginBtn">注册</mt-button>
      <div class="protocol">
        <span href="#" class="codeLogin">注册即视为同意</span>
        <a href="#" class="quickReg">《服务协议》</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneAttr:{
        autofocus:'autofocus'
      }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.page{
  padding: 0 .9375rem;
}
.phone {
  margin-top: 3rem;
  border: 1px solid #ccc;
  border-radius: .3125rem;
}

.captcha {
  float: left;
  width: 60%;
  height: 2.9375rem;
  margin-top: 1.25rem;
  border: 1px solid #ccc;
  border-radius: .3125rem 0 0 .3125rem;
}
.captchaBtn {
  height: 3rem;
  width: 40%;
  float: left;
  background-color: #b0352f;
  margin-top: 1.25rem;
  font-size: .875rem;
  border-radius:  0 .3125rem .3125rem 0;
}
.setPassword{
    border: 1px solid #ccc;
    margin-top: 5.5rem;
    border-radius: .3125rem;
}
.againPassword{
    border: 1px solid #ccc;
    margin-top: 1.25rem;
    border-radius: .3125rem;
}
.loginBtn{
    height:3rem;
    margin-top: 1.25rem;
    background-color: #b0352f;
}
.protocol{
    margin-top: 1.25rem;
    font-size:.8125rem;
    a{
        text-decoration: underline;
        color: #b0352f;
    }
}

</style>

