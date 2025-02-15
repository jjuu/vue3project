- #1: 引入pinia库。
- #2: 用`createPinia`创建pinia实例。
- #3: 定义`user`类。需要登录之后返回一个token。后将token存储在localStorage里。
- #4: 写了用户登录的逻辑，使用了#3中定义的user类。

## 1. **引入pinia库**
在`src/main.ts`中，引入pinia。
```ts
// 引入仓库
import pinia from "./store";
app.use(pinia);
```

## 2. **创建仓库，并对外暴露**
`src/store/index.ts`
创建仓库并对外暴露。
```ts
// 大仓库
// 从pinia仓库中引入创建仓库的方法
import { createPinia } from "pinia";

// 创建仓库
let pinia = createPinia();

// 对外暴露: 因为入口文件需要安装仓库
export default pinia;
```

## 3. **定义user类**
`src/store/modules/user.ts`
创建用户的仓库，定义了一个用户类。写了一个`userLogin`的方法，用于登录用户。

```ts
// 创建用户相关的小仓库
import { defineStore } from "pinia";

// 引入login API接口
import { reqLogin } from "@/api/user";
// 引入login form数据类型
import type { loginForm } from "@/api/user/type";

// 创建用户仓库
let useUserStore = defineStore("User", {
  // 仓库存储数据的地方
  state: () => {
    return {
      // 用户的唯一标识token作为state键
      // 用本地存储持久化token数据，让刷新的时候token也不会丢失
      token: localStorage.getItem('TOKEN'),     
    };
  },
  // 写异步和逻辑的地方
  actions: {
    // 在store里创建了一个userLogin方法，用来登录用户的信息
    async userLogin(data: loginForm) {
      // 调用用户登录的API方法
      let result:any = await reqLogin(data);

      // 登录成功：返回200和token
      // 登录失败：返回201和登录失败的信息
      if (result.code == 200) {
        // 把从request请求来的token存到pinia仓库中
        // pinia或者vuex存储数据其实是利用js对象
        this.token = result.data.token;

        // 本地存储持久化
        localStorage.setItem('TOKEN', result.data.token);

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
```

## 4. **用户登录页面**
`src/store/modules/user.ts`
写了用户登录的逻辑。调用#3中定义的登录逻辑。
```ts
<template>
    <div class="login_container">
        <el-row>
            <!-- 「:xs="0"」：屏幕的宽度小于等于768的时候一份不占 -->
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password"
                            show-password></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" @click="login" type="primary" size="default">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <!-- <el-form></el-form> -->
    </div>
</template>

<script setup lang='ts'>
import { User, Lock, Loading } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';

// 收集帐号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' });

// 引入用户相关的仓库
import useUserStore from '@/store/modules/user';

let userStore = useUserStore();

// 获取路由器
let $router = useRouter();

// 定义变量，控制按钮加载效果
let loading = ref(false);

const login = async () => {
    // 加载效果
    loading.value = true;

    // 1. 通知仓库发登录请求
    // 2. 如果请求成功，要跳转到首页
    // 3. 请求失败，弹出登录失败信息
    try {
        // 此处是try-catch的写法。另外可以写.then的语法
        await userStore.userLogin(loginForm);

        // 登录成功，加载效果消失
        loading.value = false;

        // 编程式导航跳转到展示数据的首页
        $router.push('/');
        // 登录成功的提示信息
        ElNotification({
            type: 'success',
            message: '登录成功'
        });
    } catch (error) {
        // 登录失败，加载效果消失
        loading.value = false;

        // https://element-plus.org/zh-CN/component/notification.html#notification-%E9%80%9A%E7%9F%A5
        ElNotification({
            type: 'error',
            message: (error as Error).message,
        });

    }


}

</script>
```