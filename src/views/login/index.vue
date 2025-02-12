<template>
    <div class="login_container">
        <el-row>
            <!-- 「:xs="0"」：屏幕的宽度小于等于768的时候一份不占 -->
            <el-col :span="12" :xs="0">占的位子</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="login_btn" type="primary" size="default">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        
        <!-- <el-form></el-form> -->
    </div>
</template>

<script setup lang='ts'>
import {User, Lock} from '@element-plus/icons-vue';
import { reactive } from 'vue';

// 收集帐号与密码的数据
let loginForm = reactive({username: 'admin', password: '111111'});


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
