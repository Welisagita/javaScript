//JavaScript Prototype

/*As you know, 
you can create an object in JavaScript using an object constructor function. 
For example, */

function Person(){
    this.name = 'John',
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();

/*In the above example, 
function Person() is an object constructor function. 
We have created two objects person1 and person2 from it. */

//====================== JavaScript Prototype ===================================

function Person(){
    this.name = 'Anto',
    this.age = 20
}

const person3 = new Person();
//checking prototype value
console.log(Person.prototype); //Output: {}

/*In the above example, 
we are trying to access the prototype property of a Person constructor function.

Since the prototype property has no value at the moment, 
it shows an empty object { ... }. */


// =========================== Prototype Inheritance ============================

/*In JavaScript, 
a prototype can be used to add properties and methods to a constructor function. 
And objects inherit properties and methods from a prototype. 
For example, */

//constructor function
function Person(){
    this.name = 'Sara',
    this.age = 21
}

//creating objects
const person4 = new Person();
const person5 = new Person();

//adding property to constructor function
Person.prototype.gender = 'male';

//prototype value of Person
console.log(Person.prototype); //Output: { gender: 'male' }

//inheritting the property from prototype
console.log(person4.gender); //Output: male
console.log(person5.gender); //Output: male

/*In the above program, 
we have added a new property gender to the Person constructor function using:

Person.prototype.gender = 'male';
Then object person4 and person5 inherits the property gender 
from the prototype property of Person constructor function.

Hence, 
both objects person4 and person5 can access the gender property.

Note: The syntax to add the property to an object constructor function is:

objectConstructorName.prototype.key = 'value';

Prototype is used to provide additional property 
to all the objects created from a constructor function.*/

// ================= Add Methods to a Constructor Function Using Prototype ================

/*You can also add new methods to a constructor function using prototype. 
For example, */

function Person(){
    this.name = 'ali',
    this.age = 33
}

const person6 = new Person();
const person7 = new Person();

Person.prototype.greet = function(){
    console.log('Hello'+' '+this.name);
}

person6.greet();
person7.greet();
/*In the above program, 
a new method greet is added to the Person constructor function using a prototype.*/

// ================== Changing Prototype ================

/*If a prototype value is changed, 
then all the new objects will have the changed property value. 
All the previously created objects will have the previous value. 
For example, */

function Person(){
    this.name = 'Abu'
}
//add property
Person.prototype.age = 20;

//creating an object
const person8 = new Person();

//result
console.log(person8.age);//Output: 20

//changing the property value of prototype
Person.prototype = {age: 50};

//creating an object
const person9 = new Person();

//result
console.log(person9.age);//Output: 50

/*Note: You should not modify the prototypes of standard JavaScript built-in objects 
like strings, arrays, etc. It is considered a bad practice. */

// ================== JavaScript Prototype Chaining ==================

/*If an object tries to access the same property 
that is in the constructor function and the prototype object, 
the object takes the property from the constructor function. 
For example, */

function Person(){
    this.name = 'John'
}

Person.prototype.name = 'Peter';
Person.prototype.age = 32;

const person10 = new Person();

console.log(person10.name);//Output: John
console.log(person10.age);//Output: 32

/*In the above program, a property name is declared in the constructor function 
and also in the prototype property of the constructor function.

When the program executes, person10.name looks in the constructor function 
to see if there is a property named name. 
Since the constructor function has the name property with value 'John', 
the object takes value from that property.

When the program executes, person10.age looks in the constructor function 
to see if there is a property named age. 
Since the constructor function doesn't have age property, 
the program looks into the prototype object of the constructor function 
and the object inherits property from the prototype object (if available). */


/*Note: You can also access the prototype property 
of a constructor function from an object. But you should NOT DO THAT */

function Person(){
    this.name = 'Abu'
}

Person.prototype.age = 24;
const person11 = new Person();

console.log(person11.__proto__);//Output: { age: 24 }

/*In the above example, a person object is used to access the prototype property using __proto__. 
However, __proto__ has been deprecated and you should avoid using it. */