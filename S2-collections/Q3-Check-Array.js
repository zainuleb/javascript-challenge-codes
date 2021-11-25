//Check if given input is an array or not

/* Array.isArray is a method which checks if the given argument is an array or not
Alternatively the toString method present on Object prototype can be used to check if it is an array */

arr = [1, 2];

console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr) === '[object Array]');
