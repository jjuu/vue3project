# Vue 3 + TypeScript + Vite


## 1. NOTE：报了和昨天一样的错误。
**参考：ChatGPT**

src/utils/request.ts 中，包**element-plus**中找不到**ElMessage**。
```ts
import { ElMessage } from 'element-plus'
```
1. **解决办法**：把@vue/tsconfig的“^0.7.0”版本替换成"^0.1.3"。

- **原因**：typescript的不同版本对应了不同的库。不能用错。

2. **解决办法**：WebStorm的引用版本变成和项目版本一致。

提问：**@vue/tsconfig  的0.7.0和0.1.3版本有什么不同？**
回答：**@vue/tsconfig 的 0.7.0 版本相比 0.1.3 版本有以下主要区别：**

##### 为什么：
1. TypeScript 版本要求
- 0.1.3 版本适用于 TypeScript 4.5 - 4.9。
- 0.7.0 版本要求 TypeScript >= 5.0。
2. Vue 版本要求
- 0.7.0 版本要求 Vue.js >= 3.3。
3. 模块解析模式变更
- 0.7.0 版本 moduleResolution 改为 bundler，更符合现代打包工具（如 Vite）的解析规则。
- 这可能会导致部分第三方库（如 vue-i18n@9.2.2、vuetify@3.2.3）解析失败，需要手动修改 resolvePackageJsonExports 选项。
4. lib 默认值更新
- tsconfig.dom.json 现在默认包含 ES2020，而不是之前的 ES2016，以与 Vite 4 的默认目标对齐。
5. 移除 tsconfig.node.json
- 旧版本中的 tsconfig.node.json 被移除，Node.js 环境需要单独安装 @tsconfig/nodeXX 并手动扩展配置。

如果你的项目依赖 TypeScript 4.9 及以下，或者某些第三方库没有正确配置 exports 字段，建议继续使用 0.1.3 版本；否则可以升级到 0.7.0 以获得更好的兼容性和现代化支持。



## 2. 插件vite-plugin-mock的使用

https://juejin.cn/post/7086708577104035876

库：`"vite-plugin-mock": "^2.9.6"`

配置文件名：` [.env.development]`

``````bash
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'development'
VITE_APP_TITLE = '硅谷甄选运营平台'
VITE_APP_BASE_API = '/api'
VITE_SERVE="http://sph-api.atguigu.cn"
``````

## 3. 报错：
`Vue: Cannot find module @/ App. vue or its corresponding type declarations.`

参考：[Vue3+TS 常见报错][https://juejin.cn/post/7181392789433745465].
在tsconfig.json文件中，include里加入`*.ts`就解决问题了。

## 4. 报错：

node v16.14.2
pnpm v8.0.0

改用了和程序一样的版本。
