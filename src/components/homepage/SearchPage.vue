<template>
  <div>
    <!-- 搜索页 -->
    <form action="/">
      <div class="top">
        <p class="my" @click="onClickLeft" >返回</p>
        <div class="inputBox">
          <van-search
            v-model="title"
            shape="round"
            background="#474777"
            @cancel="onCancel"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            class="search"
          ></van-search>
        </div>
      </div>
    </form>
    <div>
      <!--      查询后显示的查询结果-->
      <ul>
          <h5>猜你想搜</h5>

        <li v-for="item in label" :key="item.articleId">
          <router-link :to="'/newDetails/'+item.articleId">
            <span style="font-size:14px">{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <h5>搜索记录</h5>
      <div>
        <!--             循环遍历出来查询过的内容-->
        <p v-for="item in historyList" :key="item" @click="labellist(item)">
          <van-tag
            v-if="show.success"
            closeable
            size="medium"
            type="success"
            @close="close('success')"
          >{{item}}</van-tag>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { SearchList } from "../../api/Cms-api";

export default {
  data() {
    return {
      search: [],
      label: [],
      historyList: [],
      title: "",
      show: {
        success: true
      }
    };
  },

  //挂载
  components: {
    SearchList
  },
  created() {
    // 分析：
    // 1.数据从localstorage中读取
    // 2.先创建一个新的评论数据对象
    // 3.把2中的数据对象存储到localstorage中
    // 4.首先我们要知道，localstorage只支持存放字符串，由于一开始存放的数据是对象，所以需要通过JSON.stringify转换为字符串
    // 5.从localstorage中读取最新的数据并添加到一个新数组中

    //设置读取内容转换为字符串   兼容性处理得到cmt 否则返回空
    this.historyList = JSON.parse(localStorage.getItem("history") || "[]");
  },

  methods: {
    //返回按钮的单击事件
    onClickLeft() {
      this.$router.back();
    },

    //搜索功能
    onSearch() {
      //搜索内容填写完回车
      SearchList(1, 6, this.title)
        //   内容循环遍历出来供参考
        .then(res => {
          this.label = res.rows;
        });
      //搜索记录存入的时候判断是否有重复的重复就去掉
      if (!this.historyList.includes(this.title))
        // 没有重复的push出来
        this.historyList.push(this.title);
      //向localstorage存值 转为字符串
      localStorage.setItem("history", JSON.stringify(this.historyList));
    },

    //点击历史记录后再次查询
    labellist(title) {
      //历史记录等于搜索框的内容 v-model="title"的title
      this.title = title;
      //历史记录被点击后执行onsearch搜索功能
      this.onSearch();
    },
    //删除历史记录
    close(type) {
      this.show[type] = false;
      localStorage.clear();

      //清空本地存储
      /*  localStorage.clear() */
    },
    //取消当前输入的内容
    onCancel() {
      Toast("取消");
    }
  }
};
</script>
<style scoped>

li {
  list-style: none;
}
.top {
  display: flex;
  background: rgb(71, 71, 119);
}
.inputBox {
      width: 85%;
}

.my {
  flex-grow: 1;
  display: flex;
  align-items: center;  
  color: #cccccc;
  margin-left: 10px;
}
</style>
