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

async function rejectionWithReturnAwait() {
  try {
    return await Promise.reject(new Error());
  } catch (e) {
    return "rejectionWithReturnAwait!";
  }
}

async function rejectionWithReturn() {
  try {
    return Promise.reject(new Error());
  } catch (e) {
    return "rejectionWithReturn!";
  }
}

rejectionWithReturnAwait()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

rejectionWithReturn()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
