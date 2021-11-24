/*-------------- How to use "typeof" operator on different type of values --------------*/

//Type: Number
console.log(typeof 47);
console.log(typeof NaN); // (In JavaScript)
console.log(typeof Infinity); //(Infinity, -Infinity, -0 are typeed as numbers in JavaScript)

//Type: String
console.log(typeof 'text');

//Type: Boolean
console.log(typeof true);

//Type: undefined
console.log(typeof undefined);
console.log(typeof someUndefinedVar); //(Un-declared variables)

//Type: function
const foo = () => {};
console.log(typeof foo);

//Type: Big Int
console.log(typeof 10n);

//Type: Symbol
console.log(typeof Symbol());

//Type: Object
console.log(typeof [1, 2, 3]);
console.log(typeof {});
console.log(typeof null); // (In JavaScript)
console.log(typeof /regex/); // (regular expressions start and end with '/' in literal form)
