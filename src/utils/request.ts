// 进行axios二次封装：使用请求和响应拦截器

import axios from 'axios'
import { ElMessage } from 'element-plus'

//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
let request = axios.create({
    // 基础路径
    baseURL: import.meta.env.VITE_BASE_URL, // 基础路径上会携带 /api
    timeout: 5000,
});

//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
    // config配置对象，有一个headers属性请求头，经常给服务器端携带公共的参数
    // 必须返回配置对象
    return config;
});

//第三步:响应拦截器
request.interceptors.response.use((response) => {
    // 成功回调
    // 返回简化后的 数据
    return response.data;
}, (error) => {
    // 失败回调：处理http网络错误
    // 定义一个变量：存储网络错误信息
    let message: string;
    let status = error.response.status;
    switch (status) {
        case 401:
            message = "TOKEN 已经过期"
            break;
        case 403:
            message = "无权访问";
            break;
        default:
            message = "网络出现问题"
    }

    ElMessage({
        type: "error",
        message,
    });

    return Promise.reject(error);

});

//对外暴露
export default request