## 什么情况下用 VUEX？

> 业务开发中如果有一个数据需要被多个组件保持共享和同步，按照现有的数据通信方式将增加很多代码和成本。  
> 如果把这个数据放在一个公共池里，所有组件都能监听到其状态，数据被修改时可以同步到所有监听的组件，作为一种观察者。VUEX 正是解决这种情况而产生的数据共享库。

## vue 模板编译

> 正则?

## 谈谈你对 MVVM 原理的理解

> 传统的 MVC 指的是用户操作会请求服务端的路由，路由会调用对应的控制器，控制器获取和处理对应的数据返回给客户端。  
> 传统的 MVC 模式需要手动操作 DOM 把数据渲染到页面中，而 MVVM 模式不需要用户操作 DOM，data 与 view 之间数据绑定到 viewModel 中会将数据自动渲染到页面中，数据或视图变化会通知 viewModel 层更新数据。ViewModel 则是 MVVM 模式中的桥梁。

## 响应式数据的原理

> 核心点 Vue2 中基于 Object.defineProperty，Vue3 则用 Proxy 重写。默认 Vue 在初始化数据时，会给 Data 中的属性使用 Object.defineProperty 重新定义所有属性，当页面取到对应属性时会进行依赖收集（收集当前组件的 watcher），如果属性发生变化则通知相关依赖进行更新操作。

#### 原理

- initData，初始化用户传入的 data 数据
- new Observer，将数据进行观测
- this.walk(value)，进行对象的处理
- defineReactive，循环对象属性定义响应式变化
- Object.defineProperty，使用 Object.defineProperty 重新定义数据

## VUE 中是如何检测数组变化的

> Vue 中使用函数劫持的方式，重写了数组的方法。vue 将 data 中的数组，进行原型链重写，指向了自定义数组原型的方法，这样当调用数组 api 时，可以通知依赖更新，如果数组中饱含着引用类型，会对数组中的引用类型再次进行监控。

```javascript
const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [ 'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse' ]
methodsToPatch.forEach(function (method) { // 重写原型方法
const original = arrayProto[method] // 调用原数组的方法 def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
 switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
break
}
if (inserted) ob.observeArray(inserted)
// notify change
ob.dep.notify() // 当调用数组方法后，手动通知视图更新 return result
}) })
this.observeArray(value) // 进行深度监控
```

## 为什么 VUE 要采用异步渲染的方式

> 因为如果不采用异步更新，那么每次更新数据时都会对当前组件进行重新渲染，所以为了性能考虑，vue 会在本轮数据更新完后再去一次更新视图。

- dep.notif()，通知 watcher 进行更新操作
- subs[i].update()，依次调用 watcher 的 update
- queueWatcher，将 watcher 去重放到队列中
- nextTick(flushSchedulerQueue)，异步清空 watcher 队列

## nextTick 实现原理？

> nextTick 方法主要是使用了==宏任务==和==微任务==，定义了一个异步方法，多次调用 nextTick 会将方法存入队列中，通过这个异步方法清空当前队列。

- nextTick(cb)，调用 nextTick 传入 cb
- callbacks.push(cb)，将回调函数存入数组中
- timerFunc()，跳用 timerFunc
  - 1，尝试采用 Promise 回调
  - 2，尝试采用 MutationObserver 回调
  - 3，尝试采用 setImmediate 回调
  - 4，最终采用 setTimeout 回调
- 返回 promise

## Vue 中 computed 的特点

> 默认 也是一个 是具备缓存的，只要当依赖的属性发生变化时才会更新视图

- initComputed
- new Watcher，lazy：true，默认执行 dirty：true 默认 watcher 不执行（不执行用户方法）
- defineComputed，将属性定义到实例上
- createComputedGetter，创建 getter 当取值时会执行此方法
- 当用户取值

## Watch 中 deep:true 是如何实现的

> 当用户指定了`watch`的 deep 属性为`true`时，如果当前监控的值是数组类型，会对对象中的每一项进行求值，此时会将当前当前`watch`存入到对应属性的依赖中，这样数组对象发生变化时也会通知数据更新。

## 生命周期，不同阶段做什么事

#### 每个生命周期什么时候被触发

- beforeCreate，在实例初始化之后，数据劫持（data observer）之前被调用
- created，实例已经创建完成之后被调用。在这一步，实例已经完成了以下的配置
  - 数据劫持（data observer）
  - 属性和方法的运算
  - watch/event 事件回调
