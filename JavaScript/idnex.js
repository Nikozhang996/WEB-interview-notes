/* function fun(n, o) {
  console.log(0);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}

// fun(1).fun(2).fun(4).fun(8);
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
 */

function handler(func) {
  return function () {
    console.log("handler");
    func();
  };
}
function func() {
  console.log(argumens);
}

let fn = handler(func);
fn();
