## 什么是跨域，如何解决跨域？

由于浏览器存在同源策略，请求的 Url 地址的协议、主机名、端口号必须完全相同，否则会产生跨域，同源策略的限制下 cookie 、loclstorage、dom、ajax、IndexDB 等都不允许跨域、form 表单不受同源策略限制
对跨域的理解有一个误区，跨域不是请求没有发送出去或者服务器接收到请求而没有响应，正确的情况是请求发出，服务器响应，由于响应和请求来自不同的域被浏览器拦截了。

跨域的方式有以下几种：

- 1、jsonp：通过 script 的 src 属性发送请求，传参必须含有 callback 回调的名称，服务器返回函数的调用，接收到响应直接执行；
- 2、cors：通过服务端设置 Access-Control-Allow-Origin，通常在后端通过白名单设置权限允许固定的域来访问
- 3、window.postMessage：H5 API，消息接收方通过 message 事件接收，事件对象 data 属性代表接收的消息，可以通过事件对象的 source 属性 通过 source.postMessage(“message”, e.origin) 进行回复
- 4、可以使用 window.name 和 location.hash 在不同域的 iframe 页面之间进行消息传递
- 5、document.domain：如果域名之间是一二级域名的关系，可以将页面的 document.domain 设置为一级域名的后半部分，如：baidu.com 实现跨域
- 6、可以使用 websocket 进行跨域，websocek 的协议为 ws:// 或 wss:// 是实时通信，不存在跨域问题。
- 7、服务器与服务器之间通信不受浏览器同源策略限制，因此不存在跨域问题，可以使用 nginx 或 node 的 http-proxy-middleware 中间件实现作为代理服务器帮助浏览器对请求进行转发，完成与不同域的服务器之间的通信，webpack-dev-server 就是通过 http-proxy-middleware 实现的跨域
  详情请看：https://www.pandashen.com/2018/06/11/20180611010638/

## http、https、以及 websocket 的区别

## http 常见的状态码，400,401,403 状态码分别代表什么？

## 协商缓存和强缓存的区别

## 说下计算机网络的相关协议？

## http 与 https 区别

#### http1.1 存在以下问题

- TCP 连接数限制
  > 同一个域名下，浏览器最多只能同时创建 6-8 个 TCP 连接，为了解决数量限制，可以利用==域名分片==。
- 线头阻塞
  > 每个 TCP

#### 参考资料

- [http2 详解)(https://www.jianshu.com/p/e57ca4fec26f)

## http 中 headers 概念

## DNS 解析过程是怎样的？

## HTTP 有什么缺点

## HTTP2 有什么好处

## HTTPS 有什么好处，有什么缺点，为什么。

## 为什么说 HTTPS 是安全的

## 解释一下加密过程

#### 参考资料

- [DNS 解析的过程是什么，求详细的？])(https://www.zhihu.com/question/23042131)

## TCP, UDP 的区别， 最佳场景

## 三次握手的过程，为什么握手三次, 为什么挥手四次

#### 参考资料

- [访问 Web，tcp 传输全过程（三次握手、请求、数据传输、四次挥手）](https://blog.csdn.net/sinat_21455985/article/details/53508115)

## 从浏览器输入 URL 到页面展示

- [浏览器输入一个 url 到整个页面显示出来经历了哪些过程？](https://blog.csdn.net/weixin_34348174/article/details/93722583)
- [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
