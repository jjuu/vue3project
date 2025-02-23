<template>
<div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">111</div>
    <!-- 顶部导航 -->
     <div class="layout_tabbar">222</div>
    <!-- 内容展示区 -->
     <div class="layout_main">
        <p style="height: 10000px; background-color: blueviolet;">main content</p>
     </div>
</div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: red;
    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;

    }

    .layout_tabbar {
        position: fixed;                        /* 绝对固定定位，相对于视口（浏览器窗口） */
        width: calc(100% - $base-menu-width);   /* 占满剩余宽度 */
        height: $base-tabbar-height;
        background: cyan;
        top: 0;                                 /* 贴着视口的顶部 */
        left: $base-menu-width;                  /* 从左侧菜单的宽度开始 */
        
    }
    .layout_main {
        position: absolute;
        background-color: yellowgreen;
        width: calc(100% - $base-menu-width);;
        height: calc(100vh - $base-tabbar-height);
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
    }
}
</style>