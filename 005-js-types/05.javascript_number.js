//JavaScript Number
/*In this tutorial, 
you will learn about JavaScript Number with the help of examples.

In JavaScript, numbers are primitive data types. 
For example,*/

const a = 3;
const b = 3.13;

/*Unlike in some other programming languages, 
you don't have to specifically declare 
for integer or floating values using int, float, etc.

You can use exponential notation e to include too large or too small numbers. 
For example,*/

const a1 = 5e9;
console.log(a1);//Output: 5000000000

const a2 = 5e-5;
console.log(a2);//Output: 0.00005

/*Numbers can also be denoted in hexadecimal notation. 
For example, */

const a3 = 0xff;
console.log(a3);//Output: 255

const a4 = 0x00;
console.log(a4);//Output: 0

//============ + Operator with Numbers ==============
/*When + is used with numbers, 
it is used to add the numbers. For example,*/

const a5 = 4 + 9;
console.log(a5); //Output: 13

/*When + is used with numbers and strings, 
it is used to concatenate them. For example, */

const a6 = '4' + 9;
console.log(a6);//Output: 49

/*When a numeric string is used with other numeric operations, 
the numeric string is converted to a number. For example,*/

const b1 = '4' - 2;
const b2 ='4' / 2;
const b3 = '4' * 2;

console.log(b1);//Output: 2
console.log(b2);//Output: 2
console.log(b3);//Output: 8

//========== JavaScript NaN =======================
/*In JavaScript, 
NaN(Not a Number) is a keyword that indicates 
that the value is not a number.

Performing arithmetic operations (except + ) 
to numeric value with string results in NaN. 
For example,*/

const c1 = 4 - 'hello';
console.log(c1); //Output: NaN

/*The built-in function isNaN() 
can be used to find if a value is a number. 
For example, */

const c2 = isNaN(4);
console.log(c2);//Output: false

const c3 = isNaN(4 - 'hello');
console.log(c3);//Output: true

/*When the typeof operator is used for NaN value, 
it gives a number output. For example, */

const c4 = 4 - 'hello';
console.log(c4); //Output: NaN
console.log(typeof(c4));//Output: number


//================ Javascript Infinity ===============

/*In JavaScript, 
when calculation is done that exceeds the largest (or smallest) possible number,
 Infinity (or -Infinity) is returned. 
 For example,*/

 const d1 = 2 / 0;
 console.log(d1);//Output: Infinity

 const d2 = -2 / 0;
 console.log(d2);//Output: -Infinity

 //============== Javascript BigInt ================
 /*In JavaScript, 
 Number type can only represent numbers less than (253 - 1) 
 and more than -(253 - 1). 
 However, if you need to use a larger number than that, 
 you can use the BigInt data type.

A BigInt number is created by appending n to the end of an integer. 
For example, */

// BigInt value
const value = 900719925124740998n;

// Adding two big integers
const value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"

/*
Note: BigInt was introduced in the newer version of JavaScript 
and is not supported by many browsers. 
Visit JavaScript BigInt support to learn more. */

//================ JavaScript Numbers Are Stored in 64-bit =============

/*In JavaScript, 
numbers are stored in 64-bit format IEEE-754, 
also known as "double precision floating point numbers".


The numbers are stored in 64 bits (the number is stored in 0 to 51 bit positions, 
the exponent in 52 to 62 bit positions and the sign in 63 bit position). 

Numbers	            Exponent	            Sign
52 bits(0 - 51)	    11 bits(52- 62)	        1 bit(63)
*/

// ============= Precision Problems ==================

/*Operations on floating-point numbers results in some unexpected results. 
For example, */

const e = 0.1 + 0.2;
console.log(e);//Output: 0.30000000000000004

/*The result should be 0.3 instead of 0.30000000000000004. 
This error occurs because in JavaScript, 
numbers are stored in binary form to represent decimal digits internally. 
And decimal numbers can't be represented in binary form exactly.

To solve the above problem, you can do something like this: */

const e1 = (0.1*10 + 0.2*10)/10;
console.log(e1);//Output: 0.3

//You can also use the toFixed() method.
const e2 = 0.1 + 0.2;
console.log(e2.toFixed(2));//Output: 0.30
/*toFixed(2) rounds up the decimal number to two decimal values. */


/*
const a = 9999999999999999
console.log(a); // 10000000000000000
Note: Integers are accurate up to 15 digits. 
*/

//=============== Number Objects =====================

/*You can also create numbers using the new keyword. 
For example, */

const f = 45;
const g = new Number(45);

console.log(f); //Output: 45
console.log(g); //Output: [Number 45]

console.log(typeof f);//Output: number
console.log(typeof g);//Output: object

/*Note: It is recommended to avoid using number objects. 
Using number objects slows down the program. */

//========== JavaScript Number Methods ===========================

/*Here is a list of built-in number methods in JavaScript.

Method	    Description
isNaN()	    determines whether the passed value is NaN
isFinite()	determines whether the passed value is a finite number
isInteger()	determines whether the passed value is an integer
isSafeInteger()	    determines whether the passed value is a safe integer
parseFloat(string)	converts the numeric floating string to floating-point number
parseInt(string, [radix])	    converts the numeric string to integer
toExponential(fractionDigits)	returns a string value for a number in exponential notation
toFixed(digits)	    returns a string value for a number in fixed-point notation
toPrecision()	    returns a string value for a number to a specified precision
toString([radix])	returns a string value in a specified radix(base)
valueof()	        returns the numbers value
toLocaleString()	returns a string with a language sensitive representation of a number

For example, */

const h1 = 12;
console.log(Number.isInteger(h1));//Output: true

const h2 = NaN;
console.log(Number.isNaN(h2));//Output: true

const h3 = 5.1234;
console.log(h3.toFixed(2));//Output: 5.12

//============== JavaScript Number Properties ===============
/*
Here is a list of Number properties in JavaScript.

Property	            Description
EPSILON	                returns the smallest interval between two representable numbers
MAX_SAFE_INTEGER	    returns the maximum safe integer
MAX_VALUE	returns     the largest possible value
MIN_SAFE_INTEGER	    returns the minimum safe integer
MIN_VALUE	            returns the smallest possible value
NaN	                    represents 'Not-a-Number' value
NEGATIVE_INFINITY	    represents negative infinity
POSITIVE_INFINITY	    represents positive infinity
prototype	            allows the addition of properties to Number objects

For example,
 */

// largest possible value
const i1 = Number.MAX_VALUE;
console.log(i1); // 1.7976931348623157e+308

// maximum safe integer
const i2 = Number.MAX_SAFE_INTEGER;
console.log(i2); // 9007199254740991


//================= JavaScript Number() Function ========================

/*The Number() function is used to convert various data types to numbers. 
For example, */

const j = '23';//string
const k = true;//boolean

const result1 = Number(j);
const result2 = Number(k);

console.log(result1);
console.log(result2);







