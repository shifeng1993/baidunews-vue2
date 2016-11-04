import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Admin from './components/admin.vue'
import Login from './components/login.vue'
import Index from './components/index.vue'


// 开启debug
Vue.config.debug = true

// 启用插件
Vue.use(VueRouter)
Vue.use(VueResource)

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
