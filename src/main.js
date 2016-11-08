import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './routes.js'

// 启用插件
Vue.use(VueResource)

// 创建vue实例并渲染到app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
