## CSS 动画

### 参考资料

- [2019 年了，你还不会 CSS 动画？](https://juejin.im/post/6844903845470945294)

## 伪类元素是怎样的？

### 参考资料

- [CSS content 内容生成技术以及应用](https://www.zhangxinxu.com/wordpress/2010/04/css-content%E5%86%85%E5%AE%B9%E7%94%9F%E6%88%90%E6%8A%80%E6%9C%AF%E4%BB%A5%E5%8F%8A%E5%BA%94%E7%94%A8/)

##### 请简述 CSS 加载方式`link`和`@import`的区别？

1. 来源与作用

- link 属于 XHTML 标签，除了可以加载 CSS 外，还可以定义 RSS，定义 rel 链接属性
- 而@import 完全是 CSS 提供的一种方式，只能加载 CSS。

2. 加载顺序不同

- 加载顺序不同，link 引用的 CSS 会在页面被加载的时候同时加载，而@import 引用的 CSS 会等到页面被全部下载完再被加载。

3. JavaScript 可以控制 link，但@import 却无法控制
4. @import 可以在 CSS 中再此引入 其他样式表，以一个主表引入其他从表，从而实现模块化

##### 什么是 IFC?IFC 的作用是什么？

IFC 是 inline formatting context（行内格式上下文）的简称，如果一个矩形区域，包含着一些排成一条线的盒子，称为 line box。在 IFC 中是无法直接对元素设置宽高的，一个 line box 的高度受其子元素的 line-height 和 vertical-align 的影响。宽度由他的包含块(containg block)和 floats 的存在情况决定，我们一般会利用 IFC 来进行元素的垂直与水平居中效果。

例子水平放置，一个接着一个，从包含块顶部开始。在盒子间 margin,borders 和 padding 的水平值是有效的。这些盒子也许通过不同的方式进行对齐:他们的底部和顶部也许被对齐，或者通过文字的基线进行对齐。矩形区域包含着来自一行的盒子叫做 line box，主要影响 line-height 和 vertical-align 两个属性在布局的使用

## 你的移动端适配怎么做的？

> 视图、视口、窗口

参考资料：

- https://mp.weixin.qq.com/s/y2kzv5S2TvkMwgwZPbSyKA
- https://mp.weixin.qq.com/s/DFOrEUsVqmujHW7tADsH0g
- https://mp.weixin.qq.com/s/N2vRHKOE9WH_TAtwBaiX_Q
- https://mp.weixin.qq.com/s/ALXtRYIsaFM4FPEj3zwKqQ

## animate 和 translate 有没有用过，一些常见的属性说下？

##CSS 实现宽度自适应 100%，宽高 16:9 的比例的矩形。

## 用 flex 实现九宫格

```html
.box {
  display: flex;
  flex-flow: column;
}

.row {
  display: flex;
  flex-flow: row;
}

.cell {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid #666666;
}

<div class="box">
  <div class="row one">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
  </div>
  <div class="row two">
    <div class="cell">4</div>
    <div class="cell">5</div>
    <div class="cell">6</div>
  </div>
  <div class="row three">
    <div class="cell">7</div>
    <div class="cell">8</div>
    <div class="cell">9</div>
  </div>
</div>
```

#### 参考资料

- [CSS 实现自适应九宫格布局](https://me.chjiyun.com/2017/12/08/CSS%E5%AE%9E%E7%8E%B0%E8%87%AA%E9%80%82%E5%BA%94%E4%B9%9D%E5%AE%AB%E6%A0%BC%E5%B8%83%E5%B1%80/)

## 实现一个圣杯布局

> 题目：假设高度已知，请写出三蓝布局，其中左栏、右栏宽度各位 300px，中间自适应。

#### 基于 float

```html
<body
  > <div
  class="wrap"
  > <div
  class="left"
  > left</div
  > <div
  class="right"
  > right</div
  > <div
  class="content"
  > content</div
  > </div
  > </body
  > body,
html {
  color: aliceblue;
  height: 100%;
}
.wrap {
  height: 100%;
}
.left {
  width: 200px;
  height: 100%;
  float: left;
  background: #f66;
}
.content {
  height: 100%;
  background: black;
}
.right {
  width: 200px;
  height: 100%;
  background: blue;
  float: right;
}
```

- article 中三个 div 顺序要注意 left 和 right 已经脱离文档流，这须写在 center 之前
- left 块为左浮动，right 为右浮动，再把 center 放中间则其没设置宽度就会自动撑开

#### 基于绝对定位

```css
.wrap {
  height: 100%;
  position: relative;
}
.left {
  width: 200px;
  height: 100%;
  background: #f66;
  position: absolute;
  left: 0;
}
.content {
  height: 100%;
  background: black;
  position: absolute;
  left: 200px;
  right: 200px;
}
.right {
  width: 200px;
  height: 100%;
  background: blue;
  position: absolute;
  right: 0;
}
```

- .left, .right, .content 都设为绝对定位
- left，right 各自定位值为 0，content 两边的宽度。

#### 基于 flex

```css
.wrap {
  height: 100%;
  display: flex;
}
？BFC 的区域不会与 float box 重叠。
.left {
  width: 200px;
  height: 100%;
  background: #f66;
}
.content {
  height: 100%;
  background: black;
  flex: 1;
}
.right {
  width: 200px;
  height: 100%;
  background: blue;
}
```

### 疑点

- table 布局待尝试
- 绝对定位的规则是怎样的？
- 文档流的概念
- flex 属性概念。

## 解释下重绘与回流

### 参考资料

- [你真的了解回流和重绘吗](https://segmentfault.com/a/1190000017329980)
- [什么是回流，什么是重绘，有什么区别？](https://www.jianshu.com/p/e081f9aa03fb)

## CSS 中一个块级元素有多少种垂直水平居中

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

## 请说一下标准的 CSS 的盒子模型

> 首先盒子模型分标准盒子模型和怪异盒子模型

- 标准盒子模型的结构为：内容宽度(content) + border + padding + margin
- 怪异盒子模型的结构为：内容宽度(content,border,padding) + margin
- 我们可以通过`box-sizing`控制盒子模型的**解释方式**，默认值为`content-box`标准模型，`border-box`为怪异模式。

## CSS 选择器有多少种？

> ID 选择器(#id)、类选择器#(.class-name)、标签选择器(div)、相邻选择器(div+div)、子选择器(div>span)、后代选择器(div span)、通配符选择器(\*)、属性选择器、伪类选择器（a:hover)。
> 其中权重排序为:`!important>[id>class>tag]`，其中!important 比内联 style 优先级高。

## position 有多少种值？

- static(默认值)，按照正常文档流排列
- relative(相对定位)，不脱离文档流，参考自身静态位置通过`top,bottom,left,right`定位；
- absolute(绝对定位)，参考距离层级最近一个不为 static 的父级元素通过`top,bottom,left,right`定位；
- fixed(固定定位)，参考可视窗口为定位对象。

## 纯 CSS 画一个三角形有多少种方式？

```css
```

## display:none 与 visibility：hidden 的区别？

> display:none 不显示对应的元素，在文档布局中不再分配空间，切换属性触发回流+重绘；
> display:hidden 隐藏对其元素，在文档布局中保留原来的空间，仅切换显示和隐藏，只触发重绘；

## 对 BFC 规范(块级格式化上下文：block formatting context)的理解？

> BFC 的中文翻译是块级格式化上下文，它规定了内部的 Block-level Box 如何布局。
> 核心原理是：BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此，BFC 之间的元素都是各自独立。

### BFC 布局规则

- 内部的元素会在垂直方向排列
- 元素间的边距由 margin 值定义，相邻的两个 box 之间的 margin 会发生重叠
- 计算 BFC 盒子高度时，浮动元素也参与计算
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- BFC 的区域不会与 float box 重叠。

### 什么条件下生成 BFC？

- 根元素
- float 属性不为 none 时
- position 为 absolute 或 fixed
- display 为 inline-block, table-cell, table-caption, flex, inline-flex
- overflow 不为 visible( hidden,scroll,auto, )

### 实际开发中有哪些实践

- 清除浮动
- 防止元素间的 margin 重叠

### 参考

- https://www.jianshu.com/p/66632298e355

## pisotion 属性中，`relative,absolute,static,fixed`的作用，相对谁定位？

## 参考资料

- https://blog.csdn.net/u014697639/article/details/80311559
- （50 道 CSS 经典面试题（包含答案）
