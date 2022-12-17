//JavaScript Getter and Setter
/*
In JavaScript, there are two kinds of object properties:

1. Data properties
2. Accessor properties
*/

//=================Data Property============
/*Here's an example of data property that we have been using in the previous tutorials.*/

const student = {
    // data property
    firstName: 'Monica',
};


//======================== Accessor Property ==============================
/*In JavaScript, accessor properties are methods that get or set the value of an object. 
For that, we use these two keywords:

get - to define a getter method to get the property value
set - to define a setter method to set the property value
*/

// ===================== Javascript Getter ==================
/*In JavaScript, getter methods are used to access the properties of an object. 
For example, */

const student1 = {

    firstName: 'Sara', //data property

    //accessor property (getter)
    get getName () {
        return this.firstName;
    }
}
//accessing data property
console.log(student1.firstName); //Output: Sara
//accesing getter methods
console.log(student1.getName); //Output: Sara 
//try to access as a method
console.log(student1.getName()); //Output: TypeError: student1.getName is not a function

/*
In the above program, 
a getter method getName() is created to access the property of an object. 

 the code:
get getName() {
    return this.firstName;
}

Note: To create a getter method, the get keyword is used. 
And also when accessing the value, we access the value as a property.

access the value as a propert:
student.getName; 

When you try to access the value as a method, an error occurs.

try to access as a method:
console.log(student.getName()); // error 
*/

//=========================== JavaScript Setter =======================================

/*In JavaScript, 
setter methods are used to change the values of an object. 
or example,*/

const student2 = {
    firstName:'Monica',

    //accessor property (setter)
    set changeName(newName){
        this.firstName = newName;
    }
}
console.log(student2.firstName); //Output: Monica

//change (set) object property using a setter
student2.changeName = 'Sarah';
console.log(student2.firstName); //Output: Sarah

/*In the above example, 
the setter method is used to change the value of an object.

set changeName(newName) {
    this.firstName = newName;
}

Note: To create a setter method, the set keyword is used.

As shown in the above program, the value of firstName is Monica.

Then the value is changed to Sarah.

student2.changeName = 'Sarah';

Note: Setter must have exactly one formal parameter. */

//=============== JavaScript Object.defineProperty() ===============================

/*In JavaScript, you can also use Object.defineProperty() method to add getters and setters. 
For example,*/

const student3 = {
    firstName: 'Sara'
}

//getting property
Object.defineProperty(student3, "getName", {
    get: function(){
        return this.firstName;
    }
});

//setting property
Object.defineProperty(student3, "changeName",{
    set: function(value){
        this.firstName = value;
    }
});

console.log(student3.firstName); //Output: Sara

//changing a property value
student3.changeName = 'Amy';
console.log(student3.firstName); //Output: Amy

/*In the above example, Object.defineProperty() is used to access and change the property of an object.

The syntax for using Object.defineProperty() is:

Object.defineProperty(obj, prop, descriptor)


The Object.defineProperty() method takes three arguments.

The first argument is the objectName.
The second argument is the name of the property.
The third argument is an object that describes the property. */

