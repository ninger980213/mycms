<template>
  <div class="img">
    <div class="top">
      <p class="my" >热搜</p>
      <div class="inputBox">
        <router-link to="/searchpage">
          <van-search shape="round" background="#474777" placeholder="请输入搜索关键词" class="search"></van-search>
        </router-link>
      </div>
      <!--  <van-icon name="fire" color="red" />
      <span>热搜</span>-->
    </div>
    <van-notice-bar
      text="惊愕！美国三分之一新冠肺炎死亡病例竟来自同一种地方，更令人担忧的是…"
      left-icon="volume-o"
      :scrollable="true"
    />
    <div class="hot">
      <ul>
        <li v-for="item in musicTab" :key="item.articleId">
          <div>
            <div class="content">
              <img :src="item.bannerImgUrl" alt />
            </div>
            <div>
              <div>
                <p>{{item.updateTime}}</p>
                <p style="color: #333;">{{item.title}}...</p>
              </div>
            </div>
            <div class="bottom">
              <van-tag color="#f2826a">{{item.articleSource}}</van-tag>
              <router-link :to="'/newDetails/'+item.articleId">Read more</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getHotsNews } from "../../api/Cms-api.js";
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      musicTab: {
        title: ""
      }
    };
  },
  methods: {
    getTabNews() {
      getHotsNews(2, 6).then(res => {
        // debugger;
        this.musicTab = res.rows;
        console.log(this.musicTab);
      });
    }
  },
  created() {
    this.getTabNews();
  },
  components: {
    getHotsNews
  }
};
</script>
<style lang='less' scoped>
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
  color: #cccccc;
  margin-left: 10px;
}
.img {
  width: 100%;
}
p {
  text-align: center;
}
li {
  margin: 10px;
  border: 1px dashed #cccccc;
}
.content {
  display: flex;
}
.content img {
  width: 100%;
  height: 150px;
}
.bottom {
  display: flex;
  justify-content: space-around;
}
</style>
