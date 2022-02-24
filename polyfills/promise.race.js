console.log("Polyfill of Promise.race");

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello js series");
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Hello js series TID");
});

const promise3 = 10;

// Promise.race([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Promise Race
// Input is the array of promises.
// Return the first one to be resolved or reject.

//polyfill of promise.race

Promise.myRace = function (arrayOfPromises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arrayOfPromises.length; i++) {
      Promise.resolve(arrayOfPromises[i]).then(resolve, reject);
    }
    // promise.then((value)=>{resolve(value)},(error)=>{reject(error)})
  });
};

Promise.myRace([promise1, promise3, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
