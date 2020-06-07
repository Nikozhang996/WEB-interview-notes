## 什么是 webpack

> webpack 的官方定义是一个模块打包机，他可以分析你的项目结构，通过配置 plugins 和 loader 的方式处理项目中不同的文件模块，最后输出浏览器可运行的 javascript、css 和 html 文件。

- 识别入口文件
- 通过逐层识别模块依赖(Commonjs、amd 或者 es6 的 import，webpack 都会对其进行分析，来获取代码的依赖)
- webpack 做的就是分析代码，转换代码，编译代码，输出代码
- 最终形成打包后的代码

### 参考资料

- [入门 Webpack，看这篇就够了](https://www.jianshu.com/p/42e11515c10f)

## 你在项目中如何进行 Webpack 优化?

1. 缩小文件搜索范围,配置比如 resolve.modules,resolve.modules,resolve.mainFields,resolve.alias ,resolve.extensions ,module.noParse 配置
2. 使用 DllPlugin 要给 Web 项目构建接入动态链接库
3. HappyPack 就能让 Webpack 做到这点，它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程
4. 当 Webpack 有多个 JavaScript 文件需要输出和压缩时，原本会使用 UglifyJS 去一个个挨着压缩再输出， 但是 ParallelUglifyPlugin 则会开启多个子进程，把对多个文件的压缩工作分配给多个子进程去完成
5. 可以监听文件的变化，当文件发生变化后可以自动刷新浏览器，从而提高开发效率。
6. (Hot Module Replacement)的技术可在不刷新整个网页的情况下做到超灵敏的实时预览。 原理是当一个源码发生变化时，只重新编译发生变化的模块，再用新输出的模块替换掉浏览器中对应的老模块。
7. Tree Shaking 可以用来剔除 JavaScript 中用不上的死代码。它依赖静态的 ES6 模块化语法，例如通过 import 和 export 导入导出
8. 可以使用 CommonsChunkPlugin 把多个页面公共的代码抽离成单独的文件进行加载
9. Webpack 内置了强大的分割代码的功能去实现按需加载，可以用 import 实现路由按需加载。
   10.Scope Hoisting 可以让 Webpack 打包出来的代码文件更小、运行的更快， 它又译作 "作用域提升" 11.可以使用可视化分析工具 Webpack Analyse 等去分析输出结果，从页进行优化.
10. 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩 13.优化图片，对于小图可以使用 base64 的方式写入文件中
11. 给打包出来的文件名添加哈希，实现浏览器缓存文件

## webpack 中 loader 和 plugin 的区别，你知道的 plugin 有哪些。

三、什么是 loader

loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

处理一个文件可以使用多个 loader，loader 的执行顺序和配置中的顺序是相反的，即最后一个 loader 最先执行，第一个 loader 最后执行
第一个执行的 loader 接收源文件内容作为参数，其它 loader 接收前一个执行的 loader 的返回值作为参数，最后执行的 loader 会返回此模块的 JavaScript 源码
四、什么是 plugin

在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。

五、loader 和 plugin 的区别

对于 loader，它是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 转换为 A.css，单纯的文件转换过程

plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务

## 优秀资源

- [「吐血整理」再来一打 Webpack 面试题](https://mp.weixin.qq.com/s/UdsP3u_LR64dzffNPCx-2g)
