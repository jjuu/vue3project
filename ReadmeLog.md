# Vue 3 + TypeScript + Vite

引用：https://juejin.cn/post/7023712777457893389

1. 插件为对象时，需要提供install方法
```ts
const demo = {
	// 参数为对象时，需要提供install方法
    install: (Vue) => {
        console.log('自定义插件', Vue);
        // 定义一些vue中常用的全局方法
		Vue.prototype.$Toast = () => { console.log('全局toast提示') }; // toast提示,通过this.$Toast调用
		Vue.prototype.$request = () => { console.log('全局request请求') }; // request请求,通过this.$request调用
    }
}

export default demo;    // NOTE: 这里export的是一个对象，名字为demo
```

main.js中通过Vue.use安装自定义的demo插件：
```ts
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import demo from './lib/demo';  // NOTE: 引入自定义插件并安装
Vue.use(demo); // 安装自定义插件

/* eslint-disable no-new */
// 把vue实例挂载在window.vm,方便使用vue的实例
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});

```


2. 接下来是 Vue.use参数为函数（插件为函数）时
```ts
const common = (Vue) => {
  console.log('自定义插件', Vue);
  // 定义一些vue中常用的全局方法
  Vue.prototype.$Toast = () => { console.log('全局toast提示') }; // toast提示,通过this.$Toast调用
  Vue.prototype.$request = () => { console.log('全局request请求') }; // request请求,通过this.$request调用
};
export default common;  // 自定义插件是一个函数，名字为common
```

main.js中通过Vue.use安装自定义的common插件：
```ts
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import common from './lib/common';  // NOTE: 引入自定义插件并安装
Vue.use(common); // 安装自定义插件

/* eslint-disable no-new */
// 把vue实例挂载在window.vm,方便使用vue的实例
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
```
