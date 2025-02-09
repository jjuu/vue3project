<template>
<svg>
    <use :xlink:href="prefix+name" :fill="color"></use>
</svg>
</template>

<script setup lang='ts'>
defineProps({
    // 接受父组件传递过来的参数
    prefix: {
        type: String,
        default: '#icon-',      // 默认值为"#icon-"
    },
    // 提供使用的图标名字
    name: String,
    // 接受父组件传递的颜色
    color: {
        type: String,
        default: ''
    },
    // 接受父组件传递过来的图标的宽度
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style scoped>

</style>