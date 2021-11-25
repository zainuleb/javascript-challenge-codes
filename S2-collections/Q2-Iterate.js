//Write a program to iterate over an array and print all the values of it

/* Arrays can be iterated by using its index to fetch the values
Arrays also can be iterated with for each style loops */

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let index in arr) {
  console.log(arr[index]);
}

for (let value of arr) {
  console.log(value);
}

arr.forEach((val) => console.log(val));
