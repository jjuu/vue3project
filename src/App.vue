<script setup lang="ts">
import { Delete, Edit, Plus } from '@element-plus/icons-vue';
import SvnIcon from '@/components/SvgIcon/index.vue'

</script>

<template>
  <div>
    <h1>我是app根组件</h1>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>

    <!-- <el-pagination
      :page-sizes="[10,20,30,40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination> -->
    <svg style="height: 30px; width: 30px;">
      <use xlink:href="#icon-phone"></use>
    </svg>
    <br>
    <SvnIcon name="home"/>
    <svg-icon name="home"></svg-icon>
  </div>

</template>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
