<template>
  <!-- tab切换页内容 -->
  <div>
    <van-tabs v-model="active"  class="vantabs">
      <van-tab  v-for=" item in label"  :key="item.categoryId" :title="item.name">
       <newsdetaillist  :categoryId="item.categoryId"  ></newsdetaillist>
        </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import newsdetaillist from "./newsdetail/NewsDetail.vue";
import { Classificationlist } from "../../api/Cms-api";
export default {
  data() {
    return {
      label: [],
      active: "",
       pageSize:5,

    };
  },


  //挂载
  components: {
    newsdetaillist
  },
  created() {
    this.journaeList();
  },
  methods: {
    journaeList() {
      Classificationlist(this.pageNum,this.pageSize).then(res => {
        this.label = res.rows;
      console.log(this.label)
/*
      console.log(this.label) */

      });
    }
  }
};
</script>


<style scoped>

</style>
