//JavaScript String

/*JavaScript string is a primitive data type that is used to work with texts. 
For example, */

const name='john';

//=========== Create Java Scripts =============
/*In JavaScript, strings are created by surrounding them with quotes. 
There are three ways you can use quotes.

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`

For example, */

const name1 ='Peter';
const name2 = "Jack";
const result = `The names are ${name1} and ${name2}`;

/*Single quotes and double quotes are practically the same 
and you can use either of them.

Backticks are generally used when you need 
to include variables or expressions into a string. 
This is done by wrapping variables or expressions with ${variable or expression} as shown above.

You can also write a quote inside another quote. For example, */

const name3 = 'My name  is "peter".';

//However, the quote should not match the surrounding quotes. For example,
//const name4 = 'My name 'peter'.'; // error

//========== Access String Characters ================
/*You can access the characters in a string in two ways.
1. One way is to treat strings as an array. 
For example, */

const a = 'hello';
console.log(a[1]); //Output: e

/*2.Another way is to use the method charAt(). 
For example, */

const b = 'hello';
console.log(b.charAt(1)); //Output: e

//============= JavaScript Strings are immutable ==============

/*In JavaScript, strings are immutable. 
That means the characters of a string cannot be changed. 
For example, */

let c = 'Hello';
c[0] = 'h';
console.log(c);//Output: Hello

/*However, you can assign the variable name to a new string. 
For example, */

let d = 'Hello';
d = 'World';
console.log(d);//Output: World


//============= JavaScript is Case-Sensitive ===========

/*JavaScript is case-sensitive. 
That means in JavaScript, 
the lowercase and uppercase letters are treated as different values. 
For example, */

const e = 'a';
const f = 'A';
console.log(e === f);//Output: false

//In JavaScript, a and A are treated as different values.

//================== JavaScript Multiline Strings ====================

/*To use a multiline string, 
you can either use the + operator or the \ operator. 
For example, */

//using the + operator
const message1 = 'this is long message ' + 
'that spans across multiple lines '+
'in the code. ';
console.log(message1);//Output: this is long message that spans across multiple lines in the code.

//using the \ operator
const message2 = 'this is long message\ that spans across multiple lines\ in the code.';
console.log(message2);//Output: this is long message that spans across multiple lines in the code.

// =============== JavaScript String Length ==============

/*To find the length of a string, 
you can use built-in length property. 
For example,*/

const g = 'Hello';
console.log(g.length);//Output: 5

//============== JavaScript String Objects ===========

/*You can also create strings using the new keyword. 
For example, */

const h = 'Hello';
const i = new String('Hello');

console.log(h);//Output: Hello
console.log(i);//Output: [String: 'Hello']

console.log(typeof(h));//Output: string
console.log(typeof(i));//Output: object

/*Note: It is recommended to avoid using string objects. 
Using string objects slows down the program. */

//=============== JavaScript String Methods ======================

/*Here are the commonly used JavaScript String methods: 
Method	        Description
charAt(index)	returns the character at the specified index
concat()	    joins two or more strings
replace()	    replaces a string with another string
split()	        converts the string to an array of strings
substr(start, length)	returns a part of a string
substring(start,end)	returns a part of a string
slice(start, end)	    returns a part of a string
toLowerCase()	        returns the passed string in lower case
toUpperCase()	        returns the passed string in upper case
trim()	                removes whitespace from the strings
includes()	            searches for a string and returns a boolean value
search()	            searches for a string and returns a position of a match
*/

//Example: JavaScript String Methods

const text1 = 'hello';
const text2 = 'world';
const text3 = '    javascript   ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1);//Output: hello world

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2);//Output: HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3);//Output: javascript

// converting the string to an array
const result4 = text1.split();
console.log(result4);//Output: [ 'hello' ]

// slicing the string
const result5 = text1.slice(1, 4);
console.log(result5);//Output: ell


//========== JavaScript String() Function =====================

/*The String() function is used to convert various data types to strings. 
For example,*/

const j = 225; //number
const k = true; //boolean

//converting to string
const result6 = String(j);
const result7 = String(k);

console.log(result6); //Output: 225
console.log(result7); //Output: true

console.log(typeof(result6)); //Output: string
console.log(typeof(result7)); //Output: string

//============ Escape Character ================

/*You can use the backslash escape character \ to include special characters 
in a string. For example,*/

const name6 = `My name is\ 'peter\'. `;
console.log(name6);//Output: My name is 'peter'. 

/*
In the above program, the same quote is included using \.

Here are other ways that you can use \:

Code	Output
\"	    include double quote
\\	    include backslash
\n	    new line
\r	    carriage return
\v	    vertical tab
\t	    horizontal tab
\b	    backspace
\f	    form feed 
*/







