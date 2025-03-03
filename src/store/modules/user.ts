// 创建用户相关的小仓库
import { defineStore } from "pinia";

// 引入login API接口
import { reqLogin } from "@/api/user";
// 引入login form数据类型
import type { loginForm, loginResponseData } from "@/api/user/type";
// 引入state的类型 UserState
import type { UserState } from "./type";
// 引入本地的存储方法
import { GET_TOKEN, SET_TOKEN } from "@/utils/token";

// 创建用户仓库
let useUserStore = defineStore("User", {
  // 仓库存储数据的地方
  state: ():UserState => {
    return {
      // 用户的唯一标识token作为state键
      // 用本地存储持久化token数据，让刷新的时候token也不会丢失
      token: GET_TOKEN(),
    };
  },
  // 写异步和逻辑的地方
  actions: {
    // 在store里创建了一个userLogin方法，用来登录用户的信息
    async userLogin(data: loginForm) {
      // 调用用户登录的API方法
      let result:loginResponseData = await reqLogin(data);

      // 登录成功：返回200和token
      // 登录失败：返回201和登录失败的信息
      if (result.code == 200) {
        // 把从request请求来的token存到pinia仓库中
        // pinia或者vuex存储数据其实是利用js对象
        this.token = result.data.token as string;

        // 本地存储持久化
        // localStorage.setItem('TOKEN', result.data.token as string);
        SET_TOKEN(result.data.token as string);

        return 'ok';
      } else {
        // 若失败，返回失败的Promise
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
