// 对外暴露配置路由(常量路由)
// path和vue组件的映射关系
export const constantRoute = [
  {
    // 登录页面的路由
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", // 命名路由
  },
  {
    // 登录成功展示数据的路由（主页）
    path: "/",
    // component: () => import("@/views/home/index.vue"),
    component: () => import("@/layout/index.vue"),  // 替换成layout下面的index.vue
    name: "layout",
  },
  {
    // 404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  {
    // 任意页面的路由，匹配到404页面
    path: "/:pathMacth(.*)",
    redirect: "/404",
    name: "Any",
  },
];
