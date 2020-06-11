<template>
  <div class="box">
    <!-- 我的页面 -->
    <span class="topTitle">我的</span>
    <div>
      <div class="content">
        <!-- 点击头像跳转到编辑资料页面 -->
        <router-link :to="'/nos'">
          
            <van-image round class="imageTop" :src="user.avatar" />
        </router-link>
        <router-link :to="'/CheckMine'">
          <div class="rightTop">
            <van-cell class="pTitle" title="昵称:" :value="user.userName" />
            <van-cell class="pTitle" title="简介~" :value="user.remark" />
          </div>
        </router-link>
      </div>
      <!-- 收藏 -->
      <div class="cells">
        <van-cell title="修改信息" is-link to="/editorialmaterial" />
        <van-cell title="我的收藏" is-link to="/collectList" />
        <van-cell title="退出登录" is-link @click="logout" />
      </div>
      <!-- 底部按钮 -->
      <div class="bottomBox">
        <!-- 点击注册 -->
        <router-link :to="'/Registrat/'">
          <span class="bottomBar">点击注册</span>
        </router-link>
        <!-- 直接登录 -->
        <router-link :to="'/Login/'">
          <span class="bottomBar">点击登录</span>
        </router-link>
        <!-- 找回密码 -->
        <router-link :to="'/PassWord/'">
          <span class="bottomBar">找回密码</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { info } from "../api/mine";
import { nos } from "../api/mine";
import { logout } from "../api/mine";

export default {
  data() {
    return {
      isLogin: false,
      src: "",
      avatarfile: "",
      userName: "",
      avatar: ""
    };
  },

  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      //是否是登录状态
      // 是登录
      if (isLogin) {
        this.setData({
          isLogin: true
        });
      } else {
        //1.没有登录
        //2.加载顺序不同没有反应过来
        loginCallback = isLogin => {
          this.setData({
            isLogin: false,
            avatar: ""
          });
        };
      }
    },

    // 退出登录
    logout() {
      // 轻提示   已退出
      Toast.success("成功退出");
      // debugger;
      // 调用接口 退出
      logout().then(res => {
        console.log(res);
      });
    }
  },

  // 计算属性
  computed: {
    user() {
      return this.$store.state.userinfo;
    }
  }
};
</script>

<style scoped>
.box {
  background-image: url("../assets/bg.jpg");
  position: initial;
}
.topTitle {
  margin-left: 139px;
  /* border:1px solid red */
}
.content {
  width: 92%;
  height: 118px;
  border: 1px dashed skyblue;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
  background-image: url("../assets/bg.jpg");
}
.imageTop {
  width: 50px;
  height: 50px;
  border: 1px solid;
  margin-left: 12px;
  margin-top: 34px;
  position: absolute;
}
.rightTop {
  float: right;
  margin-right: 32px;
  width: 63%;
  height: 70px;
  margin-top: 27px;
  opacity: 0.5;
}
.pTitle {
  padding: 5px;
}
.cells {
  opacity: 0.8;
}
/* 底部功能按钮 */
.bottomBox {
  width: 300px;
  height: 50px;
  /* border: 1px solid red; */
  margin-left: 20px;
  margin-top: 185px;
}
.bottomBar {
  float: left;
  margin-left: 17px;
  color: red;
  border-bottom: 1px solid;
}
</style>
