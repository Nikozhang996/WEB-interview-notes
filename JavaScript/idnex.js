{
  const finalPrice = (number) => {
    const doublePrice = number * 2;
    const discount = doublePrice * 0.8;
    const price = discount - 50;
    return price;
  };

  const result = finalPrice(100);
  // console.log(result); // => 110
}

{
  function compose() {
    const args = arguments;
    return function (x) {
      return Array.from(args).reduce(function (v, f) {
        return f(v);
      }, x);
    };
  }

  function double(x) {
    return x * 2;
  }
  function discount(x) {
    return x * 0.8;
  }
  function coupon(x) {
    return x - 50;
  }

  const finalPrice = compose(double, discount, coupon);

  const result = finalPrice(100);

  // console.log(result);
}

{
  function Box(x) {
    return {
      map(f) {
        return Box(f(x));
      },
      inspect() {
        return `Box${x}`;
      },
    };
  }

  function finalPrice(str) {
    return Box(str)
      .map((x) => x * 2)
      .map((x) => x * 0.8)
      .map((x) => x - 50);
  }

  const result = finalPrice(100);
  // console.log(result);
}

{
  const getuser = (id) => {
    return [
      { id: 1, name: "Loren" },
      { id: 2, name: "Zora" },
    ].filter(function (item) {
      return item.id === id;
    })[0];
  };

  const name = getuser(1).name;

  console.log(name);

  try {
    const name1 = getuser(3).name;
    console.log(name1);
  } catch (error) {
    console.log(error.message);
  }
}
