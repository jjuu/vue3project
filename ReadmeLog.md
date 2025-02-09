# Vue 3 + TypeScript + Vite

**参考：**
https://github.com/element-plus/element-plus/issues/11818
https://developer.aliyun.com/article/1284159

**当引入ElMessage时**
```ts
import { ElMessage } from 'element-plus'
```

**报错如下：**
Vue: Module "element-plus" has no exported member ElMessage. Did you mean to use import ElMessage from "element-plus" instead?

1. 安装@vue/tsconfig@0.7.0
```bash
pnpm install @vue/tsconfig -D
```

2. 在tsconfig.json里，添加如下配置
```json
{
  "extends": "@vue/tsconfig/tsconfig.json"  
}
```

**原因：**
```text
@vue/tsconfig/tsconfig.json
```
1. **扩展了这个推荐的配置解决了问题。**
 - 这是一个 TypeScript 配置文件，由 `@vue/tsconfig` 提供，它是和 Vue 3 一起使用的官方共享 TypeScript 设置包。
 - 它包含了一些适用于 Vue 项目的推荐配置，比如 Vue 文件的类型支持、模板的类型检查、默认路径别名等。
 - 使用这个基础配置，可以减少手动配置 TypeScript 的复杂性，同时保证与 Vue 官方推荐设置一致。

2. **实际作用**：
 - 当配置中使用 `"extends": "@vue/tsconfig/tsconfig.json"` 时，项目将继承 `@vue/tsconfig` 中定义的所有配置。你只需要根据自己的需要再定义一些额外的规则，或者覆盖某些选项。
 （可能是某些配置不对）


```text
安装 @vue/tsconfig
```
`@vue/tsconfig` 是 Vue 官方提供的一个共享 TypeScript 配置包。它的主要作用是为了让 Vue 项目能够快速使用官方推荐的 TypeScript 配置，而无需开发者手动配置大量选项，是一种**简化配置和提高一致性**的手段。

