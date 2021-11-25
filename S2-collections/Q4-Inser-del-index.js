//Show insertion and removal of elements can happen in the array for given index

/* Values of the array can be removed from any position using splice method of array
Values of the array can also be inserted to any position using splice method of array
2nd argument is passed as 0 which inserts the elements without replacing
The values passed after 2nd argument are considered for insertion */

const arr = [1, 2, 2, 3];
const position = 2;
const count = 1;

arr.splice(position, count); // [2]
console.log(arr); // [1, 2, 3]

const arr = [1, 2, 4, 5];
const position = 2;
arr.splice(position, 0, 3);
console.log(arr); // [1, 2, 3, 4, 5]
