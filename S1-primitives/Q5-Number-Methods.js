//Show the frequently and commonly used methods available on Number object with coding examples

console.log(Number.isInteger(1.5)); // false
console.log(Number.isInteger(-15)); // true
console.log(Number.isInteger(-1.5)); // false

console.log(Number.parseInt('5.8')); // 5
console.log(Number.parseInt('112x')); // 123

console.log(Number.parseFloat('5.86')); // 5.86
console.log(Number.parseFloat('-12.69x')); // -12.69

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('text' - 10)); // true
console.log(Number.isNaN('text')); // false
