<template>
  <div>
    <van-nav-bar title="音乐MV" left-text="返回" left-arrow @click-left="onClickLeft" />
    <video controls width="100%" :src="musicMv"></video>
    <p>
      <span class="name">{{name}}</span>
      <span>{{artistName}}</span>
    </p>
    <div class="comment-box">
      <ul>
        <p>最新评论</p>
        <li v-for="item in comment" :key="item.commentId">
          <p class="userName">
            <img :src="item.user.avatarUrl" alt />
            <span>{{item.user.nickname}}</span>
          </p>
          <p class="comment-content">{{item.content}}</p>
          <van-divider />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getMusicMv, getMusicComment } from "../../api/Cms-api.js";
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  created() {
    this.$store.dispatch("cmsNews/musicMvContent", {
      id: this.$route.params.id
    });
    this.$store.dispatch("cmsNews/musicMvComment", {
      id: this.$route.params.id
    });
  },
  computed: {
    musicMv() {
      return this.$store.state.cmsNews.musicMv;
    },
    artistName() {
      return this.$store.state.cmsNews.artistName;
    },
    name() {
      return this.$store.state.cmsNews.name;
    },
    comment() {
      return this.$store.state.cmsNews.comment;
    }
  },
  components: {
    getMusicMv,
    getMusicComment
  }
};
</script>
<style lang="less" scoped>
.comment-box {
  padding: 5px;
}
.userName {
  width: 100%;
  margin: 6px;
}
.comment-content {
  padding: 0 15px;
  margin: 0;
  font-size: 13px;
  color: rgba(50, 50, 51, 0.88);
}
.userName img {
  border-radius: 50%;
  width: 10%;
  height: 10%;
  vertical-align: middle;
  margin-right: 6px;
}
van-tag {
  margin: auto;
}
</style>