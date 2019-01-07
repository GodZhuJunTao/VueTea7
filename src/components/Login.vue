<template>
  <div class="page">
    <mt-header title="短信登录" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-field placeholder="请输入手机号" type="tel" v-model="phone" class="phone"></mt-field>
    <mt-field  placeholder="请输入短信验证码" type="tel" v-model="captcha" class="captcha">
       <p>获取手机验证码</p>
    </mt-field>
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
  margin-top: 80px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* .captcha {
  padding-right: none;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.captcha span {
  color: #fff;
  background-color: red;
} */
</style>
