//Write a function which returns true if given value of number is an integer without using any inbuilt functions

// Example
isInt(4.0); // true
isInt(12.2); // false
isInt(0.3); // false

function isInt(value) {
  return value % 1 === 0;
}
