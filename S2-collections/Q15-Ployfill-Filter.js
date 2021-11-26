//Write a program to polyfill filter functionality of the Array

/* filter iterates over the all values of array and passes value, index and array (itself) as the arguments
Function returns a new array which filtering the values of the original array */

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    if (typeof callback !== 'function')
      throw new Error('Argument passed has to be a function');

    let newArray = [];

    for (let index in this) {
      if (callback(this[index], index, this)) {
        newArray.push(this[index]);
      }
    }
    return newArray;
  };
}

//The solution is a simple polyfill of filter and not intended to handle all the corner scenarios
