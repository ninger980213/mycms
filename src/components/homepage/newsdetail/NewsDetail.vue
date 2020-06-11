<template>
  <!-- tab切换页内容 -->
  <div>
    <ul id="ul1">
      <li v-for=" (item,index) in label" :key="item.articleId" class="ulli">
        <!-- 上部分 -->
        <div class="top">
          <div v-if="index%2==0" class="top_img">
            <img :src="item.bannerImgUrl" alt/>
          </div>
          <div class="lower1">
            <router-link :to="'/newDetails/'+item.articleId" tag="li">{{item.title}}</router-link>
          </div>
          <div v-if="index%2==1" class="top_img">
            <img :src="item.bannerImgUrl" alt/>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="lower">
          <p>{{item.articleSource}}</p>
          <p>{{item.createTime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  import {NewsList} from "../../../api/Cms-api";

  export default {
    data() {
      return {
        label: [],
        active: "",
        pageSize: 10,
        pageNum: 1
      };
    },
    props: {
      categoryId: [Number]
    },
    created() {
      this.journaeList();
    },
    methods: {
      journaeList() {
        NewsList(this.pageNum, this.pageSize, this.categoryId).then(res => {
          this.label = res.rows;

          console.log(this.label);
        });
      }
    }
  };
</script>


<style scoped>
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

  .top .lower1 {
    width: 70%;
    margin-top: 10px;
    text-align: left;
    color: #000000;
    margin-left: 9px;
  }

  .top .top_img {
    width: 30%;
    height: 50px;
    margin-top: 10px;
  }

  .top .top_img img {
    width: 100%;
    height: 100%;
  }

  /*下半部分 */
  .lower {
    display: flex;
    height: 40px;
    font-size: 7px;
  }

  .lower p {
    text-align: left;
    width: 40%;
    margin-right: 34px;
  }
</style>
