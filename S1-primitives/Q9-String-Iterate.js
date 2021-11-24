//Write a code to iterate over a string

//String can be traversed using its string index or value as string can act like an iterable

str = 'String can';

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

str = ' be traversed';
for (let index in str) {
  console.log(str[index]);
}

str = ' using its string';
for (let value of str) {
  console.log(value);
}

str = ' index or value ';
[...str].forEach((value) => console.log(value));