- beforeMount，在挂在开始之前触发，相关的 render 函数首次被调用
- mounted，被新创建的 vm.\$el 替换，并挂载到实例上去之后调用
- beforeUpdate，数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
- updated，由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
- beforeDestroy，实例销毁之前触发，此时，实例仍然完全可用
- destroyed，vue 实例销毁后调用
  - vue 实例指示的所有东西都会解绑定
  - 所有的事件监听器会被移除
  - 所有的子实例也会被销毁
  - 该钩子在服务端渲染期间不被调用

#### 每个生命周期阶段做什么事

## 9.ajax 请求放在哪个生命周期中

## 10.何时需要使用 beforeDestroy

- 需要消除定时器或指定事件时
- 如果使用了 eventBusr 挂载了订阅者则需要手动解除订阅，否则会在重复挂载订阅

## 11.Vue 中模板编译原理

## 13.为什么 V-for 和 v-if 不能连用

## 14.用 vnode 来描述一个 DOM 结构

## 15.diff 算法的时间复杂度

## 16.简述 Vue 中 diff 算法原理

## 1.v-for 中为什么要用 key (图解)

> key 的作用是在更新组件时判断两个节点是否相同，相同则直接利用，不相同就删除旧的创建新的。所以如果没有 key 的话每次更新都不能找到可复用的节点，不但要销毁和创建 vnode，在 DOM 里添加移除节点时性能更大。默认不传 key 则按 index 索引作为 key。而使用 index 作为 key 值的话会导致直接利用原因组件状态没法被更新，这也是为什么宁愿带唯一 key 增加性能开销的原因。

## 3.组件中的 data 为什么是一个函数

> 为了使每个组件实例的 data 值都是独立的作用域，避免共享同一个引用地址导致 A 实例变更影响其他组件状态修改。

## 4.Vue 中事件绑定的原理

> 普通元素绑定事件会追加 native

## 5.v-model 中的实现原理及如何自定义 v-model

> v-model 本质上是 value 和 input 的语法糖，

## 6.Vue 中 v-html 会导致哪些问题

> 任何 html 写入都不应该由用户写入， 否则会导致 xxx 攻击

## 7. Vue 父子组件生命周期调用顺序

> 实例化中是先父后子，mounted 时是先子后父。

## 8.Vue 组件如何通信? 单向数据流

- 父子间的传递，利用 props 属性和发布订阅模式`$emit / $on`
- 兄弟间组件可以共享一个父组件作为数据中转
- 父子间嵌套太深可以利用`$attrs,$listence`继承
- 依赖注入形式，`provide, inject`
- 跨级组件可以利用 EventBus（中央事件中心）形式，组件间共享同一个 vue 实例作为数据中转
- vuex，vuex 相当于一个数据池(store)，组件间监听这个 store，当 A 组件更新 sotre，B 组件会动态更新。

## 9.Vue 中相同逻辑如何抽离

## 10.为什么要使用异步组件

## 11.什么是作用域插槽

## 12.谈谈你对 keep-alive 的了解

## 13.Vue 中常见性能优化

- 静态数据尽量避免放入 data 中，因为 data 中的数据 vue 在实例化过程中会追加 getter 和 setter 收集对应的 watcher
- 利用 Object.free 冻结数据，可以拒绝该对象中的属性被添加 watcher 劫持。
- 使用 happyPack 提高构建速度
- 合理使用路由懒加载和异步组件提高首页速度。
- 利用 v-if 特性减少实例话
- v-for 时 key 使用唯一固定值
- 使用 runtime 版本，
- 使用 keep-ailve 做组件缓存。
- 利用防抖节流模式提高数据持久化
- 拆分组件( 提高复用性、增加代码的可维护性,减少不必要的渲染 )

## 14.Vue3.0 你知道有哪些改进

- 原生支持了 TypeScript
- MVVM 模型用 proxy 重写，vue2 中使用的是 Object.definyP
- vdom 的对比算法更新，只更新 vdom 的绑定了动态数据的部分

## 15.实现 hash 路由和 history 路由

## 16.Vue-Router 中导航守卫有哪些

## 17.action 和 mutation 区别

## 18.简述 Vuex 工作原理

> vuex 也是遵循单向数据流的思路，初始化有一个 state，默认情况下不能直接修改 state

## 为什么 template 必须有一个根标签

## VUE 中 v-if 与 v-show 的区别

## Vue 如何实现组件缓存，以及监听缓存后的变化

> 使用 keep-alive 内置组件，当组件在 keep-alive 内被切换时组件的 activated、deactivated 这两个生命周期钩子函数会被执行。  
> 被包裹在 keep-alive 中的组件的状态将会被保留，例如我们将某个列表类组件内容滑动到第 100 条位置，那么我们在切换到一个组件后再次切换回到该组件，该组件的位置状态依旧会保持在第 100 条列表处

- [Vue / keep-alive](https://www.jianshu.com/p/4b55d312d297)

## 参考资料
