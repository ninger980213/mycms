import http from './http'
// 在这里定义函数，在以后调用，例如：计算a+b=?   定义计算规则



// 我的页面的注册  post请求
export function registrat(params) {
    // 请求体是formdata
    const formData = new FormData();
    formData.append("loginName", params.loginName);
    formData.append("code", params.code);
    formData.append("phonenumber", params.phonenumber);
    formData.append("password", params.password);
    formData.append("userName", params.userName);
    formData.append("sex", params.sex);
    formData.append("remark", params.remark);
    return http.post('/cms-api/api/registry', formData)
}
// 我的页面的登录  post请求
export function login(params) {
    // 请求体是formdata
    const formData = new FormData();
    formData.append("username", params.username);
    formData.append("password", params.password);
    formData.append("rememberMe", params.rememberMe);
    return http.post('/cms-api/api/login', formData)
}
// 我的页面找回密码   post请求
export function forget(params) {
    // 请求体是formdata
    const formData = new FormData();
    formData.append("loginName", params.loginName);
    formData.append("password", params.password);
    formData.append("phonenumber", params.phonenumber);
    formData.append("code", params.code);
    return http.post('/cms-api/api/password/forget', formData)
}
// 短信验证码
export function vcode(mobile) {
    // get请求不用formdata
    return http.get('/cms-api/api/short-message/vcode/' + mobile)
}
// 我的页面查看信息  
export function info() {
    // get请求
    return http.get('/cms-api/api/login-user/info')
}
// 我的页面修改信息
export function update(params) {
    // 请求体是formdata
    const formData = new FormData();
    formData.append("loginName", params.loginName);
    formData.append("password", params.password);
    formData.append("userName", params.userName);
    formData.append("sex", params.sex);
    formData.append("phonenumber", params.phonenumber);
    formData.append("remark", params.remark);
    return http.post('/cms-api/api/system/user/profile/update', formData)
}
// 我的页面修改头像   post请求   
export function nos(fileObj) {
    const formData = new FormData();
    formData.append("avatarfile", fileObj)
    return http.post('/cms-api/api/system/user/profile/update/avatar/nos', formData)
}
// 退出登录  get请求
export function logout() {
    return http.get('/cms-api/api/logout')
}