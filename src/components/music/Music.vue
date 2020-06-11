<template>
  <div>
    <h3><van-icon name="tv-o"  color="#c59e1e" size="15px" />音乐视频</h3>
    <MusicsList></MusicsList>
   
  </div>
  
</template>
<script>
import MusicsList  from './MusicList.vue'
// import { getMusic } from "../../api/Cms-api.js";
export default {
  data() {
    return {
    };
  },
  components:{
    MusicsList
  }
};
</script>
<style lang="less" scoped>
h3 {
  text-align: center;
  // background: rgb(197, 158, 30);
  margin: 5px;
  vertical-align: middle;
}
.van-icon {
  margin-right: 4px;
  margin-top: 4px;
}
</style>