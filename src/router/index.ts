import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import ColumnList from "@/components/ColumnList.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "ColumnList",
  //   component: ColumnList
  // },
  {
    path: "/column/:id",
    name: "ColumnDetail",
    component: () =>
      import(
        /* webpackChunkName: "ColumnDetail" */ "@/components/ColumnDetail.vue"
      )
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
