//Write a code to iterate over a map

/* map is an iterable object and can be iterated using for..of loop
map can also be iterated by simple forEach loop */

const map = new Map([
  [1, 'One'],
  [2, 'two'],
  [3, 'three'],
]);

for (let val of map) console.log(val[0], val[1]);
for (let key of map.keys()) console.log(key, map.get(key));
map.forEach((value, key) => console.log(key, value));
