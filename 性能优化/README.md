## 常见优化策略
- requestIdleCallback
- requestAnimationFrame
- IntersectionObserver 懒加载
- 使用HTTP2，相比HTTP1.1，H2提供了许多优点，包括二进制报头和多路复用
- 考虑在所有关键资源加载完毕后延迟加载屏幕外和隐藏的图像
- 合理使用图片格式，如JPG, PNG, SVG，可以考虑用web新一代格式
- 启用文本压缩，服务器设置gizp
- 给img标签设置width,height属性，让浏览器提前知道宽高render文档流减少重排可能
- 减少主线程工作


## 参考资料 

- [这是关于 JavaScript 内存泄露和 CSS 优化相关序列文章](https://github.com/zhansingsong/js-leakage-patterns)
- [23 条性能优化](https://zhuanlan.zhihu.com/p/121056616)
- [Google：分析运行时性能](https://developers.google.com/web/tools/chrome-devtools/rendering-tools?hl=zh-cn)
- [用 Chrome DevTools 监测网页的 Reflow/Repaint](http://www.nowamagic.net/academy/detail/48110683)
- https://gitee.com/jw-speed/zhufeng-public/blob/master/browser-optimize-1/note.md
- https://gitee.com/jw-speed/zhufeng-public/blob/master/browser-optimize-2/note.md
