//<h1>JavaScript Operators</h1>
//In this tutorial, you will learn about different operators available in JavaScript and how to use them with the help of examples.

//<h2>Video: JavaScript Operators</h2>

//To see the OUTPUT copy this file on JavaScript Compiler

// Operator >>	Name >>	Example
// + >>	Addition	>> x + y
// - >>	Subtraction	>> x - y
// * >>	Multiplication	>> x * y
// / >>	Division	>> x / y
// % >>	Remainder	>> x % y
// ++ >> Increment (increments by 1)	>> ++x or x++
// -- >> Decrement (decrements by 1)	>> --x or x--
// ** >> Exponentiation (Power)	>> x ** y


//Addition Example
const x1 = 8;
const y1 = 4;
const result1 = x1 + y1;
console.log(result1);

console.log(x1 + y1);//Or printed like this have same output
console.log(8 + 4);//add value without using any variables

//the + operator can also be use with strings
const text1 = "JavaScript ";
const text2 = "Is Fun";
console.log (text1 + text2);

console.log ("Javascript " + "Is " + "Fun");//O you can do like this

// Substraction Example
const x2 = 8;
const y2 = 4;
const result2 = x2 - y2;
console.log(result2);

// Multiplication Example
const x3 = 8;
const y3 = 4;
const result3 = x3 * y3;
console.log(result3);

// Division Example
const x4 = 8;
const y4 = 4;
const result4 = x4 / y4;
console.log(result4);

// Remainder Example (Modulus operator)
const x5 = 8;
const y5 = 4;
const result5 = x5 % y5;
console.log(result5);

// Remainder Example2 (Modulus operator)
const x6 = 11;
const y6 = 4;
const result6 = x6 % y6;// when 11 divided with 4 will remain 3
console.log(result6);

//Increment Example
let x7 = 8;
console.log (++x7);

//Increment can use also after variable x
let x8 = 8;
console.log (x8++);
console.log (x8);

//Decrement Example
let x9 = 8;
console.log (--x9);

//Decrement can use also after variable x
let x10 = 8;
console.log (x10--);
console.log (x10);

//Exponentiation example
let x11 = 8;
const result11 = x11 ** 2; //it is same with 8 square 2
console.log (result11); //Output 64

//Multiple Operator
const result12 = (4/2) + (3*5) - 1;
console.log (result12);

//Question Practical Example 1
//Suppose you are a university student, and you need to pay 4535 dollars tuition fee for the next semester.
//The collage is giving you a discount of 10% on the early payment of you tuition fee.
//Since it's a good offer, you decided to make an early payment.
//Can you find out how much money you have to pay?

const initialFee = 4535;
const discountPercent = 10;

const discountAmount = discountPercent/100 * initialFee;

const totalFee = initialFee - discountAmount;
console.log (`Fee after discount: ${totalFee} dollars`);

//Question Practical Example 2
//Suppose you go on a run every other day.
//And you cover a distance of about 5 kilometers a day.
// Now you want to convert that distance from kilometers into miles and see how much distance you coverd in miles.
const kmDistance = 5;
const conversionRatio = 0.621371;

const milesDistance = kmDistance * conversionRatio;

console.log ("You covered: " + milesDistance + " miles");


//Create a program that converts degree celcius to fahrenheit.
//The formula to convert celcius to fahrenheit is
//Formula: fahrenheit= celcius * 1.8 + 32

let celcius = 88;
let fahrenheit = celcius * 1.8 + 32;

console.log (`${celcius} is equals to ${fahrenheit} fahrenheit`);


// Programiz Quiz
//Q. What is the output of the following code?

console.log(5**3);
