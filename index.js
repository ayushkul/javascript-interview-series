console.log("Polyfill of forEach?");

// Logic of for loop
// Computation is performed for each iteration

let arr = [2, 4, 5, 9, 12, 18, 20];

// arr.forEach((value, index, array) => console.log(value));

Array.prototype.forEach = null;

// Polyfill
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((value, index, array) => console.log(value));

