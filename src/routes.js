// 引入插件模块
import VueRouter from 'vue-router'
import Vue from 'vue'

// 引入组件
import Admin from './components/admin.vue'
import Login from './components/login.vue'
import Index from './components/index.vue'

// 启用插件
Vue.use(VueRouter)

// 配置
const routes = [
  { path: '/', component: Index },
  { path: '/admin', component: Admin },
  { path: '/login', component: Login }
]

// 传入配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

export default router
