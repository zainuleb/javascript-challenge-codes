//Write a function which checks if a given search text is present either in the beginning of the first name or the second name

function validateName(str, searchText) {
  const regex = new RegExp('^(\\w*\\s)?' + searchText + '\\w*?', 'i');
  return regex.test(str);
}

console.log(validateName('Nedson PETER', 'pet')); // true
console.log(validateName('Speter parker', 'pet')); // false
console.log(validateName('Peter Parker', 'pet')); // true
console.log(validateName('John Doe Peter', 'pet')); // false
