<template>
  <!-- 注册的页面 -->
  <!-- 在表单中，每个 Field 组件 代表一个表单项，使用 Field 的rules属性定义校验规则 -->
  <div>
    <router-link :to="'/PersonalCenter/'">
      <van-nav-bar title="进行注册！" left-text="返回" left-arrow @click-left="onClickLeft" />
    </router-link>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="loginName"
        name="loginName"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="userName"
        type="userName"
        name="userName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field name="sex" label="性别">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
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
      <!-- 个人简介 -->
      <van-field v-model="remark" type="remark" name="remark" label="个人简介" placeholder="个人简介" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { registrat } from "../api/mine";
import { vcode } from "../api/mine";

export default {
  data() {
    return {
      loginName: "",
      userName: "",
      password: "",
      sex: "",
      radio: '1',
      phonenumber: "",
      code: "",
      remark: "",
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
    // 提交
    onSubmit(values) {
      console.log("submit", values);

      registrat(values).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
</style>