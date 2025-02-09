<script setup lang="ts">
import request from "@/utils/request.ts";
import {onMounted} from "vue";

// 当组件挂载完毕，发一个请求
onMounted(() => {
  console.log('发送请求');
  request({
    url: '/api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111'
    }
  }).then(res => {
    console.log(res);
  })
})
</script>

<template>
  <div>
    <h1>测试axios的二次封装</h1>
  </div>
</template>

<style scoped lang="scss">
  div {
    h1 {
      color: $color;  // $color为 scss 的全局变量。
    }
  }
</style>
