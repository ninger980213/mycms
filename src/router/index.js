import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import HelloWorld from '../pages/HelloWorld'
import HotSearch from "../pages/HotSearch.vue"
import PersonalCenter from '../pages/PersonalCenter.vue'
import NewDetails from '../components/newsDetails/NewDetails.vue'
import SearchPage from '../components/homepage/SearchPage.vue'
import Registrat from '../pages/Registrat.vue'
import Login from '../pages/Login.vue'
import Password from '../pages/Password.vue'
import CheckMine from '../pages/CheckMine.vue'
import EditorialMaterial from '../pages/EditorialMaterial.vue'
import Music from '../components/music/Music.vue'
import MusicMv from '../components/music/MusicMv.vue'
import Subscription from "../components/homepage/concern/Subscription"
import Nos from '../pages/Nos.vue'
import CollectList from '../components/collect/CollectList.vue'
import { Toast } from 'vant'
Vue.use(VueRouter)


 const routes= [
    {path: '/',redirect: '/helloWorld'},
    {path: '/helloworld',component: HelloWorld},
    {path: '/hotsearch',component: HotSearch},
    {path: '/personalcenter',component: PersonalCenter,meta:{isAuth:true}},
    {path: '/newDetails/:articleId',component: NewDetails},
    {path: '/searchpage',component: SearchPage},
    {path: '/registrat',component: Registrat},
    {path: '/login',component: Login},
    {path: '/password',component: Password},
    {path: '/editorialmaterial',component:EditorialMaterial},
    {path: '/checkmine',component: CheckMine},
    {path: '/music',component: Music},
    {path: '/musicMv/:id',component:MusicMv},
    {path: '/subscription',component:Subscription},
    {path: '/nos',component: Nos},
    {path: '/collectList',component: CollectList},
  ]
  const router = new VueRouter({ 
    routes
   })

  router.beforeEach((to, from, next) => {
    console.log(store)
    if(to.meta.isAuth){
      if(store.state.isLogin){
        next()
      }else{
        Toast('请登录！！！！')
        next('/login')
      }
    }else{
      next()
    }
  })

 export default  router