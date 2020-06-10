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
  function finalPrice(number) {
    return [number]
      .map((x) => x * 2)
      .map((x) => x * 0.8)
      .map((x) => x - 50);
  }

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
  console.log(result);
}
