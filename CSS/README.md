你是如何理解跨域的？怎么解决？
> 首先跨域是由浏览器的同源策略引起的因此只在浏览器端发生，最初的目的是为了WEB安全性考虑，如果==端口、域名、协议==其中一个不一致即产生跨域请求。解决跨域目前最常用的是`CORS方案`，需要在axaj和服务端中设置headers，还有服务端代理和jsonp。
- [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
- [跨域资源共享 CORS详解）](http://www.ruanyifeng.com/blog/2016/04/cors.html)

CSS中一个块级元素有多少种垂直水平居中
```CSS
// 最常规
.box{
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top:50%;
  left:50%;
  margin-top:-50px;
  margin-left:-50px;
}
// 基于CSS3的translate变换
.box{
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  transform:translate(50%,50%)
}
// 基于flex
.content{
  width: 200px;
  height: 200px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}

// 基于margin：auto；
.box{
  width:100px;
  height:100px;
  background-color: red;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}
// 使用calc计算属性计算宽高。
.box{
  width:100px;
  height:100px;
  background-color: red;
  position: absolute;
  top:calc(50% - 50px);
  left:calc(50% - 50px);
}

/*利用table-cell*/
.content{
width:200px;
height:200px;
background-color: green;
display: table-cell;
text-align: center;
vertical-align: middle;
}

.box {
width: 100px;
height: 100px;
background-color: red;
display: inline-block;
}
```
> 核心思路在于区分定位元素宽度是否固定
- https://www.w3cplus.com/content/css3-transform
- https://www.jianshu.com/p/907f99004c3e