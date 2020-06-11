import http from './http.js'

//封装地址
//输入type、size、offset
//输出接口的返回内容，接口是异步操作，不能直接return返回输出结果，需要promise解决异步问题
//返回一个promise对象，通过promise对象拿到具体结果

//热门新闻
function getHotsNews(pageNum, pageSize, articleId) {
    const url = `/cms-api/api/cms/article/open/hot/list`;
    const formdata = new FormData()
    formdata.append('pageNum', pageNum)
    formdata.append('pageSize', pageSize)
    formdata.append('pageSize', articleId)
    return http.post(url, formdata)
}
//新闻详情
function Journalismlist(articleId) {
    const url = `/cms-api/api/cms/article/open/detail/${articleId}`;
    return http.get(url)
}
function getMusic() {
    const url = `/wy-api/mv/first`;
    return http.get(url)
}
function getMusicMv(id) {
    const url = `/wy-api/mv/detail?mvid=${id}`;
    return http.get(url)
}
function getMusicComment(id) {
    const url = `/wy-api/comment/mv?id=${id}`
    return http.get(url)
}
//获取分类列表地址
function Classificationlist(pageNum, pageSize) {
    const url = `/cms-api/api/cms/category/open/list`;
    const formdata = new FormData()
    formdata.append('pageNum', pageNum)
    formdata.append('pageSize', pageSize)
    return http.post(url, formdata)
}
//获取轮播图列表地址
function Rotationlist() {
    const url = `/cms-api/api/cms/article/open/banner/list`
    return http.post(url)
}
//获取新闻列表
function NewsList(pageNum, pageSize, categoryId) {
    const url = `/cms-api/api/cms/article/open/list`;
    const formdata = new FormData()
    formdata.append('pageNum', pageNum)
    formdata.append('pageSize', pageSize)
    formdata.append('categoryId', categoryId)
    return http.post(url, formdata)
}
// 新闻订阅
function Subscriptionlist(categoryIds) {
  const url = `/cms-api/api/cms/userCategory/subscription/category`;
  const formdata = new FormData()
  formdata.append('categoryIds', categoryIds)
  return http.post(url, formdata)
}
// 订阅列表
function getSubScribeList(categoryIds) {
    const url = `/cms-api/api/cms/category/subscription/list`;
    const formdata = new FormData()
    formdata.append('categoryIds', categoryIds)
    return http.get(url, formdata)
  }

//点击收藏
function getCollection(articleId) {
    const url = `/cms-api/api/cms/collect/collect/article/${articleId}`;
    return http.get(url)
}
//收藏列表
function getCollectionList() {
    const url = `/cms-api/api/cms/article/collect/list`;
    return http.get(url)
}
/*搜索页面*/
function SearchList(pageNum, pageSize, title) {
    const url = `/cms-api/api/cms/article/open/list`;
    const formdata = new FormData()
    formdata.append('pageNum', pageNum)
    formdata.append('pageSize', pageSize)

  formdata.append('title', title)
  return http.post(url, formdata)
}
// 这是一个普通导出
export {
    getHotsNews,
    Journalismlist,
    getMusic,
    Classificationlist,
    Rotationlist,
    NewsList,
    getMusicMv,
    getMusicComment,
    SearchList,
    getCollection,
    getCollectionList,
    Subscriptionlist,
    getSubScribeList


}
            // 默认导出只能导出一个
