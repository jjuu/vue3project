## 主要流程
- #1: 写自定义校验规则

### 1. **定义自定义校验规则** （`src/views/login/index.vue`）
#### 增加了表单自定义校验规则。
- 通过在`rules`里写`validator`来绑定自定义校验规则函数

```ts
const rules = {
    username: [
        {trigger: 'change', validator: validateUserName},
    ],
    password: [
        {trigger: 'change', validator: validatePassword}
    ],
}

/**
 * 自定义的校验规则函数
 * @param rule  校验规则对象
 * @param value 表单输入的文本内容
 * @param callback 回调函数，如果通过则调用
 */
const validateUserName = (rule: any, value: any, callback: any) => {
    // rule: 
    if (value.length >= 5) {
        callback();
    } else {
        callback(new Error('帐号长度至少5位'));
    }
}

/**
 * 自定义的校验规则函数
 * @param rule 
 * @param value 
 * @param callback 
 */
const validatePassword = (rule: any, value: any, callback: any) => {
    if (value.length < 6) {
        callback();
    } else {
        callback(new Error('密码长度至少6位'));
    }
}
```
