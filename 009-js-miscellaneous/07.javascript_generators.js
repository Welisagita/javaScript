//JavaScript Generators

/*In JavaScript, 
generators provide a new way to work with functions and iterators.

Using a generator,

you can stop the execution of a function from anywhere 
inside the function
and continue executing code from a halted position */

//================== Create JavaScript Generators ====================
/*To create a generator, 
you need to first define a generator function with function* symbol. 
The objects of generator functions are called generators.*/

// define a generator function
function* generator_function(){
    //the code
}

// creating generator
const generator_obj = generator_function();

/*Note: The generator function is denoted by *. 
You can either use function* generatorFunc() {...} 
or function *generatorFunc(){...} to create them. */


//================== Using yield to Pause Execution ====================
/*As mentioned above, 
you can pause the execution of a generator function 
without executing the whole function body. 
For that, we use the yield keyword. For example,*/

function* generatorFunc(){
    console.log('1. code before the first yield');
    yield 100;

    console.log('2. code before the second yield');
    yield 200;
}

const generator = generatorFunc();
console.log(generator.next());

/*Output:
1. code before the first yield
{ value: 100, done: false } */

/*Here,

A generator object named generator is created.
When generator.next() is called, 
the code up to the first yield is executed. 
When yield is encountered, 
the program returns the value and pauses the generator function.

Note: You need to assign generator objects 
to a variable before you use it. */


//=============== Working of multiple yield Statements ===============
/*The yield expression returns a value. 
However, unlike the return statement, 
it doesn't terminate the program. 
That's why you can continue executing code from the last yielded position. 
For example,*/

function* generatorFunc(){
    console.log('1. code before the first yield');
    yield 100;

    console.log('2. code before the second yield');
    yield 200;

    console.log('3.code after the second yield');
}

const generator1 = generatorFunc();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

/*Output:
1. code before the first yield
{ value: 100, done: false }     
2. code before the second yield 
{ value: 200, done: false }     
3.code after the second yield   
{ value: undefined, done: true } */

/*Here is how this program works.

1. The first generator.next() statement executes the code 
up to the first yield statement and pauses the execution of the program.

2. The second generator.next() starts the program 
from the paused position.

3. When all the elements are accessed, 
it returns {value: undefined, done: true}. */


//============== Passing Arguments to Generator Functions ================
/*You can also pass arguments to a generator function. For example,*/

function* generatorFunc(){

    let x = yield 'hello';

    console.log(x);
    console.log('some code');
    yield 5;
}

const generator2 = generatorFunc();

console.log(generator2.next());
console.log(generator2.next(6));
console.log(generator2.next());

/*Output:
{ value: 'hello', done: false }
6
some code
{ value: 5, done: false }       
{ value: undefined, done: true } */

/*In the above program,

1. The first generator.next() returns the value of the yield 
(in this case, 'hello'). However, 
the value is not assigned to variable x in let x = yield 'hello';
Output: {value: "hello", done: false}

2. When generator.next(6) is encountered, 
the code again starts at let x = yield 'hello'; 
and the argument 6 is assigned to x. 
Also, remaining code is executed up to the second yield.
Output:
6
some code
{value: 5, done: false}

3. When the third next() is executed, 
the program returns {value: undefined, done: true}. 
It is because there are no other yield statements.
Output:
{value: undefined, done: true}
 */


//=============== Generators are Used for Implementing Iterables =====================

/*Generators provide an easier way to implement iterators.

If you want to implement an iterator manually, 
you have to create an iterator with the next() method 
and save the state. For example,*/

const iterableObj = {

    [Symbol.iterator](){
        let step = 0;
        return{
            next(){
                step ++;
                if(step === 1){
                    return {value: '1', done: false};
                }
                else if(step === 2){
                    return {value: '2', done: false};
                }
                else if(step === 3){
                    return {value: '3', done: false};
                }
                return {value: '', done:true};
            }
        }
    }
}
for( let i of iterableObj){
    console.log(i);
}
/*Output:
1
2
3 */

/*Since generators are iterables, 
you can implement an iterator in an easier way. 
Then you can iterate through the generators using the for...of loop. 
For example, */

function* generatorFunc(){
    yield 1;
    yield 2;
    yield 3;
}

const generator3 = generatorFunc();
for(let value of generator3){
    console.log(value);
}
/*Output:
1
2
3 */

//==== Generator Methods ==========
/*
Method	        Description
next()	        Returns a value of yield
return()	    Returns a value and terminates the generator
throw()	        Throws an error and terminates the generator
*/

//========== JavaScript return Vs yield Keyword ==================
/*
1. return Keyword

- Returns the value and terminates the function.

- Available in both the normal functions and generator functions.

2. yield Keyword

- Returns the value and halts the function but 
does not terminate the function.

- Available only in generator functions.
*/

//====== JavaScript Generator Function With return =========
/*You can use the return statement in a generator function. 
The return statement returns a value and terminates the function 
(similar to regular functions). For example,*/

function* generatorFunc(){

    yield 100;

    return 123;

    console.log('some code before the second yield');
    yield 200
}

const generator4 = generatorFunc();
console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.next());

/*Output:
{ value: 100, done: false }
{ value: 123, done: true }
{ value: undefined, done: true } */

/*In the above program, 
when the return statement is encountered, 
it returns the value and done property becomes true, 
and the function terminates. 
Hence, the next() method after the return statement 
does not return anything.

Note: You can also use the return() method instead 
of the return statement like generator.return(123); in the above code. */


//===== JavaScript Generator Throw Method ==========
/*You can explicitly throw an error on the generator function 
using the throw() method. 
The use of throw() method throws an error 
and terminates the function. For example,*/

function* generatorFunc(){
    yield 100;
    yield 200;
}

const generator5 = generatorFunc();

console.log(generator5.next());
console.log(generator5.throw(new Error('Error occured.')));
console.log(generator5.next());

/*Output:
{value: 1, done: false}
Error: Error occurred. */

//============ Uses of Generators ====================
/*
1. Generators let us write cleaner code while writing asynchronous tasks.
2. Generators provide an easier way to implement iterators.
3. Generators execute its code only when required.
4. Generators are memory efficient.
*/

/*Generators were introduced in ES6. Some browsers may not support the use of generators. 
To learn more, visit JavaScript Generators support. */

