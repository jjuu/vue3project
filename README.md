## 主要流程
- #1: 有4个一级路由
- #2: 把主页分成了3个区域并添加了样式布局

### 1. **`@/layout/index.vue`里写主页布局** （`src/layout/index.vue`）
- 目前有4个一级路由
- 主页的路由（登录成功展示数据的路由（主页）：`@/views/home/index.vue`）被替换成`@/layout/index.vue`
- 在其中分成了3个区域：左侧的菜单区（`.layout_slider`），顶部的导航区（`.layout_tabbar`）和内容展示区（`.layout_main`）

```vue
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
```

### 2. **给三个区域分别添加css样式** （`src/layout/index.vue`, `src/styles/index.scss`, `src/styles/variable.scss`）
`src/layout/index.vue`
```vue
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
```

`src/styles/index.scss`
```scss
::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: yellowgreen;
    border-radius: 10px;
}

// 滚动条的外观设置
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: $base-menu-background;   
}

::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: yellowgreen;
    border-radius: 10px;
}
```

`src/styles/variable.scss`
```scss
// 左侧的菜单的宽度
$base-menu-width: 260px;

// 左侧菜单的背景颜色
$base-menu-background: #001529;

// 顶部导航的高度
$base-tabbar-height: 50px;
```
