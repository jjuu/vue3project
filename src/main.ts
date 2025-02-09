
import { createApp } from 'vue'

import App from '@/App.vue'
// import { zhCn } from 'element-plus/es/locale'

  // 引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 在 src/main.ts 内引入注册脚本
import 'virtual:svg-icons-register'

import './style.css'


const app = createApp(App)

// use引入的插件element-plus
app.use(ElementPlus, {
    // locale: zhCn
})

// 注册为全局组件 注册为全局组件后不需要在单独注册组件了
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//安装自定义插件
app.use(gloalComponent)     // 注册为全局组件后一定要用use方法声明使用
 
// NOTE: app.component 用于全局注册组件，这样在整个 Vue 应用中都可以使用该组件，而不需要在每个组件内单独引入。
// 适用于单独注册组件，通常用于公共组件（如按钮、图标）。

// NOTE: app.use 用于安装 Vue 插件，插件通常是一个对象（带 install 方法）或一个函数。
// 插件可以包含多个全局功能，如：
//    注册全局组件, 注册全局指令, 添加全局属性, 依赖注入

app.mount('#app')
