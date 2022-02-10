import router from '../router';
import axios from 'axios';
import qs from 'qs';
import cookie from './cookie';

axios.interceptors.response.use(function (response) {
  // console.log(response,'拦截')
  return response
})
axios.interceptors.request.use((config) => {
  // console.log(config,'拦截一')
  return config
})
export default {
  getToken () {
    if (window.localStorage.getItem('ck')) {
      return 0
    }
    if (this.getCookie('ssotoken')) {
      return this.getCookie('ssotoken').split('.')[1]
    } else {
      return 0
    }
  },
  post (url, data, isLogin, type) {
    if (isLogin && cookie.get('ssotoken') == null) {
      window.location.replace('../page/login/index.vue')
      return false
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        baseURL: 'http://47.99.60.33:8088/',
        url,
        data: qs.stringify(data),
        timeout: 30000,
        headers: {
          'Content-Type': type ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded',
          'token':cookie.get('ssotoken')
        }
      }).then(data => {
        resolve(data.data)
      }).catch(() => {
        console.warn('error了---->', error)
      })
    })
  },
  get(url, data, isLogin, type) {
    if (isLogin && cookie.get('ssotoken') == null) {
      window.location.replace('../page/login/index.vue')
      return false
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        baseURL: 'http://47.99.60.33:8088/',
        url,
        params: data,
        headers: {
          'token':cookie.get('ssotoken')
        },
        timeout: 30000,
        dataType: 'json',
      }).then(data => resolve(data.data)).catch(() => {
        
      })
    })
  },
}
router.beforeEach((to, form, next) => {
  console.log(to,'我是全局前置守卫')
  let cookiedata=cookie.get('ssotoken')
  if((cookiedata==null || cookiedata==undefined || cookiedata=='') && to.name !='/login'){
    next({name:'/login'})
  }else{
    next()
  }
})