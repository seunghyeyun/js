//1. String concatenation
console.log('my'+' cat');
console.log('1'+ 2);
console.log("ellie's \n \t book");
console.log(`string literal: 1 + 2 = ${1 + 2}`);

//2. Numeric operator
console.log(1 + 1);  //add
console.log(1 - 1);  //substract
console.log(1 / 1);  //divide
console.log(1 * 1);  //multiply
console.log(5 % 2);  //remainder
console.log(2 ** 3); //exponentiation

//4. Assigment operators
let x = 3;
let y = 6;
x += y;   // x = x + y;
x -= y;
x *= y;
x /= y;

//6.  Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
// ||(or)
console.log(`or: ${value1 || value2}`);
// &&(and)
console.log(`and : ${value1 && value2}`);

//7. Equality
const stringFive = '5';
const numberFive = 5;
// loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//equality - puzzle
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);