<template>
  <!-- 登录的页面 -->
  <div>
    <div class="page-top">
      <router-link :to="'/PersonalCenter/'">
        <van-nav-bar title="欢迎登录！" left-text="返回" left-arrow />
      </router-link>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        type="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field v-model="rememberMe" name="rememberMe" label="记住我">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="true">是</van-radio>
            <van-radio name="false">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { login } from "../api/mine";

export default {
  data() {
    return {
      isLogin:false,
      username: "",
      password: "",
      rememberMe: "",
      radio: "1",
      code: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onSubmit(values) {
      console.log("submit", values);
      // debugger
      login(values).then(res => {
        console.log(res);
        // 判断登录是否成功
        if (res.code == 0) {
          // 成功跳转到首页
          localStorage.setItem('islogin',true)
          Toast.success('登录成功');
          this.$router.push("/helloworld");
        } else if(res.code == 500) {
          // code == 500 提示错误，重新加载该页面
           localStorage.setItem('islogin',false)
          Toast.fail('用户名或密码错误');
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>
<style scoped>
</style>