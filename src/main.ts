
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
// 中文
app.mount('#app')
