## 组件间的数据通信有多少种方式？

- 父子间的传递，利用 props 属性和发布订阅模式`$emit / $on`
- 兄弟间组件可以共享一个父组件作为数据中转
- 父子间嵌套太深可以利用`$attrs,$listence`继承
- 依赖注入形式，`provide, inject`
- 跨级组件可以利用 EventBus（中央事件中心）形式，组件间共享同一个 vue 实例作为数据中转
- vuex，vuex 相当于一个数据池(store)，组件间监听这个 store，当 A 组件更新 sotre，B 组件会动态更新。

## 什么情况下用 VUEX？

> 业务开发中如果有一个数据需要被多个组件保持共享和同步，按照现有的数据通信方式将增加很多代码和成本。  
> 如果把这个数据放在一个公共池里，所有组件都能监听到其状态，数据被修改时可以同步到所有监听的组件，作为一种观察者。VUEX 正是解决这种情况而产生的数据共享库。

## vue 模板编译

> 正则?

## 谈谈你对 MVVM 原理的理解

## 响应式数据的原理

## VUE 中是如何检测数组变化的

## 为什么 VUE 要采用异步渲染的方式

## nextTick 实现原理？

## Vue 中 computed 的特点

## Watch 中 deep:true 是如何实现的

## 生命周期，不同阶段做什么事

## 9.ajax 请求放在哪个生命周期中

## 10.何时需要使用 beforeDestroy

## 11.Vue 中模板编译原理

## 13.为什么 V-for 和 v-if 不能连用

## 14.用 vnode 来描述一个 DOM 结构

## 15.diff 算法的时间复杂度

## 16.简述 Vue 中 diff 算法原理

## 1.v-for 中为什么要用 key (图解)

## 3.组件中的 data 为什么是一个函数

## 4.Vue 中事件绑定的原理

## 5.v-model 中的实现原理及如何自定义 v-model
> v-model本质上是value和input的语法糖，

## 6.Vue 中 v-html 会导致哪些问题
> 任何html写入都不应该由用户写入， 否则会导致xxx攻击

## 7. Vue 父子组件生命周期调用顺序
> 实例化中是先父后子，mounted时是先子后父。

## 8.Vue 组件如何通信? 单向数据流

## 9.Vue 中相同逻辑如何抽离

## 10.为什么要使用异步组件

## 11.什么是作用域插槽

## 12.谈谈你对 keep-alive 的了解

## 13.Vue 中常见性能优化
- 静态数据尽量避免放入data中，因为data中的数据vue在实例化过程中会追加getter和setter收集对应的watcher
- 利用Object.free冻结数据，可以拒绝该对象中的属性被添加watcher劫持。
- 使用happyPack提高构建速度
- 合理使用路由懒加载和异步组件提高首页速度。
- 利用v-if特性减少实例话
- v-for时key使用唯一固定值
- 使用runtime版本，
- 使用keep-ailve做组件缓存。
- 利用防抖节流模式提高数据持久化
- 拆分组件( 提高复用性、增加代码的可维护性,减少不必要的渲染 )

## 14.Vue3.0 你知道有哪些改进
- 原生支持了TypeScript
- MVVM模型用proxy重写，vue2中使用的是Object.definyP
- vdom 的对比算法更新，只更新 vdom 的绑定了动态数据的部分

## 15.实现 hash 路由和 history 路由

## 16.Vue-Router 中导航守卫有哪些

## 17.action 和 mutation 区别

## 18.简述 Vuex 工作原理

## 为什么 template 必须有一个根标签

## VUE 中 v-if 与 v-show 的区别

## Vue 如何实现组件缓存，以及监听缓存后的变化

> 使用 keep-alive 内置组件，当组件在 keep-alive 内被切换时组件的 activated、deactivated 这两个生命周期钩子函数会被执行。  
> 被包裹在 keep-alive 中的组件的状态将会被保留，例如我们将某个列表类组件内容滑动到第 100 条位置，那么我们在切换到一个组件后再次切换回到该组件，该组件的位置状态依旧会保持在第 100 条列表处

- [Vue / keep-alive](https://www.jianshu.com/p/4b55d312d297)

## 参考资料
