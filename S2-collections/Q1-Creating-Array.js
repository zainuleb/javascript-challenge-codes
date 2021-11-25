//Show the different ways of creating an array

/* Arrays are the collection of values in javascript. Array is a special type of object in JavaScript
Arrays values are indexed from 0 and have special property length which stores the count of elements present in array */

let arr = [];

// literal
console.log((arr = []));

// constructor declaration
console.log((arr = new Array()));

// array with pre-defined slots
console.log((arr = new Array()));

// array with pre-defined values
console.log((arr = [1, true, '2']));

// console.log(constructor form with values
console.log((arr = new Array([1, true, '1'])));
