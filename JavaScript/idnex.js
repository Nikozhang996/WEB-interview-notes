// 1、按要求实现add函数。示例：add(1); //1 add()(2); //3 add()()(3); //5;
function add(value) {
  if (typeof add.value !== "number") {
    add.value = 0;
  }

  if (typeof value === "number") {
    add.value = value ? value + add.value : add.value + 1;
    return add.value;
  } else {
    add.value = add.value + 1;
    return add;
  }
}

function add() {}

// 2、如何找出一个页面里面哪个标签使用最多及数量

// 3、给定一个数字n和一堆数字数组m，请按照距离n的最小距离从小到大排序数组m。而且算出距离n最大的那个数字的二进制1的个数。
// 距离是数字与n的差值的绝对值

// 4、用123abc这6个字符随机生成一个长度至少大于6的字符串且保证每个字符都存在，然后按照升序组成新的字符串。
// 如随机生成b33ca131c232a1，排序后为111223333aabcc
