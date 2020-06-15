import Vue from  'vue'
import Vuex from 'vuex'
import cmsNews from './modules/cmsNews.js'
Vue.use(Vuex)
// 实例化vuex的store
const store = new Vuex.Store({
    // 定义state
    state: {
        // 个人信息的状态对象
        isLogin:false,
        userinfo: {},
        loginPromise:null
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
        changeLogin(state, payload){
            state.isLogin = payload.isLogin;
        },
        changeUserInfo(state, payload){
            state.userInfo = payload.userInfo;
        }, 
        changeloginPromise(state, payload){
            state.loginPromise = payload.loginPromise;
        }
    },
    modules: {
        cmsNews
    }
})
export default store
