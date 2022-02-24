console.log("Polyfill of Promise.any");

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello js series");
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Hello js series TID");
});

const promise3 = 10;

