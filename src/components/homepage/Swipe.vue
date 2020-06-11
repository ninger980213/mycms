<template>
<!-- 轮播图 -->
  <div>
  <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
  <van-swipe-item  v-for=" item in swipedata"  :key="item.articleId" >
  <p class="p1">{{item.title}}</p> 
    <img class="mui-media-object" :src="item.bannerImgUrl" />
  </van-swipe-item>
  
</van-swipe>
  </div>
</template>

<script>
  import {Rotationlist} from "../../api/Cms-api"; 
export default {
 
  data() {
    return {
     swipedata:[]
    };
  },
 created(){
       this.Rotation()
  },
  methods: {
    Rotation() {
      Rotationlist().then(res => {
     this.swipedata=res.rows
 
      });
    }
  } 
};
</script>


<style scoped>
/*  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }  */
  .p1{
     text-align: center;
  }
.my-swipe{
  height: 200px;
  width: 100%;
  
 
}
.my-swipe div{
  
font-size: 10px;

}
.mui-media-object{
  height: 100%;
  width: 100%;
}

</style>
