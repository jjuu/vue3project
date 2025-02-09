
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

// 注册为全局组件 NOTE: 注册为全局组件后不需要在单独注册组件了
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//安装自定义插件
app.use(gloalComponent)     // NOTE: 注册为全局组件后一定要用use方法声明使用
 
// 中文
app.mount('#app')
