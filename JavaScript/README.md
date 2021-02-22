# JavaScript

## 提升变量 请输出结果并进行解释

```javascript
var name = "spring";
(function () {
  if (typeof name === "undefined") {
    var name = "summer";
    console.log(name);
  } else {
    console.log(name);
  }
})();
```

输出 summer，在 JavaScript 中， functions 和 variables 在预解析 会被提升。变量提升是 JavaScript 将声明移至作用域 scope (全局域或者当前函数作用域) 顶部的行为。
这意味着你可以在声明一个函数或变量之前引用它，或者可以说：一个变量或函数可以在它被引用之后声明。

## filter 过滤器 请输出结果并进行解释

```javascript
//filter过滤器  请输出结果并进行解释
var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function (x) {
  return x === undefined;
});
```

数组的长度虽然是 11，但是被填充的几个元素都是 empty，而不是 undefined，在用 filter 循环时，会自动忽略掉 empty 的元素。==数组自带的循环方法，都会忽略 empty==。

## trim() API 怎么用正则实现，怎么用数组实现

## commonJs 和 ES6 模块的区别

## async,await 的使用以及原理，返回 promise,捕获异常怎么处理等

## 浏览器的事件循环 , node 的事件循环

## 为什么 0.1 + 0.2 != 0.3?

因为 JavaScript 中数值运算都会从十进制转化为二进制进行，而整数的小数位在换算为二进制时会出现无限循环的情况（因为双精度和内存限制，浏览器会自动进行截取），如此在无限循环小数中计算并返回，得到的结果就是相加后的值出现多位小数。

## `==`和`===`的区别

`==`会进行类型转换而`===`不会，所以为了安全性通常都使用`===`进行判断，而`==`适用于`null和undeinfed`之中。

## `typeof`和`instanceof`区别

- typeof 只能判断基本数据类型`number，string，boolean，Symbol，null，undefined`和函数`function`
- `Object.prototype.toString.call()`方法只能识别 JS 中自带的数据类型，无法识别自定义 Class
- instanceOf 只能识别引用数据类型，原理是通过实例的`__ptoto__`和类的`prototype`是否相等去判断，instanceOf 可以用`[Symbol.hasInstance]`的方式调用。

## 请说说你对执行 JS 代码时产生的执行上下文的理解

- 首先浏览器新开一个 tab 就会新建一个 ESC 执行栈，里面默认存储着`globalContext`
- JavaScript 执行前会进行预编译，这个过程会进行 var 变量和函数 function 的提升，同时建立 VO 变量对象
- 函数调用时会开辟函数作用域，并在内部声明 AO 活动对象存储函数参数 arguments 和变量和[[scope]]作用域链，指向它声明时的父级作用域
- 当函数调用变量时会在当前函数 AO 中查找，若找不到则沿着[[scope]]向上查找，直到全局对象中

## 变量提升

- 全局中有 GlobalContext 作为 VO
- 函数中则 VO+arguments 成为 AO
- 函数中会先找行参，如果没有实参则赋值为 undefined 来代替，
- 参数赋之后则查找函数声明
- 最后 var 变量提升

## JavaScript 中的类型转换

- 首先`if()表达式和+ - * /运算符`都会进行类型转换，而转换规则可以参考规范
- 重点是原始数据类型和引用数据类型相加时，当 number 和 Object 相加时 Object 会先调用`valueOf`方法，如果`valueOf`返回的不是原始数据类型则继续调用`toString`
- 而`valueOf`和`toString`也会被`[Symbol.toPrimitive]`改写
- `> < == ===`也会进行类型转换
- `{}=={}`永远都为 false，因为引用地址不一样
- NaN 和任何类型比较都不相等
- String 和 Number 比较，将 String 转化为 Number
- 如果是 Boolean 类型，会把 Boolean 转化为数字
- Object 和 String、Number、Symbol 比较的时候，会把对象转化为原始数据类型
- 单目运算优先级最高

```javascript
/* 
1、[] == ![] 单目运算优先级最高
2、[] == false 布尔类型比较会转化为数字
3、[] == 0 先调用[].valueOf，无果
4、[] == 0 [].toString()=>''
5、'' == 0 将string转化为number，则number('')
6、0 == 0 true
*/
```

## 线性顺序存储结构和链式存储结构有什么区别？以及优缺点

## 请说一下 ES6 中 Generator 的实现原理?

## 实现一个 Function.prototype.bind 方法的 Polyfill

```javascript
Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function () {},
    fBound = function () {
      return fToBind.apply(
        this instanceof fNOP ? this : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments))
      );
    };
  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();
  return fBound;
};
```

## js 中的 new()到底做了些什么?

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

1. 一个继承自  Foo.prototype  的新对象被创建。
2. 使用指定的参数调用构造函数  Foo，并将  this  绑定到新创建的对象。new Foo  等同于  new Foo()，也就是没有指定参数列表，Foo  不带任何参数调用的情况。
3. 由构造函数返回的对象就是  new  表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤 1 创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

```javascript
var cat = new Animal("cat");
new Animal("cat") = {
    var obj = {};
    obj.__proto__ = Animal.prototype;
    var result = Animal.call(obj,"cat");
    return typeof result === 'object'? result : obj;
}
```

1. 创建一个空对象 obj;
2. 把 obj 的 proto 指向 Animal 的原型对象 prototype，此时便建立了 obj
3. 对象的原型链：obj->Animal.prototype->Object.prototype->null 在 obj 对象的执行环境调用 4.4. Animal 函数并传递参数“cat”。 相当于 var result = obj.Animal("cat")。当这句执行完之后，obj 5. 便产生了属性 name 并赋值为"cat"。【关于 JS 中 call 的用法请阅读：JS 的 call 和 apply
4. 考察第 3 步返回的返回值，如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；否则会将返回值作为新对象返回。

