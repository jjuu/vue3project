## 主要流程
- #1: 增加对登录时间的判断。
- #2: 用`createPinia`创建pinia实例。
- #3: 定义`user`类。需要登录之后返回一个token。后将token存储在localStorage里。
- #4: 写了用户登录的逻辑，使用了#3中定义的user类。

### 1. **增加对登录时间的判断**
在`src/utils/time.ts`中，增加了对登录时间的判断。

### 2. **修改ElNotification根据时间的不同，给出不同的问候语**
`src/views/login/index.vue`
```ts
ElNotification({
    type: 'success',
    message: '登录成功',
    title: `Hi, ${getTime()}好`,
});
```