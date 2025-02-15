// 大仓库
// 从pinia仓库中引入创建仓库的方法
import { createPinia } from "pinia";

// 创建仓库
let pinia = createPinia();

// 对外暴露: 因为入口文件需要安装仓库
export default pinia;

