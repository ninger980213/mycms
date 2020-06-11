<template>
  <div>
    <!-- 我是找回密码页面 -->
    <div class="page-top">
      <router-link :to="'/PersonalCenter/'">
        <van-nav-bar title="找回密码！" left-text="返回" left-arrow />
      </router-link>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="loginName"
        type="loginName"
        name="loginName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="新的密码"
        placeholder="新的密码"
        :rules="[{ required: true, message: '请填写新的密码' }]"
      />
      <van-field
        v-model="phonenumber"
        type="phonenumber"
        name="phonenumber"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <!-- 短信验证码 -->
      <van-field v-model="code" name="code" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="button" @click="vcode">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 20px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { vcode, forget } from "../api/mine";

export default {
  data() {
    return {
      loginName: "",
      password: "",
      phonenumber: "",
      code: "",
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    // 验证码的函数
    vcode(phonenumber) {
      console.log(this.phonenumber);
      // 引入已封装好的
      vcode(this.phonenumber).then(res => {
        console.log(res);
      });
    },
    onSubmit(values) {
      console.log("submit", values);
      // debugger
      forget(values).then(res => {
        console.log(res);
        Toast.success('提交成功');
        this.$router.push("/login")
      });
    }
  }
};
</script>


<style scoped>
</style>
