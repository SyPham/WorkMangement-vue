import Vue from "vue";
import App from "./App.vue";
import Router from "./routes";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";

Vue.use(TreeGridPlugin);
console.log("adasd");
new Vue({
  el: "#app",
  router: Router,
  render: h => h(App)
});
