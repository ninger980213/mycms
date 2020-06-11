<template>
  <div>
    <!-- 我是上传头像页面 -->
    <router-link :to="'/PersonalCenter/'">
      <van-nav-bar title="上传头像！" left-text="返回" left-arrow @click-left="onClickLeft" />
    </router-link>

    <van-cell-group title="请上传你的头像！">
      <van-uploader class="nos-1" v-model="fileList" multiple :max-count="1" />
    </van-cell-group>
    <button @click="nos">确认上传</button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { nos } from "../api/mine";

export default {
  data() {
    return {
      avatarfile: "",
      fileList: []
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },

    nos() {
      console.log(this.avatarfile);
      // debugger
      // 调用已封装好（已定义好）的函数
      // 传入参数，例如计算a+b=?  这里，this.fileList[0].file相当于a
      nos(this.fileList[0].file).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.nos-1 {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
</style>>