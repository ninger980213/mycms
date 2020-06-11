<template>
  <div>
    <div>
      <div class="top">
        <van-nav-bar
          title="新闻"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
        >
         <template #right>
          <van-icon name="star" size="18"  @click="getCollections" :class="{'active': active}" />
        </template>
        </van-nav-bar>
      </div>
      <div class="box">
        <div>
          <span>{{data.title}}</span>
        </div>
        <p>来自{{data.articleSource}}</p>
        <section>
          <p v-html="data.content" class="content">{{data.content}}</p>
        </section>
      </div>
      <div>
        <div>
          <div>
            <div class="bottom">
              <van-icon name="thumb-circle-o" title="点赞" />
              <van-icon name="star-o" />
              <van-icon name="smile-comment-o" />
            </div>
            <div class="bottomIcon">
              <span @click="getLike">点赞</span>
              <span @click="getCollections" :class="{'active': active}">收藏</span>
              <span>评论</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Journalismlist, getCollection } from "../../api/Cms-api.js";
export default {
  props: {
    articleId: [Number]
  },
  data() {
    return {
      active: ""
    };
  },
  computed: {
    //拿到mutations
    data() {
      return this.$store.state.cmsNews.data;
    }
  },
  methods: {
    //返回上一级
    onClickLeft() {
      this.$router.back();
    },
    //点赞
    getLike() {
      Toast("点赞成功");
    },
    //收藏
    getCollections() {
      getCollection(this.$route.params.articleId).then(res => {
        console.log(res);
        if (res.code == 0) {
          // debugger;
          if (this.data.isCollect) {
            // debugger
            this.active = !this.active;
            Toast("取消收藏");
          } else {
            Toast("收藏成功");
            this.active = !this.active;
          }
          this.data.isCollect = !this.data.isCollect;
          // this.active = !this.active;
        } else {
          Toast("请登录");
        }
      });
    }
  },
  created() {
    //新闻详情
    this.$store.dispatch("cmsNews/newsContent", {
      articleId: this.$route.params.articleId
    });
  },
  components: {
    Journalismlist,
    getCollection
  }
};
</script>
<style lang='less' scoped>
.box {
  margin: 20px;
}
.van-nav-bar {
  background-color: #efeff4;
}
img {
  width: 10%;
}
.active {
  color: red;
}
/deep/ section img {
  width: 100%;
}
/deep/ section p .art_p {
  color: #000;
  font-size: 14px;
  text-indent: 2em;
}
section {
  width: 100%;
}
figure {
  width: 100%;
}
.mui-card-content {
  background-color: #efeff4;
}
.bottom {
  display: flex;
  padding: 5px;
  justify-content: space-around;
}
.bottomIcon {
  font-size: 12px;
  display: flex;
  justify-content: space-around;
}
</style>
