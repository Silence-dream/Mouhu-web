import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: import(/* webpackChunkName: "Login" */ "@/views/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: import(/* webpackChunkName: "Signup" */ "@/views/Signup.vue")
  },
  {
    path: "/column/:id",
    name: "ColumnDetail",
    component: () =>
      import(/* webpackChunkName: "ColumnDetail" */ "@/views/ColumnDetail.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
