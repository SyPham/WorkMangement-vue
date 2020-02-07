import Vue from "vue";
import App from "./App.vue";
import Router from "./routes";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
import { Datetime } from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);
Vue.use(VueSweetalert2);
import Auth from "./assets/plugins/auth";

import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
//  axios.defaults.headers.post['Content-Type'] = 'application/octet-stream';
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("authToken");
Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: "http://10.4.4.224:93/"
    });
  }
});
Vue.use(TreeGridPlugin);
Vue.use(Auth);
//configure route guards
Router.beforeEach(function(to, from, next) {
  //prevent access to 'requiresGuest' routes;
  if (
    to.matched.some(function(record) {
      return record.meta.requiresGuest;
    }) &&
    Vue.auth.loggedIn()
  ) {
    next({
      path: "/home"
    });
  } else if (
    to.matched.some(function(record) {
      return record.meta.requiresAuth;
    }) &&
    !Vue.auth.loggedIn()
  ) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next(); // make sure to always call next()!
  }
});
new Vue({
  el: "#app",
  router: Router,
  render: h => h(App)
});
