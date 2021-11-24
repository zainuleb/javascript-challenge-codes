// Logical OR (||) operator: For a set of operands is true if and only if one or more of its operands is true
const num1 = 10,
  num2 = 20;

console.log(true || false); // true
console.log(false || false); // false
console.log(false || num1); // 10
console.log(0 || num2); // 20
console.log('text' || true); // "text"
console.log(num1 > 0 || num2 < 0); // true

// logical AND (&&) operator for a set of operands is true if and only if all of its operands are true
console.log(true && false); // true
console.log(false && false); // false
console.log(false && num1); // 10
console.log(0 && num2); // 20
console.log('text' && true); // "text"
console.log(num1 > 0 && num2 < 0); // true

// Nullish coalescing operator (??) returns its right-hand side operand when its left-hand side operand is null or undefined
// otherwise returns its left-hand side operand

console.log(undefined ?? 10); // 10
console.log(null ?? 20); // 20
console.log(false ?? num1); // false
console.log(0 ?? num2); // 0

//double NOT (!!) operator used to explicitly force the conversion of any value to the corresponding boolean primitive

console.log(!10); // false
console.log(!!{}); // true
console.log(!!''); // false
console.log(!!0); // false

/* Note: It is not possible to combine both the AND (&&) and OR operators (||) directly with ?? */
