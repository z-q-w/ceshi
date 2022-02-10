// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "babel-polyfill"
import http from './config/http.js'
import api from './config/api.js'
import ElementUI from 'element-ui';
import utli from './config/utli'
import cookie from './config/cookie.js'
import 'element-ui/lib/theme-chalk/index.css';
import Echarts from 'echarts' // 引入Echarts*
import global from './config/global.js'
Vue.prototype.global = global
Vue.prototype.$echarts = Echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.http = http
Vue.prototype.api = api
Vue.prototype.utli = utli
Vue.prototype.cookie = cookie

console.log(Vue.version.split('.'),'----version 获取安装版本号-------')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
