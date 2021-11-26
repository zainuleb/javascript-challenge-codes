//Write a program to store values in to a set

/* Set lets us store unique values of any type
Set can be created empty & then added with values or can be initialized also */

let set = new Set();
set.add(1);
set.add(true);
set.add('text');
set.add(1);
set.add(1);

console.log(set); // 1, true, "text"

set = new Set([1, 2, 3, 1]);
console.log(set); // 1, 2, 3
