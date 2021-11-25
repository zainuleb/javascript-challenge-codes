//Write a program to iterate over a 2 dimensional array and print all the values of it

/* Arrays can be iterated by using its index to fetch the values
Arrays also can be iterated with for each style loops, with one loop to iterate the rows and inside it for cells */

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

for (let rowArr of arr) {
  for (let value of rowArr) {
    console.log(value);
  }
}

arr.forEach((rowArr) => rowArr.forEach((val) => console.log(val)));
