// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Qs from "qs";

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

axios.defaults.baseURL ='http://localhost:8080/recommend';

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
