console.log("Polyfill of Reduce?");

// Initial value can be provided
// Reduce the value to a particular element at each step with result from previous step.
// Logic of for loop
// Always get a previous value on which next computation to be performed (accumlator).

let arr = [2, 4, 5, 9, 12, 18, 20];

const sumOfArray = arr.reduce(
  (prevValue, currentVlaue) => prevValue + currentVlaue,
);

console.log(sumOfArray);

Array.prototype.reduce = null;

// polyfill of reduce

Array.prototype.myReduce = function (callback, initialValue = null) {
  let accumlator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumlator = callback(accumlator, this[i], i, this);
  }
  return accumlator;
};

// initialValue = 10
const sumOfArray1 = arr.myReduce(
  (prevValue, currentVlaue) => prevValue + currentVlaue,
  20
);
console.log(sumOfArray1);
