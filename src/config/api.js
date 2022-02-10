import fetch from './http'
const api = {}
//参数一：url        '/api/grade/findListBySubjectId'
//参数二：data       传给后台得参数
//参数三：isLogin    是否校验token 
//参数四：type       是json数据还是formdata 数据    type ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded'
api.findListBySubjectId=data=>fetch.post('api/banner/home',data,true,false)

api.getss=data=>fetch.post('api/banner/home',data,true,true)





export default api