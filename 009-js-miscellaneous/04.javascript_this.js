//JavaScript this
/*In JavaScript, 
this keyword refers to the object where it is called. */

//=============== 1. this Inside Global Scope =================
/*When this is used alone, 
this refers to the global object (window object in browsers). 
For example, */

let a = this;
console.log(a); //window {}

this.name = 'Sara';
window = this
console.log(window.name);// Sara

/*Here, this.name is the same as window.name. */

//================= 2. this Inside Function =========================
/*When this is used in a function, 
this refers to the global object (window object in browsers). 
For example,*/

function greet(){

    //this refer to the global object
    console.log(this);
}

greet();

/*<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 483.8062000274658,
      nodeStart: 5.490400075912476,
      v8Start: 11.552000045776367,
      bootstrapComplete: 59.199300050735474,
      environment: 34.70869994163513,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1672721363408.259
  },
  fetch: [AsyncFunction: fetch]
} */


//============= 3. this Inside Constructor Function =================
/*In JavaScript, 
constructor functions are used to create objects. 
When a function is used as a constructor function, 
this refers to the object inside which it is used. 
For example,*/

function Person(){
    this.name = 'Jack';
    console.log(this)
}

const person1 = new Person(); //Output: Person { name: 'Jack' }
console.log(person1.name); //Output: Jack

/*Here, 
this refers to the person1 object. 
That's why, person1.name gives us Jack.

Note: When this is used with ES6 classes, 
it refers to the object inside which it is 
used (similar to constructor functions). */

//================ 4. this Inside Object Method =======================
/*When this is used inside an object's method, 
this refers to the object it lies within. For example,*/

const person = {
    name: 'Jack',
    age: 23,

    greet(){
        console.log(this);
        console.log(this.name);
    }
}
person.greet();

/*Output:
Person { name: 'Jack' }
Jack */

/*In the above example, this refers to the person object. */


//=============== 5. this Inside Inner Function ===============================
/*When you access this inside an inner function (inside a method), 
this refers to the global object. For example,*/

const person2 = {
    name: 'Sara',
    age: 20,

    // this inside method
    // this refers to the object itself
    greet(){
        console.log(this); // { name: 'Sara', age: 20, greet: [Function: greet] }
        console.log(this.name); //Sara

        // this refers to the global object
        function innerFunc(){
            console.log(this); //window {...}
            console.log(this.name); //undefined
        }
        innerFunc();
    }
}
person2.greet();

/*Here, 
this inside innerFunc() refers to the global object 
because innerFunc() is inside a method.

However, 
this.age outside innerFunc() refers to the person object. */

//============= 6. this Inside Arrow Function ================
/*Inside the arrow function, 
this refers to the parent scope. For example,*/

const greet = () =>{
    console.log(this);
}

greet();//Output: {}

/*Arrow functions do not have their own this. 
When you use this inside an arrow function, 
this refers to its parent scope object. For example, */

const greet = {
    name: 'Saitama',

    sayHi(){
        let hi = () => console.log(this.name);
        hi();
    }
}

greet.sayHi();//Saitama

/*Here, this.name inside the hi() function refers to the greet object.

You can also use the arrow function 
to solve the issue of having undefined 
when using a function inside a method (as seen in Example 5). 
For example, */

const person3 = {
    name: 'John',
    age: 21,

    greet(){
        console.log(this);// { name: 'John', age: 21, greet: [Function: greet] }
        console.log(this.age); //21

        let innerFunc = () =>{
            console.log(this);// { name: 'John', age: 21, greet: [Function: greet] }
            console.log(this.age);// 21
        }
        innerFunc();
    }
}

person3.greet();

/*Here, 
innerFunc() is defined using the arrow function. 
It takes this from its parent scope. Hence, this.age gives 21.

When the arrow function is used with this, 
it refers to the outer scope. */


//=============== 7. this Inside Function with Strict Mode ================
/*When this is used in a function with strict mode, 
this is undefined. For example,*/

'use strict';
this.name = 'Jack';
function greet(){
    console.log(this)
}
greet();// undefined

/*Note: When using this inside a function with strict mode, 
you can use JavaScript Function call(). */

'use strict';
this.name = 'Jack';
function greet(){
    console.log(this)
}
greet.call(this.name);// Jack


/*When you pass this with the call() function, 
greet() is treated as the method of the this object (global object in this case). */

