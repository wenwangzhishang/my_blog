// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
// import axios from '../httpconfig/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import notice from './definecomponent/notice/index'
Vue.use(notice)


import mynotice from './definecomponent/notification/index'
Vue.prototype.$mytest = mynotice;

import message from './definecomponent/message/index';
Vue.prototype.$Mess = message;

Vue.prototype.axios = axios;
// Vue.prototype.HOST = '/api'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
