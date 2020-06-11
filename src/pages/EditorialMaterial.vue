<template>
  <div class="box">
    <!-- 编辑资料页面 -->
    <div class="page-top">
      <router-link :to="'/PersonalCenter'">
        <van-nav-bar title="修改资料！" left-text="返回" left-arrow />
      </router-link>
    </div>
    <!-- 修改个人信息 -->
    <van-cell-group title="修改个人信息">
      <!-- 表单 -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="loginName"
          name="loginName"
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
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
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
        <!-- 个人简介 -->
        <van-field v-model="remark" type="remark" name="remark" label="个人简介" placeholder="个人简介" />
        <!-- 提交 -->
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </van-cell-group>
  </div>
</template>

<script>

import { Toast } from "vant";
import { update } from "../api/mine";

export default {
  data() {
    return {
      loginName: "",
      password: "",
      userName: "",
      sex: "",
      radio: "1",
      phonenumber: "",
      remark: "",
    }
  },
  methods: {
    // 提交
    onSubmit(values) {
      console.log("submit", values);

      update(values).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 600px;
}
</style>>