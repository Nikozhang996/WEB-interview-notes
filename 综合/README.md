## 请说说cookie，localStorage，sessionStorage，indexDB之间的区别的使用场景?
- 首先，cookie的存储大小只有4k左右，并且有个数限制，各个浏览器的限制不同，它可以与服务器通信，每次都会携带在HTTP头中，如果cookie中存储的数据过多，可能会带来性能问题。
- localStorage和sessionStorage是HTML5中新出的API，有5MB的存储空间，并且只在客户端中保存，不参与服务器通信。localStorage的生命周期是永久的，不会因关闭页面或关闭浏览器而清除，用户可以在浏览器提供的操作中手动清空localStorage数据。
- sessionStorage仅在当前会话中有效，关闭页面或浏览器后将被清除。
- 不同浏览器无法共享localStorage或sessionStorage的信息。localStorage可以在相同浏览器的不同页面中共享localStorage数据。但sessionStorage无法做到这点。这里需要注意的是，页面及标 签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。

## 请简述页面渲染的过程

- DNS 解释
  - 本地 host 文件
  - 浏览器 DNS 缓存
  - 递归查找域名服务商
  - 浏览器缓存 -> 系统缓存 -> 路由器缓存 -> ISP(运营商)DNS 缓存 -> 根域名服务器 -> 顶级域名服务器 com -> 主域名服务器的顺序
- 发送 HTTP 请求建立 TCP 链接（三次握手）
- 响应和解析 HTML 文件
  - 解释 HTML 生成 DOM tree
  - 解释 CSS 生成 CSSOM tree
  - 将 DOM 结合 CSSOM 生成 render tree
  - 渲染页面，执行 layout-->paint
- 渲染完成 / 请求结束（四次挥手）
  - C：我没有了

#### 参考资料

- [浏览器渲染页面过程与页面优化](https://segmentfault.com/a/1190000010298038)
- [前端经典面试题: 从输入 URL 到页面加载发生了什么？](https://segmentfault.com/a/1190000006879700)
- [从 URL 输入到页面展现到底发生什么？](https://segmentfault.com/a/1190000017184701)
- [浏览器工作原理：从输入 URL 到页面加载完成 #55](https://github.com/amandakelake/blog/issues/55)
- [Render 树、RenderObject 与 RenderLayer](http://www.nowamagic.net/academy/detail/48110562#)
- [从输入页面地址到展示页面信息都发生了些什么？ #271](https://github.com/kaola-fed/blog/issues/271)

## 你所理解的前端模块化

#### 参考资料

- [前端模块化详解(完整版)](https://juejin.im/post/5c17ad756fb9a049ff4e0a62)

## 开发过程中遇到的内存泄露情况，如何解决的？

## 判断一个字符串中出现次数最多的字符，并统计这个次数。

## web 前端开发，如何提高页面性能优化？

## 请简述你所了解的 web 攻击技术

## 简述下节流防抖函数，lodash 中的实现是基于什么设计模式的？

## 简述垃圾回收机制

## 你是如何平衡 TypeScript 学习成本高、快速开发与代码规范之间的问题的

## 如何做技术选型

## 项目中印象深刻的问题

## 如何推动团队建设的？

使用 ESLint 在 IDE 中校验，在 Git Hooks 中拦截，在 CI 中校验

- ESLint
- husky

#### 参考资料

- [当前端基建任务落到你身上，该如何推动协作？](https://mp.weixin.qq.com/s/AV-MkgjDS0JhEWNHu20LqQ)
