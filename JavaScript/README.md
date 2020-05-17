## JavaScript 中 this 有多少种指向

#### 参考资料

- [5 种正确处理 JS 的 this 指向的方式](https://blog.fundebug.com/2019/09/18/5-correct-methods-to-handler-this-in-javascript/)

## JSON.stringify 有哪些局限性？

- 不支持函数数据类型

## 深拷贝具体实现，各种数据类型如何处理的，循环过程中如何判断 dom 对象，拷贝一个 dom 对象

## web worker 实现深拷贝的局限，web worker 有那些局限，为什么要这样设计？

## a==1 && a==2 && c==3 // true 有多少种实现方式？

## setTimeout 如何执行的，属于第几轮循环

## async 里为什么不推荐 return await

> 通常两者没有太大区别，但在 return await pro()中会解释一个 promise 从而增加内存占用，除此之外，如果在 try……catch 中的话会直接在内部调用 promise resolve，而直接 return pro 的话则解释交给外层处理。

#### 参考资料

- [Disallows unnecessary return await (no-return-await)](https://eslint.org/docs/rules/no-return-await)
- [Difference between `return await promise` and `return promise`](https://stackoverflow.com/questions/38708550/difference-between-return-await-promise-and-return-promise)
- [await vs return vs return await](https://jakearchibald.com/2017/await-vs-return-vs-return-await/)

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

## 请写出下列代码输出的结果

```javascript
function fun(n, o) {
  console.log(0);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}

fun(1).fun(2).fun(4).fun(8);

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(this.name);
};

function Cat(name) {
  Animal.call(this, name);
}

var cat = new Cat("Jim");
cat.sayName();
```

## 参考资料

<<<<<<< HEAD
- [Vue + TypeScript + Element 项目实战及踩坑记](https://zhuanlan.zhihu.com/p/60952007)
=======
- [JavaScript 运行原理解析](https://juejin.im/post/5a5d64fbf265da3e243b831f)
>>>>>>> ff5e713414c78e3d1d77333a5757b5da58e6c279
