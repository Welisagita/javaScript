//JavaScript ES6

/*JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) 
is the newer version of JavaScript that was introduced in 2015.

ECMAScript is the standard that JavaScript programming language uses. 
ECMAScript provides the specification 
on how JavaScript programming language should work.

This tutorial provides a brief summary of commonly used features 
of ES6 so that you can start quickly in ES6. */

//================== JavaScript let ======================
/*JavaScript let is used to declare variables. 
Previously, variables were declared using the var keyword.

To learn more about the difference between let and var, 
visit JavaScript let vs var.

The variables declared using let are block-scoped. 
This means they are only accessible within a particular block. 
For example, */

//Variable declared using let
let name2 = 'Sara';
{
    //can be accessed only inside
    let name='Peter';
    console.log(name);
}
console.log(name2);

//============ JavaScript const =================
/*The const statement is used 
to declare constants in JavaScript. 
For example, */

//name declared with const can not be cganged
const name1 = 'Abu';
//Once declared, you cannot change the value of a const variable.


//=================== JavaScript Arrow Function ============
/*In the ES6 version, 
you can use arrow functions to create function expressions. 
For example,
 */

/*this function

let x = function(x, y){
    return x * y;
}
*/

//can be written as
let x = (x, y) => x * y;

//=========== JavaScript Classes =============
/*JavaScript class is used to create an object. 
Class is similar to a constructor function. 
For example,*/

class Person {
    constructor(name){
        this.name = name;
    }
}

/*Keyword class is used to create a class. 
The properties are assigned in a constructor function.

Now you can create an object. For example, */

class Person {
    constructor(name){
        this.name = name;
    }
}

const person1 = new Person ('Jack');
console.log(person1.name);//Output: Jack


//============ Default Parameter Values =============
/*In the ES6 version, 
you can pass default values in the function parameters. 
For example, */

function sum(x, y = 5){
    console.log(x + y);
}
sum(5);//Output: 10
sum(5, 15);//Output: 20

/*In the above example, 
if you don't pass the parameter for y, 
it will take 5 by default. */

//============= JavaScript Template Literals ===============
/*The template literal has made it easier to include variables inside a string. 
For example, before you had to do: */

const first_name = "Jack";
const last_name = "Sparrow";

console.log('Hello' + first_name +' '+ last_name);

/*This can be achieved using template literal by: */
const first_name1 = "Jack";
const last_name1 = "Sparrow";

console.log(`Hello ${first_name1} ${last_name1}`);//Output: Hello Jack Sparrow


//============== JavaScript Destructuring ====================
/*The destructuring syntax makes it easier 
to assign values to a new variable. 
For example, */

const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

/*Using ES6 Destructuring syntax, 
the above code can be written as: */

const person3 = {
    name3: 'Abu',
    age3: 21,
    gender3: 'male'
}

let {name3, age3, gender3} = person3;

console.log(name3);//Output: Abu
console.log(age3);//Output: 21
console.log(gender3);//Output: male

//=========== JavaScript import and export ===========
/*You could export a function or a program 
and use it in another program by importing it. 
This helps to make reusable components. 
For example, if you have two JavaScript files named contact.js and home.js.

In contact.js file, you can export the contact() function:*/

export default function contact(name4, age4){
    console.log(`The name is ${name4} and the age is ${age4}`);
}

/*Then when you want to use the contact() function in another file, 
you can simply import the function. For example, in home.js file: */

import contact from './contact.js';

contact('Sara', 25)//Output: The name is Sara and the age is 25

//=========== JavaScript Promises ====================
/*Promises are used to handle asynchronous tasks. 
For example, */

//returns a promise
let countValue = new Promise(function (resolve, reject){
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result){
        console.log(result); // Promise resolved
    },
)


//============== JavaScript Rest Parameter and Spread Operator ==========
/*You can use the rest parameter 
to represent an indefinite number of arguments as an array. 
For example, */

function show(a, b, ...args){
    console.log(a);//Output: one
    console.log(b);//Output: two
    console.log(args)//Output: [ 'three', 'for', 'five', 'six' ]
}

show('one', 'two', 'three', 'for', 'five', 'six');

/*You pass the remaining arguments using ... syntax. 
Hence, the name rest parameter.
You use the spread syntax ... to copy the items into a single array. 
For example, */

let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'for', 'five'];
console.log(arr2);//Output: [ 'one', 'two', 'three', 'for', 'five' ]

/*Both the rest parameter and the spread operator use the same syntax. 
However, the spread operator is used with arrays (iterable values). */


