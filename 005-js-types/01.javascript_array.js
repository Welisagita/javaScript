// JavaScript Arrays

/*An array is an object that can store multiple values at once. 
For example,

const words = ['hello', 'world', 'welcome'];

Here, words is an array. The array is storing 3 values.*/

//=============== Create an Array =============
/*You can create an array using two ways:
1. Using an array literal
The easiest way to create an array is by using an array literal []. 
For example, */

const array1 = ["eat", "sleep"];

/*2. Using the new keyword
You can also create an array using JavaScript's new keyword. */

const array2 = new Array("eat", "sleep");

/*In both of the above examples, we have created an array having two elements.
Note: It is RECOMMENDED to use ARRAY LITERAL to create an array.

Here are more examples of arrays: */

//empt array
const myList = [];

//array of numbers
const numberArray = [2,4,6,8];

//array of strings
const stringArray = ["eat", "work", "sleep"];

//array with mixed data types
const newData = ['work', 'exercise', 1, true];


/*You can also store arrays, 
functions and other objects inside an array. 
For example, */

const newData1 = [
    {'task1':'task2'},
    [1,2,3],
    function hello(){console.log('hello')}
];

//=================== Access Elements of an Array ================

/* You can access elements of an array using indices (0, 1, 2 …). 
For example,*/

const myArray = ['h','e','l','l','o'];

console.log(myArray[0]); //Output: h
console.log(myArray[1]); //Output: e
console.log(myArray[2]); //Output: l
console.log(myArray[3]); //Output: l
console.log(myArray[4]); //Output: o

/*Note: Array's index starts with 0, not 1. */

// ========== Add an Element to an Array ===========

/*You can use the built-in method push() and unshift() to add elements to an array.
The push() method adds an element at the end of the array. 
For example, */

let dailyActivities = ['eat','sleep'];

//add an element at the end
dailyActivities.push('exercise');

//result
console.log(dailyActivities); //Output: [ 'eat', 'sleep', 'exercise' ]

/*The unshift() method adds an element at the beginning of the array. 
For example, */

let dailyActivities1 = ['eat','sleep'];

dailyActivities1.unshift('work');
console.log(dailyActivities1);//[ 'work', 'eat', 'sleep' ]