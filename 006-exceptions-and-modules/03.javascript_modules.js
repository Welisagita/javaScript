//JavaScript Modules

/*As our program grows bigger, 
it may contain many lines of code. 
Instead of putting everything in a single file, 
you can use modules to separate codes in separate files 
as per their functionality. 
This makes our code organized and easier to maintain. */

/*Module is a file that contains code to perform a specific task. 
A module may contain variables, functions, classes etc. 
Let's see an example,

Suppose, a file named greet.js contains the following code: */

//exporting a function
export function greetPerson(name){
    return `Hello ${name}`;
}

/*Now, to use the code of greet.js in another file, 
you can use the following code: */

//importing greetPerson from greet.js file
import {greetPerson} from './greet.mjs'

//using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName);//Output: Hello Jack

/*Here,

1. The greetPerson() function in the greet.js 
is exported using the export keyword

export function greetPerson(name) {
    ... 
}

2. Then, we imported greetPerson() in another file using the import keyword. 
To import functions, objects, etc., you need to wrap them around { }.

import { greet } from '/.greet.js';

Note: You can only access exported functions, objects, etc. from the module. 
You need to use the export keyword for the particular function, objects, etc. 
to import them and use them in other files. */

//================= Export Multiple Objects ====================
/*It is also possible to export multiple objects from a module. 
For example,

In the file module.js */

//exporting the variable
export const name = 'Javascript Program';

//exporting the function
export function sum(x, y){
    return x + y;
}

//in main file
import {name, sum} from './module.mjs'

console.log (name);//Output: Javascript Program
let add = sum(4, 9);
console.log(add);//Output: 13

/*Here,

import { name, sum } from './module.js';

This imports both the name variable and the sum() function 
from the module.js file. */

//============= Renaming imports and exports =============
/*If the objects (variables, functions etc.) that you want to 
import are already present in your main file, 
the program may not behave as you want. 
In this case, the program takes value from 
the main file instead of the imported file. 

To avoid naming conflicts, 
you can rename these functions, objects, etc. 
during the export or during the import .*/

//1. Rename in the module (export file)
export{
    function1 as newName1,
    function2 as newName2
};

/*when you want to use the module
import in the main file */

import { newName1, newName2} from './module.mjs';

/*Here, while exporting the function from module.js file, 
new names (here, newName1 & newName2 ) are given to the function. 
Hence, when importing that function, 
the new name is used to reference that function. */

//2. Rename in the import file

export {
    function3,
    function4
};
/*when you want to use the module
import in the required file with different name */

import {function3 as newName3, function4 as newName4} from './module.mjs';

/*Here, while importing the function, 
the new names (here, newName1 & newName2 ) are used for the function name. 
Now you use the new names to reference these functions. */



//================== Default Export =================

/*You can also perform default export of the module. 
For example,

In the file greet.js: */

//default export
export default function greet(name){
    return `Hello ${name}`;
}
export const age = 23;

//Then when importing, you can use:
import random_name from './greet.mjs';

/*While performing default export,

random_name is imported from greet.js. 
Since, random_name is not in greet.js, 
the default export (greet() in this case) is exported as random_name.

You can directly use the default export without enclosing curly brackets {}.
Note: A file can contain multiple exports. 
However, you can only have one default export in a file. */

//============== Modules Always use Strict Mode ==================
/*Modules Always use Strict Mode
By default, modules are in strict mode. 
For example,*/

/*
// in greet.js
function greet() {
    // strict by default
}

export greet();
*/

/*
Benefit of Using Module
The code base is easier to maintain 
because different code having different functionalities are in different files.

Makes code reusable. 
You can define a module and use it numerous times as per your needs. */