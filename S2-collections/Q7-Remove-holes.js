//Create an array by removing all the holes of the array

/* Holes are undefined value present inside array
Holes do not get iterated in filter which will just fetch all the values except undefined */

arr = [1, , 2, , 3, , , 4];

const uniqueArr = arr.filter((value) => true);
console.log(arr, uniqueArr);
