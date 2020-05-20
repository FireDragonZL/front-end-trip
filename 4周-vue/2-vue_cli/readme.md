### 说明
Vue-cli工具学习

1.响应式 —— 存在于data中的property才是响应式的
2.更改数据不经过Dom，而是在Vue实例中进行（数据关联视图）
[注意] 只有vue实例创建时就已经存在的property才是响应式的
3.Object.freeze(变量) 声明的变量更改后不会进行响应