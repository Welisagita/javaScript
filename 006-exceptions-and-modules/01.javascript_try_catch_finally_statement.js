//JavaScript try...catch...finally Statement

/*The try, catch and finally blocks are used to 
handle exceptions (a type of an error). 
Before you learn about them, 
you need to know about the types of errors in programming. */

//=========== Types of Errors =============
/*In programming, 
there can be two types of errors in the code:

1. Syntax Error: Error in the syntax. 
For example, if you write consol.log('your result');, 
the above program throws a syntax error. 
The spelling of console is a mistake in the above code.

2. Runtime Error: This type of error occurs during the execution of the program. 
For example,
calling an invalid function or a variable.


These errors that occur during runtime are called exceptions. 
Now, let's see how you can handle these exceptions. */

//============ JavaScript try...catch Statement =========
/*The try...catch statement is used to handle the exceptions. 
Its syntax is:

try {
    // body of try
} 
catch(error) {
    // body of catch  
}

The main code is inside the try block. 
While executing the try block, if any error occurs, 
it goes to the catch block. 
The catch block handles the errors as per the catch statements.

If no error occurs, 
the code inside the try block is executed and the catch block is skipped. */

//Example 1: Display Undeclared Variable
const numerator = 100, denominator = 'a';

try{
    console.log(numerator/denominator);
    console.log(a);//forgot to define variable a
}
catch(error){
    console.log('An error caught');
    console.log('Error message: '+ error);
}
/*Output:
NaN
An error caught
Error message: ReferenceError: a is not defined */

/*In the above program, 
a variable is not defined. 
When you try to print the a variable, 
the program throws an error. 
That error is caught in the catch block. */


//=========== JavaScript try...catch...finally Statement =============
/*You can also use the try...catch...finally statement to handle exceptions. 
The finally block executes both when the code runs successfully or 
if an error occurs.

The syntax of try...catch...finally block is:

try {
    // try_statements
} 
catch(error) {
    // catch_statements  
}
finally() {
    // codes that gets executed anyway
} 

*/

//Example 2: try...catch...finally Example
const numerator1 = 100, denominator1 = 'a';
try{
    console.log(numerator1/denominator1);
    console.log(a);
}
catch(error){
    console.log('An error caught')
    console.log('Error message: '+ error);
}
finally{
    console.log('Finally will execute every time');
}
/*Output:
NaN
An error caught
Error message: ReferenceError: a is not defined
Finally will execute every time */

/*In the above program, 
an error occurs and that error is caught by the catch block. 
The finally block will execute in any situation 
( if the program runs successfully or if an error occurs).

Note: You need to use catch or finally statement after try statement. 
Otherwise, 
the program will throw an error Uncaught SyntaxError: Missing catch 
or finally after try. */

//========== JavaScript try...catch in setTimeout ==============
/*The try...catch won't catch the exception 
if it happened in "timed" code, 
like in setTimeout(). For example, */

try{
    setTimeout(function(){
        //error in the code
    }, 3000);
} catch(e) {
    console.log("won't work");
}

/*The above try...catch won't work 
because the engine has already left the try..catch construct 
and the function is executed later.

The try..catch block must be inside that function 
to catch an exception inside a timed function. 
For example, */

setTimeout(function(){
    try{
        // error in the code
    }
    catch{
        console.log("error is caught");
    }
}, 3000);

/*You can also use the throw statement with the try...catch statement 
to use user-defined exceptions. 
For example, a certain number is divided by 0. 
If you want to consider Infinity as an error in the program, 
then you can throw a user-defined exception using the throw statement 
to handle that condition. */

