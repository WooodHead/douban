// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'

import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios) //http://www.jianshu.com/p/2045900d49df Axios用法

FastClick.attach(document.body)


Vue.prototype.HOST = 'https://api.douban.com'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
