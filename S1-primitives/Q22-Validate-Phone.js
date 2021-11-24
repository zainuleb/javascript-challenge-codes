//Create a regular expression to validate if the given input is valid Indian mobile number or not

//Validate using regex test method
const validateMobileUsingTest = (str) => {
  const regexMobile = /^(\+91|0)?\s?\d{10}$/;
  return regexMobile.test(str);
};

//Validate using string match method
function validateMobileUsingMatch(str) {
  const regexMobile = /^(\+91|0)?\s?\d{10}$/;
  return str.match(regexMobile) !== null;
}

// Example Samples
console.log(validateMobileUsingTest('+919876543210')); // true
console.log(validateMobileUsingTest('99876543210')); // false

console.log(validateMobileUsingMatch('+91 9876543210')); // true
console.log(validateMobileUsingMatch('09876210abc')); // false
console.log(validateMobileUsingMatch('9876543210')); // true
