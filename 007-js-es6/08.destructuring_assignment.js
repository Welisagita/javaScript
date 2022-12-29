//JavaScript Destructuring Assignment

//=================== JavaScript Destructuring ======================
/*The destructuring assignment introduced in ES6 makes it easy to assign array values 
and object properties to distinct variables. For example,

Before ES6: */
//assigning object attributes to variables

const person = {
    name: 'Sara',
    age: 25,
    gender:'Female'
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name, age, gender);//Output: Sara 25 Female

//NOW From ES6:
// assigning object attributes to variables

const person1 = {
    name1:'Adam',
    age1: 24,
    gender1:'Male'
}

let{name1, age1, gender1} = person1;
console.log(name1, age1, gender1);//Output: Adam 24 Male

/*Note: The order of the name does not matter in object destructuring.

For example, you could write the above program as:

let { age, gender, name } = person;
console.log(name); // Sara
 */

/*Note: When destructuring objects, 
you should use the same name for the variable as the corresponding object key.

For example,

let {name1, age, gender} = person;
console.log(name1); // undefined 
*/

/*If you want to assign different variable names for the object key, 
you can use:

const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female 
*/

//=========== Array Destructuring ===========================
/*You can also perform array destructuring in a similar way. 
For example, */

const arrValue = [1, 2, 3];

// destructuring assignment in arrays
const [x,y,z] = arrValue;
console.log(x,y,z);//Output: 1 2 3

//============= Assign Default Value ===============
/*You can assign the default values for variables while using destructuring. 
For example, */

let arrValue1 = [10];
let[x1=3, y1=7] = arrValue1;

console.log(x1);//Output: 10
console.log(y1);//Output: 7

/*In the above program, arrValue1 has only one element. Hence,

the x1 variable will be 10
the y1 variable takes the default value 7
In object destructuring, you can pass default values in a similar way. 
For example, */

const person2 = {
    name2: 'Rambo'
}
const {name2, age2 = 45} = person2;
console.log(name2);//Output: Rambo
console.log(age2);//Output: 45


//============== Swapping Variables ======================

/*In this example, 
two variables are swapped using the destructuring assignment syntax.*/

let x2 = 5;
let y2 = 10;

[x2,y2] = [y2,x2];
console.log(x2);//Output: 10
console.log(y2);//Output: 5

//============== Skip Items =======================

/*You can skip unwanted items in an array without assigning them to local variables. 
For example,*/

const arrValue2 = ['one', 'two', 'three'];
const [x3, ,z3] = arrValue2;

console.log(x3);//Output: One
console.log(z3);//Output: Three

/*In the above program, 
the second element is omitted by using the comma separator ,. */


//================ Assign Remaining Elements to a Single Variable ====================
/*You can assign the remaining elements of an array to a variable using the spread syntax .... 
For example,*/

const arrValue4 = ['one', 'two', 'three', 'four'];

const [x4, ...y4] = arrValue4
console.log(x4);//Output: One
console.log(y4);//Output: [ 'two', 'three', 'four' ]

/*Here, one is assigned to the x4 variable. 
And the rest of the array elements are assigned to y4 variable.

You can also assign the rest of the object properties to a single variable. 
For example, */

const person3 = {
    name3: 'Sara',
    age3: 25,
    gender3: 'female'    
  }
  
  // destructuring assignment
  // assigning remaining properties to rest
  let { name3, ...rest } = person3;
  
  console.log(name3); // Sara
  console.log(rest); // { age3: 25, gender3: 'female' }

/*Note: The variable with the spread syntax cannot have a trailing comma ,. 
You should use this rest element (variable with spread syntax) as the last variable.

For example,

const arrValue5 = ['one', 'two', 'three', 'four'];

// throws an error
const [ ...x5, y5] = arrValue5;

console.log(x5); // eror
*/

//================ Nested Destructuring Assignment ===================
/*You can perform nested destructuring for array elements. For example,*/

const arrValue6 = ['one', ['two', 'three']];

const [x6, [y6,z6]] = arrValue6;
console.log(x6);//One
console.log(y6);//two
console.log(z6);//three

/*Here, the variable y and z are assigned nested elements two and three.

In order to execute the nested destructuring assignment, 
you have to enclose the variables in an array structure (by enclosing inside []).

You can also perform nested destructuring for object properties. For example, */

const person7 = {
    name7: 'Jack',
    age7: 26,
    hobbies7: {
        read7: true,
        playGame7: true
    }
}
// nested destructuring 
const {name7, hobbies7: {read7, playGame7}} = person7;

console.log(name7); // Jack
console.log(read7); // true
console.log(playGame7); // true
