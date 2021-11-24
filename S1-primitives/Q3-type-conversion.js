/*-------------- Converting numbers to strings --------------*/
const randomVar = 12;

//1. Using string
String(randomVar);
console.log(typeof String(randomVar)); //returns String

//2: Using method: .toString()
randomVar.toString();
console.log(typeof randomVar.toString()); //returns String

//3. Using string concat
randomVar + '';
console.log(typeof (randomVar + '')); //returns String

/*-------------- Converting strings to numbers--------------*/

const anotherVar = 'radomString';

//1. Using Number
Number(anotherVar);
console.log(typeof Number(anotherVar));

//2. Using method: parseInt()
parseInt(anotherVar);
console.log(typeof parseInt(anotherVar));

//3. Using operator sign (+)(-)
+anotherVar;
console.log(typeof -anotherVar);
