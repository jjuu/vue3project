# Vue 3 + TypeScript + Vite


# 把icon组件封装成全局组件

# 封装了一个svg组件用于方便的使用
src/components/SvgIcon/index.vue

# defineProps用于接受从父组件传递过来的参数


# 在App.vue中测试了svg自定义组件的使用
# <svg-icon name="home"></svg-icon> 这种格式可能是没有注册为全局组件，无法使用名称<svg-icon>来引用
```vue
<svg style="height: 30px; width: 30px;">
    <use xlink:href="#icon-phone"></use>
</svg>
<br>
<SvnIcon name="home"/>
<svg-icon name="home"></svg-icon>
```