console.log("Polyfill of Promise.any");

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello js series");
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Hello js series TID");
});

const promise3 = new Promise((resolve, reject) => {
  reject("Hello js series TID");
});

// Promise.any([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// polfill of promise.any

Promise.myAny = function (arrayOfPromises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    for (let i = 0; i < arrayOfPromises.length; i++) {
      Promise.resolve(arrayOfPromises[i])
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          errors.push(err);
          if (errors.length == arrayOfPromises.length) {
            reject(
              new AggregateError(
                [new Error(errors)],
                "All promises were rejected"
              )
            );
          }
        });
    }
  });
};

Promise.myAny([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
