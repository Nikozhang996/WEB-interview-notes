console.log(1);

async function async1() {
  console.log(2);

  new Promise(resolve => {
    console.log(3);

    resolve();
  }).then(() => {
    console.log(4);
  });

  await new Promise(resolve => {
    console.log(5);
  }).then(() => {
    console.log(6);
  });

  console.log(7);
}

async function async2() {
  console.log(9);
}

setTimeout(() => {
  console.log(8);
});

async1();

async2().then(() => {
  console.log(10);
});

console.log(11);