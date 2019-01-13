<template>
  	<div class="page">
    	<mt-header title="短信登录" fixed>
			<mt-button icon="back" slot="left" @click="goto('back')"></mt-button>
			<mt-button slot="right">
				<span class="iconfont icon-kefu"></span>
			</mt-button>
    	</mt-header>
		<div>
			<mt-field placeholder="请输入手机号" type="tel" v-model="phone" class="phone" :attr="phoneAttr"></mt-field>
			<mt-field placeholder="请输入短信验证码" type="tel" v-model="captcha" class="captcha"></mt-field>
			<mt-button type="danger" size="normal" class="captchaBtn">获取手机验证码</mt-button>
			<mt-button type="danger" size="large" class="loginBtn">登录</mt-button>
			<div>
				<a href="javascript:;" class="codeLogin">
					<span class="iconfont icon-mima"></span>密码登录
				</a>
				<a href="javascript:;" class="quickReg" @click="goto('Reg')">
					<span class="iconfont icon-shouji"></span>快速注册
				</a>
			</div>
		</div>
  	</div>
</template>
<script>
	export default {
		data() {
			return {
				phoneAttr: {
					autofocus: "autofocus"
				},
				phone:'',
				captcha:''
			};
		},
		methods: {
			goto(name){
				if(name==='back'){
					this.$router.back();
				}else{
					this.$router.push({name});
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
.page {
  	padding: 0 0.9375rem;
}
.phone {
	margin-top: 5rem;
	border: 1px solid #ccc;
	border-radius: 0.3125rem;
}

.captcha {
	float: left;
	width: 60%;
	height: 2.9375rem;
	margin-top: 1.25rem;
	border: 1px solid #ccc;
	border-radius: 0.3125rem 0 0 0.3125rem;
}
.captchaBtn {
	height: 3rem;
	width: 40%;
	float: left;
	background-color: #b0352f;
	margin-top: 1.25rem;
	font-size: 0.8rem;
	border-radius: 0 0.3125rem 0.3125rem 0;
}
.loginBtn {
	height: 3rem;
	margin-top: 5.5rem;
	background-color: #b0352f;
	font-size: 0.8rem;
	font-weight: 700;
}
.codeLogin {
	float: left;
	font-size: 0.8rem;
	margin-top: 1.25rem;
	padding-left: 0.625rem;
	color: #222;
	span {
		font-size: 1.3rem;
		padding-right: 0.3125rem;
	}
}
.quickReg {
	float: right;
	font-size: 0.8rem;
	margin-top: 1.3rem;
	padding-right: 0.625rem;
	color: #222;
	span {
		font-size: 1.3rem;
		vertical-align: middle;
		padding-right: 0.3125rem;
	}
}
</style>
