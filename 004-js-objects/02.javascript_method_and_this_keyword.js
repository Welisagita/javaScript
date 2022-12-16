//JavaScript Methods and this Keyword

//In JavaScript, objects can also contain functions. For example,

// object containing method
/*
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};
*/
/*In the above example, a person object has two keys (name and greet), 
which have a string value and a function value, respectively.

Hence basically, 
the JavaScript method is an object property that has a function value. */

// accessing method and property
const person = {
    name: "John",
    greet: function() { console.log('hello'); }
};

// accessing property
console.log(person.name); // John

// accessing method
person.greet();

/*Here, the greet method is accessed as person.greet() 
instead of person.greet.

If you try to access the method with only person.
greet, it will give you a function definition. */

//============================= JavaScript Built-In Methods ================================

let number = '23.32';
let result = parseInt(number);

console.log(result); // 23

/*Here, the parseInt() method of Number object 
is used to convert numeric string value to an integer value.*/

//=========================== Adding a Method to a JavaScript Object ================================

let student = { };
student.name = 'John';
student.greet = function(){
    console.log('Hello'); //Output: Hello
}
student.greet();
/*In the above example, an empty student object is created. 
Then, the name property is added. 
Similarly, the greet method is also added. 
In this way, you can add a method as well as property to an object. */

// =============================== JavaScript this Keyword =================

const person1 = {
    name:'Jamil',
    age: '23',
    greet: function(){
        console.log('The name is'+' '+this.name); //Output: The name is Jamil
        console.log('The age is'+' '+this.age); //Output: The age is 23
    }
}
person1.greet();
/*In the above example, a person object is created. 
It contains properties (name and age) and a method greet.

In the method greet, while accessing a property of an object, 
this keyword is used.

In order to access the properties of an object, 
this keyword is used following by . and key. */

/*Note: In JavaScript, 
this keyword when used with the object's method refers to the object. 
this is bound to an object. */

//However, the function inside of an object 
//can access it's variable in a similar way 
//as a normal function would. 
//For example,

const person2 = {
    name: 'John',
    age: 22,
    greet: function(){
        let surname = 'Doe';
        console.log ('The name is'+' '+this.name+' '+surname);
    }
}
person2.greet(); //Output: The name is John Doe
