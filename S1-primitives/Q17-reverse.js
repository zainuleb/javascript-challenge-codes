//Write a program to reverse a string

/* String can be reversed by iterating it and storing it in reverse order
String can also be reversed by converting it to array, then joining it after reversing */

let str = 'JavaScript is awesome';
let reversedString = '';
for (let i = 0; i < str.length; i++) {
  reversedString = str.charAt(i) + reversedString;
}

console.log(reversedString);

//Using functions
str = 'JavaScript is awesome';
console.log(str.split('').reverse().join(''));

//Write a program to reverse a string by words. Also show the reverse of each words in place
str = 'JavaScript is awesome';
console.log(str.split(' ').reverse().join(' '));

//Write a program to reverse a given integer number

/* The remainder of the number can be fetched and the number can be divided by 10 to remvoe the the digit in loop till number becomes 0
A simple approach to reverse a number could also be to convert it in to a string and then reverse it */
let num = 3849;

let reversedNum = 0;
while (num !== 0) {
  reversedNum = reversedNum * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log(reversedNum);

num = 38.49;

let numStr = String(num);
console.log(+numStr.split('.').reverse().join(''));
