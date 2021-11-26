//Write a code to iterate over a set

/* set is an iterable object and can be iterated using for..of loop
set can also be iterated by simple forEach loop */

const set = new Set([1, 2, 3]);

for (let val of set) console.log(val);
set.forEach((value) => console.log(value));
