//JavaScript Constructor Function

//In JavaScript, a constructor function is used to create objects. 
//For example,

//constructor function
function Person(){
    this.name = 'John',
    this.age = 23
}
//create an object
const person = new Person();
/*In the above example, 
function Person() is an object constructor function.

To create an object from a constructor function, we use the new keyword. */
//Note: It is considered a good practice to capitalize the first letter of your constructor function.

//============== Create Multiple Objects with Constructor Function ==============

//constructor function
function Person(){
    this.name = 'John',
    this.age = 23,
    this.greet = function (){
        console.log('hello');
    }
}
//create objects
const person1 = new Person();
const person2 = new Person();

//access properti
console.log(person1.name); //Output: John
console.log(person2.name); //Output: John

/*In the above program, 
two objects are created using the same constructor function. */

//======== JavaScript this Keyword==============
/*In JavaScript, when this keyword is used 
in a constructor function, 
this refers to the object when the object is created. 
For example, */

function Person(){
    this.name = 'Ali'
}
const person3 = new Person();
console.log(person3.name); //Output: Ali
/*Hence, when an object accesses the properties, 
it can directly access the property as person3.name. */

//================ JavaScript Constructor Function Parameters =========
function Person(person_name, person_age, person_gender){
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,
    this.greet = function(){
        console.log('Hi'+' '+this.name);
    }
}
const person4 = new Person('Ali', 23, 'male');
const person5 = new Person('Sara', 21, 'female');


console.log(person4.name); //Output: Ali
console.log(person5.name); //Output: Sara
console.log(person4.name, person4.gender); //Output: Ali male
console.log(person5.name, person5.gender); //Output: Sara female

/*In the above example, 
we have passed arguments to the constructor function during the creation of the object.

const person4 = new Person('Ali', 23, 'male');
const person5 = new Person('Sara', 21, 'female');

This allows each object to have different properties. As shown above,

console.log(person4.name); //Output: Ali
console.log(person5.name); //Output: Sara
*/

//======== Create Objects: Constructor Function Vs Object Literal =============

/*!Object Literal is generally used to create a single object. 
!The constructor function is useful if you want to create multiple objects. */

/*Each object created from the constructor function is unique. 
You can have the same properties as the constructor function 
or add a new property to one particular object. 
For example,*/

function Person(){
    this.name = "Badar"
}
let person6 = new Person();
let person7 = new Person();

person6.age = 20;
console.log(person6.age); //Output: 20

/*Now this age property is unique to person6 object 
and is not available to person7 object. */

/*However, 
if an object is created with an object literal, 
and if a variable is defined with that object value, 
any changes in variable value will change the original object. 
For example, */

let person8 = {
    name: 'Sam'
}
console.log(person8.name) //Output: Sam

let student = person8;
student.name = 'Andi';
console.log(person8.name); //Output: Andi

/*When an object is created with an object literal, 
any object variable derived from that object will act as a clone of the original object. 
Hence, any change you make in one object will also reflect in the other object. */


//=================== Adding Properties And Methods in an Object ==========================
function Person(){
    this.name = 'Luigi',
    this.age = 27
}

let person9 = new Person();
let person10 = new Person();

//adding property to person 10 object
person10.gender = 'male';

//adding method to person 10 object
person10.greet = function(){
    console.log('Hi'+' '+ this.name);
}

console.log(person10.name, person10.gender); //Output: Luigi male
person10.greet(); //Output: Hi Luigi
person9.greet(); //Output: TypeError: person9.greet is not a function
/*In the above example, 
a new property gender and a new method greet() is added to the person10 object.

However, this new property and method is only added to person10. 
You cannot access gender or greet() from person9.

Hence the program gives error when we try to access person9.greet(); */

//=============== Prototype ========================

function Person (){
    this.name = 'Ustman',
    this.age = 43
}
//creating objects
let person11 = new Person();
let person12 = new Person();
//creating new property to constrator function
Person.prototype.gender = 'male';

console.log(person11.gender); //Output: male
console.log(person12.gender); //Output: male

//=================== JavaScript Built-in Constructors =============================

/*JavaScript also has built-in constructors. 
Some of them are: */

let a = new Object();
let b = new String();
let c = new Number();
let d = new Boolean();

//In JavaScript, strings can be created as objects by:
const name = new String('John');
console.log(name); //Output: John

//In JavaScript, numbers can be created as objects by:
const number = new Number(67);
console.log(number); //Output: 67

//In JavaScript, booleans can be created as objects by:
const count = new Boolean(true);
console.log(count); //Output: true


/*Note: It is recommended to use primitive data types and create them in a normal way, 
such as const name = 'John';, const number = 67; and const count = true;

You should not declare strings, numbers, and boolean values as objects 
because they slow down the program. */

/*Note: In JavaScript, the keyword class was introduced in ES6 (ES2015) 
that also allows us to create objects. 
Classes are similar to constructor functions in JavaScript. */