## 如何实现一个 promise，promise 的原理，以及它的两个参数是什么？

## map 和 set 有没有用过，如何实现一个数组去重，map 数据结构有什么优点？

## 怎么判断两个对象是否相等

## Ajax 的原生写法

xhr

```javascript
var xhr = new XMLHttpRequest(); // 声明一个请求对象

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // readyState 4 代表已向服务器发送请求
    if (xhr.status === OK) {
      // // status 200 代表服务器返回成功
      console.log(xhr.responseText); // 这是返回的文本
    } else {
      console.log("Error: " + xhr.status); // 连接失败的时候抛出错误
    }
  }
};

xhr.open("GET", "xxxx");

// 如何设置请求头? xhr.setRequestHeader(header, value);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(null); // get方法 send null(亦或者不传,则直接是传递 header) ,post 的 send 则是传递值
```

fetch

```javascript

```

## iframe 的缺点有哪些？

## 说一下你对原型与原型链的了解度，有几种方式可以实现继承，用原型实现继承有什么缺点，怎么解决？

### 参考资料

- [5 种正确处理 JS 的 this 指向的方式](https://blog.fundebug.com/2019/09/18/5-correct-methods-to-handler-this-in-javascript/)

## JavaScript 中 this 有多少种指向

this 跟函数在哪执行没有关系，而是函数调用中决定了 this 的引用。箭头函数中的 this 取决于函数的执行上下文。

- 箭头函数中的 this 只指向当前函数声明的所在作用域，且不得改变
- 默认绑定全局变量,这条规则是最常见的，也是默认的。当函数被单独定义和调用的时候，应用的规则就是绑定全局变量。
- 隐式绑定 隐式调用的意思是，函数调用时拥有一个上下文对象，就好像这个函数是属于该对象的一样
- 显示绑定 学过 bind()\apply()\call()函数的都应该知道，它接收的第一个参数即是上下文对象并将其赋给 this。
- new 新对象绑定 如果是一个构造函数，那么用 new 来调用，那么绑定的将是新创建的对象
- iife 自执行函数中 this 指向全局变量

### 参考资料

- [5 种正确处理 JS 的 this 指向的方式](https://blog.fundebug.com/2019/09/18/5-correct-methods-to-handler-this-in-javascript/)

## JSON.stringify 有哪些局限性？

- 不支持函数数据类型

## 深拷贝具体实现，各种数据类型如何处理的，循环过程中如何判断 dom 对象，拷贝一个 dom 对象

> 首先 JS 中有引用数据类型和基本数据类型两种，浅拷贝就是指将普通数据类型的值复制到一个新的变量中，把数组、对象等引用数据类型添加一个新的指针到已有的内存空间里。而深拷贝是把普通数据类型复制一份的同时，对引用类型的数据也会开辟一个新的内存空间，使拷贝后的数据与原数据没有任何指针关系。那么实现浅拷贝可以用`Object.assin`和展开运算符实现，而深拷贝可以简单地用 JSON.parse(JSON.strinfty)实现，缺点是对函数无效。如果要完整地实现就需要用 for in 递归遍历，并且要注意正则和函数这种特殊情况的处理。

## web worker 实现深拷贝的局限，web worker 有那些局限，为什么要这样设计？

## a==1 && a==2 && c==3 // true 有多少种实现方式？

### 参考资料

- [关于(a==1&&a==2&&a==3)=true 问题的思考](https://www.jianshu.com/p/4a0d04399024)

## setTimeout 如何执行的，属于第几轮循环

## async 里为什么不推荐 return await

> 通常两者没有太大区别，但在 return await pro()中会解释一个 promise 从而增加内存占用，除此之外，如果在 try……catch 中的话会直接在内部调用 promise resolve，而直接 return pro 的话则解释交给外层处理。

### 参考资料

- [Disallows unnecessary return await (no-return-await)](https://eslint.org/docs/rules/no-return-await)
- [Difference between `return await promise` and `return promise`](https://stackoverflow.com/questions/38708][]0/difference-between-return-await-promise-and-return-promise)
- [await vs return vs return await](https://jakearchibald.com/2017/await-vs-return-vs-return-await/)

## JavaScript 中异步处理有多少种方案？

- 回调函数形式，如 node 中的异步方法
- promise 形式，通过 then 方法接收异步结果
- async await，通过 await 解析 promise 返回的结果
- 发布订阅模式
- generator

### 参考资料

https://www.cnblogs.com/zuobaiquan01/p/8477322.html

## 如何理解 JS 中的闭包

《JavaScript 高级程序设计》这样描述：

> 闭包是指有权访问另一个函数作用域中的变量的函数；

《JavaScript 权威指南》这样描述：

> 从技术的角度讲，所有的 JavaScript 函数都是闭包：它们都是对象，它们都关联到作用域链。

《你不知道的 JavaScript》这样描述：

> 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

简言之，闭包就是能够读取其他函数内部变量的函数。由于在 JS 中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。利用闭包的特征我们可以实现高阶函数与函数柯里化。

### 参考资料

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

## 原型和原型链定义，继承

## 参考资料

- [Vue + TypeScript + Element 项目实战及踩坑记](https://zhuanlan.zhihu.com/p/60952007)
- [JavaScript 运行原理解析](https://juejin.im/post/5a5d64fbf265da3e243b831f)
- [38 个 JavaScript 面试题为你助力金九银十(面试必读)](https://blog.fundebug.com/2019/09/12/38-javascript-interview-questions/)
- [5 种正确处理 JS 的 this 指向的方式](https://blog.fundebug.com/2019/09/18/5-correct-methods-to-handler-this-in-javascript/)
