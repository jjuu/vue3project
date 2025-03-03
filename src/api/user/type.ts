// 登录接口需要携带参数ts类型
export interface loginForm {
    username: string,
    password: string
}

// 登录接口返回的数据类型
interface dateType {
    token?: string
    message?: string
}
export interface loginResponseData {
    code: number,
    data: dateType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}
interface IUser {
    checkUser: userInfo
}
export interface userResponseData {
    code: number,
    data: IUser
}
