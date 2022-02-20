console.log("Polyfill of Map?");

let arr = [2, 4, 5];
let arr2 = arr.map((val, index, array) => val * 2);

// Always returns a new array.
// Logic of for loop

// Polyfill code starts-

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Polyfill code ends 

let arr3 = arr.myMap((val, index, array) => val * 3);

console.log(arr);
console.log(arr2);
console.log(arr3);