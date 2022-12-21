


/*Now, to use the code of greet.js in another file, 
you can use the following code: */

//importing greetPerson from greet.js file
import {greetPerson} from './greet.mjs';

//using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName);

//in main file
import {name, sum} from './module.mjs'

console.log (name);//Output: Javascript Program
let add = sum(4, 9);
console.log(add);//Output: 13


