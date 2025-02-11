// 同一管理项目用户相关的接口
import request from '@/utils/request'
import type { loginForm }  from './type'

// 同一管理接口
enum API {
    LOGIN_URL = '/user/login',
    USER_INFO_URL = '/user/info',
}

// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: any) => request.post(API.LOGIN_URL, data);
// 获取用户信息接口方法
export const reqUserInfo = () => request.get(API.USER_INFO_URL);
