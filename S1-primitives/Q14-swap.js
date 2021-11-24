//Swap 2 integers present in variables num1 and num2 without using temporary variable

/* The swapping of 2 variables is possible with simple Destructuring assignment using array
Traditional approach of swapping by using the given variables is also achievable */

let num1 = 10,
  num2 = 20;
[num1, num2] = [num2, num1];

console.log('This is Num1', num1);
console.log('This is Num2', num2);
