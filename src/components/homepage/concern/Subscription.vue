<template>
<div>
    <!-- 导航栏 -->
    <div class="top">
      <van-nav-bar title="栏目" left-text="返回"  left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 订阅的栏目 -->
    <div  class="bottom">
      <h5>我的频道</h5>
         <ul>
           <li v-for="(item,i) in subScribeList"  :key="item.id" :title="item.name" >
             <van-tag round  type="primary" @click="delMyLook(i)">{{item.name}}
               </van-tag>
             </li>
         </ul>
    </div>
    <!-- 未订阅栏目 -->
    <div  class="bottom" >
      <h5>为你推荐</h5>
       <ul>
         <li v-for="(item,index) in unSubScribeList"  :key="index" :title="item.name" @click="addMyLook(item)">
           <van-tag round  type="primary" >{{item.name}}</van-tag>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
  import { Classificationlist ,Subscriptionlist,getSubScribeList} from "../../../api/Cms-api";
  export default {
    data() {
      return {
        //分类列表
        categoryList:[],
        //订阅列表
        subScribeList:[],
      };
    },

    computed:{
      //计算属性未订阅
      unSubScribeList(){
        //filter 返回结果为true 就添加到数组中
        // return this.categoryList.filter(item=>{
        //  // 遍历数组有一个为true就返回true
        //  return !this.subScribeList.some(subItem=>{
        //    return item.categoryId ==subItem.categoryId
        //  })
        // })
    // -----------   简化书写---------------
        return this.categoryList.filter(item=>!this.subScribeList.some(subItem=>item.categoryId==subItem.categoryId))
    },
      // id的计算属性
      subScribeIdList(){
        return this.subScribeList.map(item=>item.categoryId)
      }
  },
    created() {
      //--------------请求栏目-------------
      Classificationlist(this.pageNum, this.pageSize).then(res => {
        this.categoryList = res.rows;
      }).catch();
        //------------订阅列表---------------
      getSubScribeList().then(res =>{
              // debugger
        this.subScribeList= res.rows;
        console.log("sub------",this.subScribeList);
      }).catch();
    },
    methods: {
      //  返回按钮
      onClickLeft() {
        this.$router.back();
      },
      //单击订阅
      addMyLook(item){
        this.subScribeList.push(item);
      //  调用订阅接口
        Subscriptionlist(this.subScribeIdList.join(',')).then(res=>{
          //  console.log((res))
        })
      },
      // 取消订阅
       delMyLook(i){
        
         this.subScribeList.splice(i,1);
      //  调用订阅接口
      console.log(this.subScribeIdList.join(','));
        Subscriptionlist(this.subScribeIdList.join(',')).then(res=>{
           console.log((res))
        })
      },
    }
  };
</script>


<style scoped>
.bottom ul li{
padding: 2px;

  display: inline-block;
  /* background: pink; */
  white-space: nowrap;
}
.bottom{
width: 100%;

}
  .bottom ul{
    display:inline;

  }
</style>