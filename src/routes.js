import Vue from "vue";
import VueRouter from "vue-router";
//admin
import OC from "./views/admin/oc/Index.vue";
import Project from "./views/admin/project/Index.vue";
import Role from "./views/admin/role/Index.vue";
import User from "./views/admin/user/Index.vue";

//client
import Task from "./views/clients/Task.vue";
import History from "./views/clients/History.vue";

// auth
import Auth from "./views/shares/auth/Auth.vue";
import Login from "./views/shares/auth/Login.vue";

//dash
import Dash from "./views/shares/dash/Dash.vue";
import Home from "./views/shares/dash/Home.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      //HOME
      path: "/",
      component: Dash,
      redirect: "/home",
      children: [{ path: "home", component: Home }]
    },
    //adminoc
    {
      path: "/admin-oc",
      component: Dash,
      children: [{ path: "/admin-oc", component: OC }]
    },
    //adminrole
    {
      path: "/admin-role",
      component: Dash,
      children: [{ path: "/admin-role", component: Role }]
    },
    //adminuser
    {
      path: "/admin-user",
      component: Dash,
      children: [{ path: "/admin-user", component: User }]
    },
    //adminproject
    {
      path: "/admin-project",
      component: Dash,
      children: [{ path: "/admin-project", component: Project }]
    },
    //Login
    {
      path: "/login",
      component: Auth,
      children: [{ path: "/login", component: Login }]
    },

    //client task
    {
      path: "/client-task",
      component: Dash,
      children: [{ path: "/client-task", component: Task }]
    },

    //client task
    {
      path: "/client-history",
      component: Dash,
      children: [{ path: "/client-history", component: History }]
    }
  ]
});

export default router;
