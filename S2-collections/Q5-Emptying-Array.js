// Show the different ways of emptying an array which has values

/* Array can be emptied by giving a new reference of an empty array
Setting the length of the array to 0 will automatically makes the array empty
pop operation on array can also be used to empty the array where each elements get removed */

//Assign it to empty array
arr = [];

//Set Array length to Zero
arr.length = 0;

//Pop values of array until its length
while (arr.length > 0) {
  arr.pop();
}

//Splice method removes values from index ) to length of array
arr.splice(0, arr.length);
