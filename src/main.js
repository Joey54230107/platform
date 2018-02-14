// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import axios from './api/api'
import util from './plugin/util'
import '@/assets/style/awesome.css'

Vue.config.silent = true
Vue.config.productionTip = false
Vue.prototype.$api = axios
Vue.prototype.openWin = util.openWin

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
