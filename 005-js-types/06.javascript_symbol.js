//JavaScript Symbol

/*The JavaScript ES6 introduced a new primitive data type called Symbol. 
Symbols are immutable (cannot be changed) and are unique. 
For example, */

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2);//Output: false

/*Though value1 and value2 both contain the same description, 
they are different. */

//=============== Creating Symbol ==================

/*You use the Symbol() function to create a Symbol. 
For example, */
const x = Symbol();
typeof x;
/*You can pass an optional string as its description. 
For example, */
const x1 = Symbol('hey');
console.log(x1);//Output: Symbol(hey)

//============== Access Symbol Description ====================
/*To access the description of a symbol, 
we use the . operator. For example, */
const x2 = Symbol('hey');
console.log(x2.description);//Output: hey

//============= Add Symbol as an Object Key ========================
/*You can add symbols as a key in an object 
using square brackets []. For example, */
let id = Symbol("id");
let person = {
    name: 'Anwar',

    [id]: 123 //this [id] calls Symbol("id")
}
console.log(person);//Output: { name: 'Anwar', [Symbol(id)]: 123 }

//============= Symbols are not included in for...in Loop ===========
/*The for...in loop does not iterate over Symbolic properties. 
For example, */
let id1 = Symbol("id");
let person1 = {
    name: 'Anwar',
    age: 23,
    [id1]: 456
}
for(let key in person1){
    console.log(key);
}
/*Output
name
age
 */

//============== Benefit of Using Symbols in Object ================
/*If the same code snippet is used in various programs, 
then it is better to use Symbols in the object key. 
It's because you can use the same key name in different codes 
and avoid duplication issues. For example, */

let person2 = {
    name: 'Ahmed'
}
let id2 = Symbol("id");

person[id2] = 12;

/*In the above program, 
if the person object is also used by another program, 
then you wouldn't want to add a property that can be accessed 
or changed by another program. 
Hence by using Symbol, you create a unique property that you can use.

Now, if the other program also needs to use a property named id, 
just add a Symbol named id and there won't be duplication issues. 
For example, */

let person3 = {
    name: 'Ali'
}
let id3 = Symbol("id");
person[id3] = "Another Value";

/*In the above program, 
even if the same name is used to store values, 
the Symbol data type will have a unique value.

In the above program, 
if the string key was used, 
then the later program would have changed the value of the property. 
For example, */

let person4 = {
    name:'Avril'
}
person4.id4 = 12;
console.log(person4.id4);//Output: 12

person4.id4 = "Another Value";
console.log(person4.id4);//Output: Anothe Value

/*In the above program, 
the second user.id4 overwrites the previous value. */

//============ Symbol Methods ==============================
/*There are various methods available with Symbol.

Method	    Description
for()	    Searches for existing symbols
keyFor()	Returns a shared symbol key from the global symbol registry.
toSource()	Returns a string containing the source of the Symbol object
toString()	Returns a string containing the description of the Symbol
valueOf()	Returns the primitive value of the Symbol object. */

//Example: Symbol Methods
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

console.log(Symbol.keyFor(sym));//Output: Hello
console.log(Symbol.keyFor(sym1));//Output: id


//============= Symbol Properties ===========
/*Symbol Properties
Properties	        Description
asyncIterator	    Returns the default AsyncIterator for an object
hasInstance	        Determines if a constructor object recognizes an object as its instance
isConcatSpreadable	Indicates if an object should be flattened to its array elements
iterator	        Returns the default iterator for an object
match	            Matches against a string
matchAll	        Returns an iterator that yields matches of the regular expression against a string
replace	            Replaces matched substrings of a string
search	            Returns the index within a string that matches the regular expression
split	            Splits a string at the indices that match a regular expression
species	            Creates derived objects
toPrimitive	        Converts an object to a primitive value
toStringTag	        Gives the default description of an object
description	        Returns a string containing the description of the symbol
*/
//Example: Symbol Properties Example
const x3 = Symbol('hey');
console.log(x3.description);//Output: hey


const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];
numberArray[Symbol.isConcatSpreadable] = false;
let result = stringArray.concat(numberArray);
console.log(result);
/*Output:
[
  'a',
  'b',
  'c',
  [ 1, 2, 3, [Symbol(Symbol.isConcatSpreadable)]: false ]
] */


