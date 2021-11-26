// Write a program to polyfill reduce functionality of the Array

/* reduce iterates over the all values of array and passes value, index and array (itself) as the arguments
reduce accepts an optional initial value which when not provided can be skipped
Function returns a single value after all the iteration */

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, init) {
    let startPosition = 0;
    let accumulator = init ?? this[startPosition++];

    for (let index = startPosition; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
  };
}
