 console.log("Polyfill of Filter");
 
 //Always return a new array.
 
 // Logic of for loop
 
 // Always check for condition.

 let arr = [2,4,6,8];
 
 let arr2 = arr.filter((val)=> val < 5);
 
 console.log(arr);
 console.log(arr2);
 
 Array.prototype.filter = null; /// for disable filter method
 
 
 /////---- POlifill of filter ---///
 
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i , this)) {
        newArray.push(this[i])      
    }
  }
  return newArray;
}
let arr3 = arr.myFilter((val, index, array) => val <= 6);

console.log(arr)
console.log(arr3)
