<template>
  <!-- 我是查看个人信息的页面 -->
  <div>
    <router-link :to="'/PersonalCenter/'">
      <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    </router-link>
    <van-image round class="imageTop" :src="user.avatar" />
    <van-cell title="用户名" :value="user.loginName" />
    <van-cell title="昵称" :value="user.userName" />
    <van-cell title="性别" :value="user.sex" />
    <van-cell title="手机号" :value="user.phonenumber" />
    <van-cell title="个人简介" :value="user.remark" />
  </div>
</template>

<script>
import { Toast } from "vant";
import { info } from "../api/mine";

export default {
  data() {
    return {
      loginName: "",
      userName: "",
      password: "",
      sex: "",
      radio: "1",
      phonenumber: "",
      code: "",
      remark: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    info(values) {
      console.log(values);
      // 引入已封装好的
      debugger;
      info(this.values).then(res => {
        console.log(res);
      });
    }
  },

  // 哪里需要哪里调
  // 计算属性
  computed: {
    user() {
      return this.$store.state.userinfo;
    }
  }
};
</script>
<style scoped>
.imageTop {
  width: 100px;
  height: 100px;
  margin-left: 110px;
  border-radius: 50%;
  border: 1px solid skyblue;
}
</style>