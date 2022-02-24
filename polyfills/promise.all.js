console.log("Polyfill of Promise.all");

// Promise
// Eventual Completion of asynchronous Operation and resulting value

// Promise can be in three states
// 1 fulfilled
// 2 pending
// 3 rejected

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello js series");
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Hello js series TID");
});

const promise3 = 10;

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// Promise.all

// Input is array of promises or any values
// Return array of results of input promises
// Wait for all promises to be resolved or any to be rejected
// You will not get result if any of promise is rejected.
// But get in the code of all

// Promise.all([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// polyfill of promise.all

Promise.myAll = function (arrayOfPromises) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let results = [];
    for (let i = 0; i < arrayOfPromises.length; i++) {
      Promise.resolve(arrayOfPromises[i])
        .then((value) => {
          counter++;
          results[i] = value;
          if (counter == arrayOfPromises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

Promise.myAll([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
