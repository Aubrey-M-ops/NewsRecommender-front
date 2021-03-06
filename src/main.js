// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from "vue-axios";

axios.defaults.baseURL ='http://localhost:8080/recommend';

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(dataV);
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
