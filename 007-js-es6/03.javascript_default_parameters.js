//JavaScript Default Parameters

/*The concept of default parameters is a 
new feature introduced in the ES6 version of JavaScript. 
This allows us to give default values to function parameters. 
Let's take an example, */

function sum(x= 3, y= 5){
    return x + y;
}
console.log(sum(5,15));//Output: 20
console.log(sum(7));//Output: 12
console.log(sum());//Output: 8

/*
In the above example, 
the default value of x is 3 and the default value of y is 5.

sum(5, 15) - When both arguments are passed, x takes 5 and y takes 15.
sum(7) - When 7 is passed to the sum() function, x takes 7 and y takes default value 5.
sum() - When no argument is passed to the sum() function, x takes default value 3 and y takes default value 5. */


//===== Using Expressions as Default Values ==========
/*It is also possible to provide expressions as default values. */

//Example 1: Passing Parameter as Default Values
function sum(x= 1, y= x, z= x+y){
    console.log(x+y+z);
}
sum();//4

/*In the above program,

The default value of x is 1
The default value of y is set to x parameter
The default value of z is the sum of x and y */

//If you reference the parameter that has not been initialized yet, you will get an error. 
//For example,

function sum(x=y, y=1){
    console.log(x+y);
}
sum();//ReferenceError: Cannot access 'y' before initialization


//Example 2: Passing Function Value as Default Value
const sum = () => 15;

const calculate = function(x, y = x * sum()){
    return x+y;
}
const result = calculate(10);
console.log(result);//Output: 160

/*In the above program,

- 10 is passed to the calculate() function.
- x becomes 10, and y becomes 150 (the sum function returns 15).
- The result will be 160. */

//=============== Passing undefined Value =============
/*In JavaScript, 
when you pass undefined to a default parameter function, 
the function takes the default value. For example, */

function test(x=1){
    console.log(x);
}

test(undefined);//Output: 1



