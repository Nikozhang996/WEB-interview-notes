## JavaScript 中异步处理有多少种方案？

https://www.cnblogs.com/zuobaiquan01/p/8477322.html

- 回调函数形式，如 node 中的异步方法
- promise 形式，通过 then 方法接收异步结果
- async await，通过 await 解析 promise 返回的结果
- 发布订阅模式
- generator

## 如何理解 JS 中的闭包

《JavaScript 高级程序设计》这样描述：

> 闭包是指有权访问另一个函数作用域中的变量的函数；

《JavaScript 权威指南》这样描述：

> 从技术的角度讲，所有的 JavaScript 函数都是闭包：它们都是对象，它们都关联到作用域链。

《你不知道的 JavaScript》这样描述：

> 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

- [学习 Javascript 闭包（Closure）](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

## 参考资料
