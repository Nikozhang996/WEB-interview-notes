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

- [前端经典面试题: 从输入 URL 到页面加载发生了什么？](https://segmentfault.com/a/1190000006879700)
- [从 URL 输入到页面展现到底发生什么？](https://segmentfault.com/a/1190000017184701)
- [浏览器工作原理：从输入 URL 到页面加载完成 #55](https://github.com/amandakelake/blog/issues/55)
- [Render 树、RenderObject 与 RenderLayer](http://www.nowamagic.net/academy/detail/48110562#)

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
