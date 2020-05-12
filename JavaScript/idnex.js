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

function b() {
  return new Promise(function (res, rej) {
    true ? res(200) : rej(0);
  });
}
async function a() {
  // try {
  //   const result = await b();
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }

  return await b();
}

a().then(function (res) {
  console.log(res);
});
