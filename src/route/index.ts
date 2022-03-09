import { RouteRecordRaw } from "vue-router";

/**
 * By 511 at 21/07/06/ 周二 22:05
 * @Desc: 路由与目录页
 */

interface RouteConfig {
  /* 路径 */
  path: string;
  /* 组件 */
  component: () => Promise<typeof import("*.vue")>;
  /* 页面标题 */
  title: string;
}

const routes: (RouteConfig & RouteRecordRaw)[] = [
  {
    path: "/",
    redirect: "home",
    component: () => import("../App.vue"),
    title: "目录页",
  },
  {
    path: "/home",
    component: () => import("../pages/Home/index.vue"),
    title: "home",
  },
  {
    path: "/demo",
    component: () => import("../pages/Demo/index.vue"),
    title: "demo",
  },
];

export default routes;
