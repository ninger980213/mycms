<template>
  <div>
    <div class="content">
      <ul>
        <li v-for="item in musicTab" :key="item.id">
          <router-link :to="'/musicMv/'+item.id">
            <div class="top">
              <img :src="item.cover" alt />
            </div>
             </router-link>
            <div class="bottom">
              <p>
                <span>★{{item.name}}</span>
                <span class="name">{{item.artistName}}</span>
              </p>
            </div>
         
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getMusic, getMusicMv } from "../../api/Cms-api.js";
export default {
  data() {
    return {
      musicTab: []
    };
  },
  created() {
    this.musicContent();

  },
  methods: {
    musicContent() {
      //   debugger
      getMusic().then(res => {
        //   debugger
        this.musicTab = res.data;
        // console.log(this.musicTab);
      });
    }
  },
  components: {
    getMusic,
    getMusicMv
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 5px;
}
.name {
  font-size: 8px;
  color: rgb(197, 158, 30);
}
li {
  // width: 50%;
  // float: left;
  color: rgb(59, 50, 104);
  padding: 10px;
  box-sizing: border-box;
  border: 2px dashed rgb(71, 71, 119);
}
.bottom p {
  font-size: 12px;
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
</style>