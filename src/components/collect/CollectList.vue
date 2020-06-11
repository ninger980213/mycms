<template>
  <div>
    <div>
      <van-nav-bar
          title="我的收藏"  left-text="返回"  left-arrow  @click-left="onClickLeft"
        />
    </div>
    <ul id="ul1">
      <router-link :to="'/newDetails/'+item.articleId" class="ulli" v-for="item in collectLists" :key="item.articleId">
        <div class="top">
          <div class="top_img">
            <img :src="item.bannerImgUrl" alt />
          </div>
          <div class="lower1">{{item.title}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { getCollectionList } from "../../api/Cms-api.js";
export default {
  data() {
    return {
      collectLists: []
    };
  },
  methods: {
    collectList() {
      getCollectionList().then(res => {
        this.collectLists = res.rows;
        console.log(this.collectLists);
      });
    },
     onClickLeft() {
      this.$router.back();
    },
  },
  created() {
    this.collectList();
  },
  components: {
    getCollectionList
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#ul1 {
  height: 100px;
  width: 91%;
  margin: auto;
  background-color: white;
}
.ulli {
  border-bottom: 1px solid rgb(224, 222, 222);
}
/* 标题样式 */
.top {
  height: 60px;
  width: 100%;
  font-size: 15px;
  display: flex;
  margin: auto;
}
.top .top_img {
  width: 30%;
  height: 50px;
  margin-top: 10px;
}
.top .lower1 {
   font-size: 12px;
  width: 70%;
  margin-top: 10px;
  text-align: left;
  color: #000000;
  margin-left: 9px;
}
.top .top_img img {
  width: 100%;
  height: 100%;
}
li {
  margin: 7px;
}
</style>