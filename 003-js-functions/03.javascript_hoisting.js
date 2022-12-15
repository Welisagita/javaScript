//JavaScript Hoisting

/*
Hoisting in JavaScript is a behavior in which 
a function or a variable can be used before declaration.
*/

//==============BASIC EXAMPLE HOISTING=============================================
// using test before declaring
console.log(test);   // undefined
var test;

/*
Output:
undefined
*/

//The above program works and the output will be undefined. The above program behaves as:
// using test before declaring
var test;
console.log(test); // undefined

/*
Output:
undefined
*/
//Since the variable test is only declared and has no value, undefined value is assigned to it.

//=========================VARIABLE HOISTING=====================
/*In terms of variables and constants, keyword var is hoisted 
and let and const does not allow hoisting.*/

// program to display value
a = 5;
console.log(a);
var a; // Output 5

/*In the above example, 
variable a is used before declaring it. 
And the program works and displays the output 5. 
The program behaves as:*/
var a;
a = 5;
console.log(a);//Output 5

//=======================However in JavaScript, initializations are not hoisted.=============

console.log(a);
var a = 5;
//Output: undefined

//The above program behaves as:
var a;
console.log(a);
a = 5;
//Output: undefined

/*
Only the declaration is moved to the memory in the compile phase. 
Hence, the value of variable a is undefined because 
a is printed without initializing it. 
*/

//==========Example Inside The Function================

var a = 4;
function greet(){
    b = "Hello"
    console.log(b);
    var b;
}
greet(); //Output: Hello
console.log(a); //Output: 4
console.log(b); //Output: ReferenceError: b is not defined

/*
In the above example, 
variable b is hoisted to the top of the function greet 
and becomes a local variable. 
Hence b is only accessible inside the function. 
b does not become a global variable. */


//==========If Variable use let keyword===============

a = 5;
console.log(a);
let a; //Output: ReferenceError: Cannot access 'a' before initialization
/*
If variable is used with let keyword,
that variable is not hoisted.
while using let keyword,
the variable must be declared first */
let a;
a = 5;
console.log(a); //Output: 5


//======================FUNCTION HOISTING=======================

greet()

function greet(){
    console.log("Hi There!");
}
//Output: Hi There
/*
In the above program, 
the function greet is called before declaring it 
and the program shows the output. This is due to hoisting. */

/*However, when a function is used as an expression, 
an error occurs because only declarations are hoisted. */

//For example;

greet()
let greet = function (){
    console.log("Hi There!");
}
//Output: ReferenceError: Cannot access 'greet' before initialization

greet()
var greet = function (){
    console.log("Hi There!");
}
//Output: TypeError: greet is not a function


/*
Note: Generally, hoisting is not performed in other programming languages like Python, C, C++, Java.

Hoisting can cause undesirable outcomes in your program. 
And it is best to declare variables and functions first before using them and avoid hoisting.

In the case of variables, it is better to use let than var. */