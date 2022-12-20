//JavaScript for...in loop

/*There are also other types of loops. 
The for..in loop in JavaScript allows you 
to iterate over all property keys of an object.
 */

//========== JavaScript for...in loop ============
/*
The syntax of the for...in loop is:

for(key in object){
    //body of for...in
}

In each iteration of the loop, 
a key is assigned to the key variable. 
The loop continues for all object properties.

Note: Once you get keys, 
you can easily find their corresponding values.*/

//Example 1: Iterate Through an Object
const student = {
    name: 'Monica',
    class: 7,
    age: 12 
}
for(let key in student){
    console.log(`${key} => ${student[key]}`);
}
/*Output:
name => Monica
class => 7
age => 12
 */

/*In the above program, 
the for...in loop is used to iterate over the student object 
and print all its properties.

The object key is assigned to the variable key.
student[key] is used to access the value of key. */

//Example 2: Update Values of Properties
const salaries = {
    jack: 24000,
    paul: 32000,
    monica: 55000
}
for(let x in salaries){
    let salary = "$" + salaries[x];
    console.log(`${x}: ${salary}`);
}
/*Output:
jack: $24000
paul: $32000
monica: $55000
*/

/*
In the above example, 
the for...in loop is used to iterate over the properties of the salaries object. 
Then, the string $ is added to each value of the object. */

//============ for...in with Strings =============

/*You can also use for...in loop 
to iterate over string values. 
For example, */

const string = 'code';
for (let i in string){
    console.log(string[i]);
}
/*Output:
c
o
d
e
 */

//=========== for...in with Arrays =====================

/*You can also use for...in with arrays. 
For example, */

const arr = ['hello', 1, 'javascript']
for(let x in arr){
    console.log(arr[x]);
}
/*Output:
hello
1
javascript
 */

/*You will learn more about the arrays in later tutorials.

Note: You should not use for...in 
to iterate over an array where the index order is important.

One of the better ways to iterate over an array is using the for...of loop. */