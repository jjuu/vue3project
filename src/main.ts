import { createApp } from "vue";

import App from "@/App.vue";

// import { zhCn } from 'element-plus/es/locale'

// 引入element-plus插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 在 src/main.ts 内引入注册脚本
import "virtual:svg-icons-register";

const app = createApp(App);

// use引入的插件element-plus
app.use(ElementPlus, {
  // locale: zhCn
});

// 引入自定义插件对象:注册整个项目全局组件
import globalComponent from "@/components";
//安装自定义插件
app.use(globalComponent); // 注册为全局组件后一定要用use方法声明使用

//引入模板的全局的样式
import "@/styles/index.scss";

// 注册路由
import router from "./router";
app.use(router);

// 引入仓库
import pinia from "./store";
app.use(pinia);

// 把#app绑定到vue实例上
app.mount("#app");
