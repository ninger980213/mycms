<template>
  <!-- 首页 -->

  <div class="hello">
    <!-- 顶部 -->
    <div  class="top">
      <router-link to="/subscription" class="my"><van-icon  class="div-icon" name="bars" size="30px" tag="span"/></router-link>
      <div class="inputBox">
        <router-link to="/searchpage">
        <van-search v-model="value" shape="round" background="#474777" placeholder="请输入搜索关键词"  class="search">
        </van-search>
        </router-link>
      </div>
    </div>
    <!-- 轮播图 -->
    <swipe></swipe>
    <!--   内容部分 -->
    <jpurnalism></jpurnalism>
  </div>
</template>

<script>
import swipe from "../components/homepage/Swipe";
import jpurnalism from "../components/homepage/JournaLism";
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      active: ""
    };
  },
  components: {
    jpurnalism,
    swipe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  display: flex;
  background: rgb(71, 71, 119);
}
.inputBox {
      width: 85%;
}
.hello{
  padding-bottom: 60px;
}
.my {
  flex-grow: 1;
  display: flex;
  align-items: center;
  
}
.div-icon {
    margin: 0 auto;
    color: #cccccc;
}



</style>
