//JavaScript Multidimensional Array

/*A multidimensional array is an array 
that contains another array. For example,*/

// multidimensional array
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];


//==================Create a Multidimensional Array==============

/*Here is how you can create 
multidimensional arrays in JavaScript.
Example 1*/

let studentsData = [['John',24], ['Sara',25], ['Anton', 26]];

//Example 2:

let student1 = ['John',24];
let student2 = ['Sara',25];
let student3 = ['Anton',26];

//multidimensional array
let studentsData1 = [student1,student2,student3];

/*Here, both example 1 and example 2 
creates a multidimensional array with the same data. */

//================= Access Elements of an Array ==============

/*You can access the elements of a multidimensional array 
using indices (0, 1, 2 …). For example, */

let x = [
    ['Jack',23], 
    ['Sara',24],
    ['Anton',25]
];

console.log(x[0]); //Output: [ 'Jack', 23 ]
console.log(x[0][0]); //Output: Jack
console.log(x[0][1]); //Output: 23

console.log(x[1]); //Output: [ 'Sara', 24 ]
console.log(x[1][0]); //Output: Sara
console.log(x[1][1]); //Output: 24

console.log(x[2]); //Output: [ 'Anton', 25 ]
console.log(x[2][0]); //Output: Anton
console.log(x[2][1]); //Output: 25

/*You can think of a multidimensional array (in this case, x), 
as a table with 3 rows and 2 columns. */

// ================= Add an Element to a Multidimensional Array ============

/*You can use the Array's push() method 
or an indexing notation to add elements to a multidimensional array.
*/

//Adding Element to the Outer Array
let studentData2 = [['Abu',21], ['Sara', 20]];
studentData2.push(['Peter', 19]);
console.log(studentData2); //Output: [ [ 'Abu', 21 ], [ 'Sara', 20 ], [ 'Peter', 19 ] ]

//Adding Element to the Inner Array======>
//1. Using Index Notation
let studentData3 = [['Jack', 31], ['Emy',30]];
studentData3[1][2] = 'Female';
console.log(studentData3); //Output: [ [ 'Jack', 31 ], [ 'Emy', 30, 'Female' ] ]
//2. Using push()
let studentData4 = [['Ana', 27], ['Brian', 25]]
studentData4[1].push('Male');
console.log(studentData4); //Output: [ [ 'Ana', 27 ], [ 'Brian', 25, 'Male' ] ]

/*You can also use the Array's splice() method to add an element at a specified index. 
For example, */

let studentData5 = [['Brandon', 23], ['Rebeca', 25]];
studentData5.splice(1, 0, ['Peter', 30]);
console.log(studentData5); //Output: [ [ 'Brandon', 23 ], [ 'Peter', 30 ], [ 'Rebeca', 25 ] ]

//=============== Remove an Element from a Multidimensional Array ==============

/*You can use the Array's pop() method 
to remove the element from a multidimensional array. 
For example, */

//remove element from outer array
let studentData6 = [['Rudy', 22], ['Julia', 21]];
studentData6.pop();
console.log(studentData6); //Output: [ [ 'Rudy', 22 ] ]

//remove element from inner array
let studentData7 = [['Bruce', 33], ['Amy', 30]];
studentData7[1].pop();
console.log(studentData7);//Output: [ [ 'Bruce', 33 ], [ 'Amy' ] ]

/*You can also use the splice() method 
to remove an element at a specified index. 
For example, */

let studentData8 = [['Jane', 25], ['Peter', 27]];
studentData8.splice(1,1);
console.log(studentData8);//Output: [ [ 'Jane', 25 ] ]

// ========== Iterating over Multidimensional Array ============

/*You can iterate over a multidimensional array 
using the Array's forEach() method 
to iterate over the multidimensional array. 
For example, */

let studentData9 = [['Anto', 21], ['Jane', 20]];

studentData9.forEach((student) =>{
    student.forEach((data) =>{
        console.log(data);
    });
});
/*Output:
Anto
21
Jane
20
*/

/*The first forEach() method is used to iterate over the outer array elements 
and the second forEach() is used to iterate over the inner array elements. */

/*You can also use the for...of loop to iterate over the multidimensional array.
 For example, */

 let studentData10 = [['Jack', 20], ['Sara', 21]];
 for(let i of studentData10){
    for(let j of i){
        console.log(j);
    }
 }
 /*Output:
Jack
20
Sara
21
  */

/*You can also use the for loop to iterate over a multidimensional array. 
For example, */

let studentData11 = [['Dony', 21], ['Ama', 20]];

for (let i = 0; i < studentData11.length; i++){
    let innerArrayLength = studentData11[i].length;

    for(let j = 0; j < innerArrayLength; j++){
        console.log(studentData11[i][j]);
    }
}
/*Output:
Dony
21
Ama
20
 */










