<template>
    <div class="login_container">
        <el-row>
            <!-- 「:xs="0"」：屏幕的宽度小于等于768的时候一份不占 -->
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
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
import { getTime } from '@/utils/time';

let userStore = useUserStore();

// 获取路由器
let $router = useRouter();

// 定义变量，控制按钮加载效果
let loading = ref(false);

// 引用了<el-form>元素
let loginForms = ref();

const login = async () => {
    // 在login后面的程序执行之前，保证全部的表单校验通过再发请求
    await loginForms.value.validate();

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
            message: '登录成功',
            title: `Hi, ${getTime()}好`,
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

const rules = {
    // 规则对象属性：required代表这个字段务必要校验
    // min: 文本长度至少多少位
    // max: 文本长度最多多少位
    // trigger: 出发校验表单的时机 
    //      change：文本发生变化触发校验
    //      blur: 失去焦点的时候触发校验规则
    username: [
        {required: true, message: '用户名不能为空。', trigger: ['blur']},
        {required: true, min: 6, max: 10, message: '帐号长度至少6位', trigger: ['change']},
    ],
    password: [
        {required: true, min:6, max:15, message: '密码的长度至少6位', trigger: ['change']}
    ],
}
</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
}

.login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
        color: white;
        font-size: 40px;
    }

    h2 {
        font-size: 20px;
        color: white;
        margin: 20px 0px;
    }
}

.login_btn {
    width: 100%;
}
</style>
