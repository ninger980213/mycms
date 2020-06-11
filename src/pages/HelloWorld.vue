<template>
  <!-- 首页 -->

  <div class="hello">
    <!-- 顶部 -->
    <div    class="top">
      <router-link to="/subscription" class="div1"><van-icon  class="div-icon" name="bars" size="30px" tag="span"/></router-link>
      <div>
        <router-link to="/searchpage">
        <van-search v-model="value" shape="round" background="#474777" placeholder="请输入搜索关键词"  class="search">
        </van-search>
        </router-link>
      </div>
      <!-- <router-link to="/subscription">
      <van-icon  class="div-icon" name="bars" size="30px" tag="span"/>
      </router-link> -->
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
.hello{
  padding-bottom: 60px;
}
.div1 {
  float: left;
  background-color: #474777;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  height: 37px;
  padding-top: 17px;
  padding-left: 9px;
  font-size: 17px;
  color: #FDF;
  font-family: "\6977\4F53";
}



</style>
