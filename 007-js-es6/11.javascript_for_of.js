//JavaScript for... of Loop

/*In JavaScript, there are three ways we can use a for loop.

1. JavaScript for loop
2. JavaScript for...in loop
3. JavaScript for...of loop

The for...of loop was introduced in the later versions of JavaScript ES6.

The for..of loop in JavaScript 
allows you to iterate over iterable objects (arrays, sets, maps, strings etc). */


//========================== JavaScript for...of loop ===========
/*The syntax of the for...of loop is:*/

for (element of iterable) {
    // body of for...of
}

/*Here,

1. iterable - an iterable object (array, set, strings, etc).
2. element - items in the iterable

In plain English, 
you can read the above code as: for every element in the iterable, 
run the body of the loop.*/

//======================== for...of with Arrays ========================
/*The for..of loop can be used to iterate over an array. For example, */

const students = ['John', 'Sara', 'Adam']
for(let element of students){
    console.log(element);
}
/*Output:
John
Sara
Adam */

/*In the above program, 
the for...of loop is used to iterate over the students array object 
and display all its values. */



//============================= for...of with Strings =====================
/*You can use for...of loop to iterate over string values. For example, */

const string = 'code';
for(let i of string){
    console.log(i);
}
/*Output:
c
o
d
e */

//====================== for...of with Sets =================================
/*You can iterate through Set elements using the for...of loop. For example, */

const set = new Set([1,2,3]);
for(let i of set){
    console.log(i)
}
/*Output:
1
2
3 */


//====================== for...of with Maps ========================
/*You can iterate through Map elements using the for...of loop. For example,*/

let map = new Map();

map.set('name', 'Fara');
map.set('age', '25');
for(let [key, value] of map ){
    console.log(key+'- '+value);
}
/*Output:
name- Fara
age- 25 */

//=============================== User Defined Iterators ===================
/*You can create an iterator manually 
and use the for...of loop to iterate through the iterators. 
For example,*/

// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}
/*Output:
1
2
3*/

//================= for...of with Generators =================
/*Since generators are iterables, 
you can implement an iterator in an easier way. 
Then you can iterate through the generators using the for...of loop. 
For example,*/

function* generatorFunc(){
    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

for(let value of obj){
    console.log(value);
}
/*Output:
10
20
30 */


//================== for...of Vs for...in ===================
/*for...of vs	for...in

| The for...of loop is used to iterate through the values of an iterable.|
| The for...in loop is used to iterate through the keys of an object.|


| The for...of loop cannot be used to iterate over an object.|
| You can use for...in to iterate over an iterable such arrays 
and strings but you should avoid using for...in for iterables.|


/*The for...of loop was introduced in ES6. 
Some browsers may not support its use. 
To learn more, visit JavaScript for...of Support. */

    


