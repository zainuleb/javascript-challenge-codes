//Write a program to store values in to a map

/* Map holds key-value pairs and remembers the original insertion order of the keys
Map can be created empty & then added with values or can be initialized also with key-value pairs */

let map = new Map();
map.set(1, 1000);
map.set(true, false);
map.set('text', 'String');

console.log(map); // [1, 1000] [true, false] ["text", "String"]

map = new Map([
  [1, 'One'],
  [2, 'two'],
  [3, 'three'],
]);
console.log(map); // [1, "One"] [2, "two"] [3, "three"]
