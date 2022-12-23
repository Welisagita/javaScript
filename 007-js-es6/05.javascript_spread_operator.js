//JavaScript Spread Operator
/*The spread operator is a new addition to the features available 
in the JavaScript ES6 version. */

//========== Spread Operator ======
/*The spread operator ... is used to expand 
or spread an iterable or an array. For example, */

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);//Output: [ 'My', 'name', 'is', 'Jack' ]
console.log(...arrValue);//Output: My name is Jack

/*In this case, the code:

console.log(...arrValue)

is equivalent to:

console.log('My', 'name', 'is', 'Jack'); */

//========== Copy Array Using Spread Operator =========
/*You can also use the spread syntax ... to copy the items into a single array. 
For example,*/

const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'Three', 'For', 'Five'];

console.log(arr2);//Output: [ 'one', 'two', 'Three', 'For', 'Five' ]

//====Clone Array Using Spread Operator===========
/*In JavaScript, 
objects are assigned by reference and not by values. 
For example,*/

const arr3 = [1,2,3];
const arr4 = arr3;

console.log(arr3);//Output: [ 1, 2, 3 ]
console.log(arr4);//Output: [ 1, 2, 3 ]

// append an item to the array
arr3.push(4);
console.log(arr3);//Output: [ 1, 2, 3, 4 ]
console.log(arr4);//Output: [ 1, 2, 3, 4 ]

/*Here, both variables arr1 and arr2 are referring to the same array. 
Hence the change in one variable results in the change in both variables.

However, 
if you want to copy arrays so that they do not refer to the same array, 
you can use the spread operator. 
This way, the change in one array is not reflected in the other. 
For example, */

let arr5 = [ 1, 2, 3];

// copy using spread syntax
let arr6 = [...arr5];

console.log(arr5); // [1, 2, 3]
console.log(arr6); // [1, 2, 3]

// append an item to the array
arr5.push(4);

console.log(arr5); // [1, 2, 3, 4]
console.log(arr6); // [1, 2, 3]

//=========== Spread Operator with Object ====================

const obj1 = {x : 1, y : 2};
const obj2 = {z : 3};

// add members obj1 and obj2  to obj3
const obj3 = {...obj1,...obj2};
console.log(obj3);//Output: // {x: 1, y: 2, z: 3}

/*Here, both obj1 and obj2 properties are added to obj3 
using the spread operator. */

//============ Rest Parameter =======================================
/*When the spread operator is used as a parameter, 
it is known as the rest parameter.

You can also accept multiple arguments in a function call 
using the rest parameter. For example,*/

let func = function(...args){
    console.log(args);
}

func(3);//Output: [ 3 ]
func(1,2,3);//Output: [ 1, 2, 3 ]

/*Here,

1. When a single argument is passed to the func() function, 
the rest parameter takes only one parameter.

2. When three arguments are passed, 
the rest parameter takes all three parameters.

Note: Using the rest parameter will pass the arguments as array elements.

You can also pass multiple arguments to a function using the spread operator.
For example, */

function sum(x, y, z){
    console.log(x + y + z);
}

const num1 = [1,3,4,5];
sum(...num1);//Output: 8


/*If you pass multiple arguments using the spread operator, 
the function takes the required arguments and ignores the rest.

Note: Spread operator was introduced in ES6. 
Some browsers may not support the use of spread syntax. 
Visit JavaScript Spread Operator support to learn more. */

