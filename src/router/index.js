import Vue from "vue";
import VueRouter from "vue-router";
import Video from "../views/VideoPage.vue";
import Searchs from "../views/SearchsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Video",
    component: Video,
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListPage.vue"),
  },
  {
    path: "/Searchs/:id",
    name: "Searchs",
    component: Searchs,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
