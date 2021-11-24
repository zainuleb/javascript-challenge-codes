//Show the usage of template literals with expression interpolation and tagged templates

/* Template literals are string literals allowing embedded expressions and support multi lines
Template literals are enclosed by the backtick `
Tagged templates allow to parse template literals with a function which gets array of strings and expressions as arguments */

// Template literals with expression interpolation
const num1 = 10,
  num2 = 20;
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`); // The sum of 10 and 20 is 30

// Tagged templates
let person = 'John';
let membership = [1, 3];

function myTag(strings, person, membership) {
  let communities = ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];

  let str0 = strings[0]; // "Note:"
  let str1 = strings[1]; // "is a member of following communities:"

  let personCommunities = membership.map((index) => communities[index]);
  return `${str0}${person}${str1}${personCommunities}`;
}

console.log(
  myTag`Note: ${person} is a member of following communities: ${membership}`
); // Note: John is a member of following communities: JavaScript,HTML
