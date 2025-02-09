
import { createApp } from 'vue'

import App from '@/App.vue'
// import { zhCn } from 'element-plus/es/locale'

  // 引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 在 src/main.ts 内引入注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)

// use引入的插件element-plus
app.use(ElementPlus, {
    // locale: zhCn
})

// 引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//安装自定义插件
app.use(gloalComponent)     // 注册为全局组件后一定要用use方法声明使用
 
//引入模板的全局的样式 
import '@/styles/index.scss'

// NOTE: 测试mock代码。
import axios from 'axios'
console.log('发请求信息')

axios({
    url: '/api/user/login',
    method: 'post',
    data: {
        username: 'admin',
        password: '111111'
    }
});

app.mount('#app')
