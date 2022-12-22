//JavaScript Arrow Function
/*Arrow function is one of the features introduced in the ES6 version of JavaScript. 
It allows you to create functions in a cleaner way compared to regular functions. 
For example, */

//this function
let x1 = function(x, y){
    return x * y;
}

//can be written as
let x2 = (x, y) => x * y;

//==================== Arrow Function Syntax ============
/*The syntax of the arrow function is: */

let myFunction1 = (arg1, arg2, ...argN) => {
    statements(s)
}

/*Here,

1. myFunction is the name of the function
2. arg1, arg2, ...argN are the function arguments
3. statement(s) is the function body

If the body has single statement or expression, you can write arrow function as: */

let myFunction2 = (arg1, arg2, ...argN) => expression

//Example 1: Arrow Function with No Argument
/*If a function doesn't take any argument, 
then you should use empty parentheses. 
For example, */

let greet = () => console.log('hello');
greet();//Output: hello

//Example 2: Arrow Function with One Argument
/*If a function has only one argument, 
you can omit the parentheses. For example, */

let greet1 = x => console.log(x);
greet1('hello');//Output: hello

//Example 3: Arrow Function as an Expression
/*You can also dynamically create a function 
and use it as an expression. For example, */

let age = 5;

let welcome = (age < 18)?
() => console.log('Baby'):
() => console.log('Adult');

welcome(); //Output: Baby

//Example 4: Multiline Arrow Functions
/*If a function body has multiple statements, 
you need to put them inside curly brackets {}. 
For example, */

let sum = (a, b) => {
    let result = a + b;
    return result
}

let result1 = sum(5, 7);
console.log(result1);//Output: 12

//============ this with Arrow Function ================
/*Inside a regular function, 
this keyword refers to the function where it is called.

However, this is not associated with arrow functions. 
Arrow function does not have its own this. 
So whenever you call this, it refers to its parent scope. 
For example,*/

//Inside a regular function
function Person() {
    this.name = 'Jack';
    this.age = 20;
    this.sayName = function(){
        console.log(this.age);

        function innerFunc(){
            console.log(this.age);
            console.log(this)
        }
        innerFunc();
    }
}

let x = new Person()
x.sayName();

/*Output:
20
undefined
Window{}
 */

/*Here, this.age inside this.sayName() is accessible because this.sayName() 
is the method of an object.

However, innerFunc() is a normal function and this.age is not accessible 
because this refers to the global object (Window object in the browser). 
Hence, this.age inside the innerFunc() function gives undefined. */

//Inside an arrow function
function Person(){
    this.name = 'Sara';
    this.age = 27;
    this.sayName1 = function(){
        console.log(this.age); 
        let innerFunc = () => {
          console.log(this.age); 
          console.log(this.name);
        }
        innerFunc();
    }
  }
  const a = new Person();
  a.sayName1();

  /*Output:
  27
  27
  Sara
   */
  /*Here, the innerFunc() function is defined using the arrow function. 
  And inside the arrow function, this refers to the parent's scope. 
  Hence, this.age gives 27 and Sara.
 */

//============= Arguments Binding ====================
/*Regular functions have arguments binding. 
That's why when you pass arguments to a regular function, 
you can access them using the arguments keyword. 
For example, */

let c = function () {
    console.log(arguments);
}

c(4,5,6);//Output: [Arguments] { '0': 4, '1': 5, '2': 6 }

/*Arrow functions do not have arguments binding.

When you try to access an argument using the arrow function, 
it will give an error. For example, */

let d = () => {
    console.log(arguments);
}
d(4,5,6);// ReferenceError: Can't find variable: arguments

/*To solve this issue, 
you can use the spread syntax. For example, */

let e = (...n) =>{
    console,log(n);
}
e(4,5,6);//Output: [ 4, 5, 6 ]

//============= Arrow Function with Promises and Callbacks ================

/*Arrow functions provide better syntax 
to write promises and callbacks. 
For example, */

//ES5
asyncFunction().then(function(){
    return asyncFunction1();
}).then(function(){
    return asyncFunction2();
}).then(function(){
    finish;
});

/*can be writen as */

//ES6
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish);

//====== Things You Should Avoid With Arrow Functions =====================

/*1. You should not use arrow functions to create methods inside objects. */

let person = {
    name: 'Jack',
    age: 25,
    sayName: () => {

        // this refers to the global .....
        //
        console.log(this.age);
    }
}

person.sayName(); // undefined

/*2. You cannot use an arrow function as a constructor. For example, */

let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor


/*Note: Arrow functions were introduced in ES6. 
Some browsers may not support the use of arrow functions. 
Visit JavaScript Arrow Function support to learn more. */

