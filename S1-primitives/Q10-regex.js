/* Regular expressions are patterns used to match character combinations in strings
Regular expressions can be created using literal form or constructor form
Constructor form accepts regular expression as the first argument and flags as the 2nd argument
Literal form is simple which takes regular expression and flags in a single expression */

// literal form
let re = /ab+c/g;

// constructor form
let re = new RegExp('ab+c', 'g');
