import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "home",
  component: Home
},
{
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import( /* webpackChunkName: "about" */ "../views/About.vue")
},
{
  path: "/index",
  name: "index",
  component: () => import("../views/index/Index.vue"),
  children: [{
    path: "/",
    component: () => import("@/components/index/index.vue")
  },
  {
    path: "/survey",
    name: "survey",
    component: () => import("@/components/arctype/survey/index.vue")
  },
  {
    path: "/domain",
    name: "domain",
    component: () => import("@/components/arctype/domain/index.vue"),
    // children: [
    //   {
    //     path: "detail/:aid",
    //     name: "detail",
    //     component: () => import("@/components/arctype/domain/detail.vue")
    //   },
    // ]
  }, {
    path: "/domain/detail/:aid",
    name: "domainDetail",
    component: () => import("@/components/arctype/domain/detail.vue")
  }, {
    path: "/management",
    name: "management",
    component: () => import("@/components/arctype/management/index.vue")
  }, {
    path: "/branch",
    name: "branch",
    component: () => import("@/components/arctype/branch/index.vue")
  }, {
    path: "/dynamic",
    name: "dynamic",
    component: () => import("@/components/arctype/dynamic/index.vue")
  },
  {
    path: '/hotArticle/:aid',
    name: "hotArticle",
    component: () => import("@/components/arctype/hotArticle.vue")
  }
  ],
},
  // {
  //   path: "/index",
  //   name: "index",
  //   component: () => import("../views/index/Index.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 跳转后返回顶部
// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0);
// });

export default router;