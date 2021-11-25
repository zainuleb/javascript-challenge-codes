//Write a function to chop a string into chunks of a given length and return it as array

function stringChop(str, size) {
  console.log(str, size);
  const arr = [];
  let i = 0;
  while (i < str.length) {
    arr.push(str.slice(i, i + size));
    i = i + size;
  }
  return arr;
}

console.log(stringChop('JavaScript', 5)); // ["JavaScript"]
console.log(stringChop('JavaScript', 2)); // ["Ja", "va", "Sc", "ri", "pt"]
console.log(stringChop('JavaScript', 3)); // ["Jav", "aSc", "rip", "t"]
