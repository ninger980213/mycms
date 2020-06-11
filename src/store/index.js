import Vue from  'vue'
import Vuex from 'vuex'
import cmsNews from './modules/cmsNews.js'
Vue.use(Vuex)
// 实例化vuex的store
const store = new Vuex.Store({
    // 定义state
    state: {
        // 个人信息的状态对象
        userinfo: {
        },
    },
    // 定义mutation
    mutations: {
        userinfo(state, payload) {
            // debugger
            // 形参与实参    
            state.userinfo = payload.user;
            state.userName = payload.userName,
            state.phonenumber = payload.phonenumber,
            state.sex = payload.sex;
        },
    },
    modules: {
        cmsNews
    }
})
export default store
