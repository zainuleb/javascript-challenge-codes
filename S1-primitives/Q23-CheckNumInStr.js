//Write a function which returns a list of elements which contains at least one character as digit

function checkNumInStr(mixArray) {
  return mixArray.filter((value) => {
    return /[0-9]/.test(value);
  });
}

// Samples
console.log(checkNumInStr(['1a', 'a', '2b', 'b'])); // ['1a', '2b']
console.log(checkNumInStr(['abc', 'abc10'])); // ['abc10']
console.log(checkNumInStr(['abc', 'ab10c', 'a10bc', 'bcd'])); // ['ab10c', 'a10bc']
console.log(checkNumInStr(['this is a test', 'test1'])); // ['test1']
