// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './api/http.js'
import axios from 'axios'
import store from './store'

Vue.prototype.$axios = axios;
import VueAxios from 'vue-axios'
Vue.use(VueAxios,http)
//引入vant
import { Loading } from 'vant';

Vue.use(Loading);
import {Divider,Sticky,Tabbar,TabbarItem,NoticeBar,Tag,Search,NavBar,Icon,Field,Tab, Tabs,Col, Row,Swipe, SwipeItem,Lazyload,Cell, CellGroup,Toast, Image as VanImage, Uploader, radioGroup, radio, ActionSheet, Picker, Skeleton, Button, Form} from 'vant';
Vue.use(Divider);
Vue.use(NoticeBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
// 骨架屏
Vue.use(Skeleton);
// cell单元格
Vue.use(Cell);
Vue.use(CellGroup);
// 按钮
Vue.use(Button);
// 图标
Vue.use(Icon);
// 表单
Vue.use(Form);
// 导航栏
Vue.use(NavBar);
// 输入框
Vue.use(Field);
// Picker 选择器
Vue.use(Picker);
// 动作面板
Vue.use(ActionSheet);
// 单选框
Vue.use(radio);
Vue.use(radioGroup);
// Uploder文件上传
Vue.use(Uploader);
// Image 图片
Vue.use(VanImage);
// 轻提示
Vue.use(Toast);
// 粘性布局
Vue.use(Sticky);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Tag);
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // 将store挂载在vue实例上
  store,
  template: '<App/>'
})
