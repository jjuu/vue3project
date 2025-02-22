## 主要流程
- #1: 定义校验规则
- #2: 校验规则不通过则不走下面的流程

### 1. **定义一些校验规则来校验表单数据** （`src/views/login/index.vue`）
#### 增加了一些表单校验规则。
- 通过配置`rules`为`<el-form :rules="rules" >`元素绑定一些规则来校验字段。
- 但是这个规则只能校验一些简单的，无法校验那些复杂的（复杂的要写自定义校验）。
```ts
const rules = {...}
```

### 2. **校验不通过则不走下面的login流程** （`src/views/login/index.vue`）

通过`await loginForms.value.validate();`来验证校验是否通过。
- validate方法返回的是Promise对象。不通过会抛出错误。

```ts
await loginForms.value.validate();
```