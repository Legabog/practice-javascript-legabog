// Event Loop

// const timeout = setTimeout(() => {
//     console.log("After timeout")
// }, 2500)

// clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log("After timeout")
// }, 1000)

// clearInterval(interval)

// const delay = (callback, ms = 1000) => {
//     setTimeout(callback, ms)
// }

// delay(() => {
//     console.log("delay")
// }, 2000)

const delay = (ms = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve();
      reject("Что-то пошло не так");
    }, ms);
  });
  return promise;
};

// delay(2500)
//   .then(() => {
//     console.log("After 2,5 second");
//   })
//   .catch((e) => console.log("Error: ", e))
//   .finally(() => console.log("Finally"));

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

// getData().then((data) => console.log(data));

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log("Data", data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Finally");
  }
}

asyncExample();
