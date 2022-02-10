import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import archives from '@/page/archives' 
import statistics from '@/page/statistics' 
import activity from '@/page/activity'
import roller from '@/page/roller'
import login from '@/page/login/index'
import bianxing from '@/page/bianxing'
import pdf from '@/page/pdf'
import map from '@/page/map'
import table from '@/page/table'
import addpage from '../components/addpage.vue'
import assembly from '../page/assembly.vue'
import custom from '../page/custom.vue'
import allapi from '../page/allapi.vue'
Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/login',
      name:'/login',
      component: login,
    },
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/archives',
      children:[
        {
          path: "/archives",
          name: "/archives",
          component: archives,
          children:[
            {
              path: "/archives/statistics",
              name: "/statistics",
              component: statistics
            },
            {
              path: "/archives/table",
              name: "/table",
              component: table
            }
          ]
        },
        {
          path: "/statistics",
          name: "/statistics",
          component: statistics
        },
        {
          path: "/activity",
          name: "/activity",
          component: activity
        },
        {
          path: "/roller",
          name: "/roller",
          component: roller
        },
        {
          path: "/bianxing",
          name: "/bianxing",
          component: bianxing,
          meta:{ //可以用来做登录校验   再路由守卫中可以拿到这些字段  可以用来判断哪些页面必须要登录
            login_require: false
          },
        },
        {
          path: "/pdf",
          name: "/pdf",
          component: pdf,
          meta:{
            login_require: false
          },
        },
        {
          path: "/map",
          name: "/map",
          component: map,
          meta:{
            login_require: false
          },
        },
        {
          path: "/addpage",
          name: "/addpage",
          component: addpage
        },
        {
          path: "/table",
          name: "/table",
          component: table,
          meta:{
            login_require: false
          },
          beforeEnter: (to, from, next) => {
            console.log(to,'我是路由独享守卫')
            next()
          }    
        },
        {
          path: "/assembly",
          name: "/assembly",
          component: assembly
        },
        {
          path: "/custom",
          name: "/custom",
          component: custom
        },
        {
          path: "/allapi",
          name: "/allapi",
          component: allapi
        },
        
      ]
    }
  ]
})
