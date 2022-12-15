//JavaScript Function and Function Expressions
/*
In this tutorial, you will learn about 
JavaScript function and function expressions 
with the help of examples.

JavaScript Function
A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. 
You can create two functions to solve this problem:

a function to draw the circle
a function to color the circle
Dividing a complex problem into smaller chunks 
makes your program easy to understand and reusable.

JavaScript also has a huge number of inbuilt functions. 
For example, Math.sqrt() is a function to calculate the square root of a number.
*/

//The syntax to declare a function is:
/*
function nameOfFunction () {
    // function body   
}
*/
/*
A function is declared using the function keyword.
The basic rules of naming a function are similar to naming a variable. 
It is better to write a descriptive name for your function. 
For example, if a function is used to add two numbers, you could name the function add or addNumbers.
The body of function is written within {}.
*/

//============Example==============
// declaring a function named greet()
function greet(){
    console.log("Hello Everybody!");
}
greet() //function call

/*Output
Hello Everybody!
 */

//==============================Function Parameters==========================
//A function can also be declared with parameters. 
//A parameter is a value that is passed when declaring a function.

// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

/*Output:
Enter a name: weli
Hello weli :)
 */


//===================Add two Numbers============

// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

/*Output
7
11
 */


//===================sum of two Numbers, Functiou return============

// program to add two numbers
// declaring a function
function add(a,b){
    return a + b;
}

// take input from the user
let number1 = parseInt(prompt("Enter first number: "));
let number2 = parseInt(prompt("Enter second number: "));

// calling function
let result = add(number1, number2);

//display the result
console.log("The sum is " + result);

/*Output:
Enter first number: 3
Enter second number: 5
The sum is 8
 */


//=============================Benefits of Using a Function
/*
> Function makes the code reusable. You can declare it once and use it multiple times.
> Function makes the program easier as each small task is divided into a function.
> Function increases readability.
*/


// program to find the square of a number
// function is declared inside the variable

let x = function (num) { 
    return num * num 
};
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);


//Note: In ES2015, JavaScript expressions are written as arrow functions.

