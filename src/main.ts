
import { createApp } from 'vue'
// import { zhCn } from 'element-plus/es/locale/index.mjs'

import App from '@/App.vue'
// import MyPerson from './components/MyPerson.vue'

import ElementPlus from 'element-plus'  // 引入element-plus插件
import 'element-plus/dist/index.css'

import './style.css'


const app = createApp(App)

// use引入的插件element-plus
app.use(ElementPlus, {
    // locale: zhCn
})
// 中文
app.mount('#app')
