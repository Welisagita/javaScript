//JavaScript Closures
/*Before you learn about closures, 
you need to understand two concepts:

1. Nested Function
2. Returning a function */

//================ JavaScript Nested Function ===============================
/*In JavaScript, 
a function can also contain another function. 
This is called a nested function. For example,*/

//Outer function
function greet(name){

    //Inner function
    function displayName(){
        console.log('Hi' + ' ' + name);
    }
    //calling inner function
    displayName();
}
//calling outer function
greet("Anthonio");//Output: Hi Anthonio

/*In the above program, 
the greet() function contains the displayName() function inside of it. */

//========== Returning a Function ==========================
/*In JavaScript, 
you can also return a function within a function. 
For example,*/

function greet(name){
    function dsiplayName(){
        console.log('Hi' + ' ' + name);
    }
    return displayName;
}

const g1 = greet('Bayu');
g1();

/*In the above program, 
the greet() function is returning the displayName function definition.

Here, the returned function definition is assigned to the g1 variable. 
When you print g1 using console.log(g1), 
you will get the function definition.

To call the function stored in the g1 variable, 
we use g1() with parentheses. */

//============== JavaScript Closures ================================
/*In JavaScript, 
closure provides access to the outer scope of a function 
from inside the inner function, 
even after the outer function has closed. For example,*/

//Outer function
function greet(){
    let name = 'Boby'; //Variable difined outside inner function

    //inner function
    function displayName(){
        return 'Hi' + ' ' + name;//accessing name variable
    }
    return displayName;
}

const g2 = greet();
//console returns the function definition
console.log (g2); //Output: [Function: displayName]
//console returns the value
console.log(g2()); //Output: Hi Boby

/*In the above example, 
when greet() function is called, 
it returns the function definition of displayName.

Here, g2 is a reference to the displayName() function.

When g2() is called, it still has access to the greet() function.

When we run console.log(g2), it returns the function definition.

The concept of closure exists for other programming languages like Python, Swift, Ruby, etc.

Let's have a look at another example.*/


function calculate(x){
    function multiply(y){
        return x * y;
    }
    return multiply;
}

const g3 = calculate(3);
const g4 = calculate(4);

console.log(g3);// [Function: multiply]
console.log(g3()); //NaN

console.log(g3(2)); //6
console.log(g4(5)); //20

/*In the above program, 
the calculate() function takes a single argument x 
and returns the function definition of the multiply() function. 
The multiply() function takes a single argument y and returns x * y.

Both g3 and g4 are closures.

The calculate() function is called passing a parameter x. 
When g3(2) and g4(5) are called, the multipy() function has access 
to the passed x argument of the outer calculate() function. */


//============= Data Privacy ====================================
/*JavaScript closure helps in the data privacy of the program. 
For example,*/

let a = 0;
function sum(){
    function increaseSum(){
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();

console.log(x()); //1
console.log(x()); //2
console.log(x()); //3

//print a still increasing if the variable outside the function
a = a + 1;
console.log(x());//5
console.log(x());//6

/*In the above example, 
the sum() function returns the function definition 
of the increaseSum() function.

The a variable is increased inside the increaseSum() function. 
However, the value of the a variable can also be changed 
outside of the function. 
In this case, a = a + 1; changes the value of the variable outside the function.

Now, if you want the a variable to be increased only inside the function, 
you can use a closure. For example, */

function sum(){
    let c = 0;
    function increaseSum(){
        return c = c + 1;
    }
    return increaseSum;
}

const v = sum()
//declare c outside the function, does not effect c inside the function
let c = 5 

console.log(v());// 1
console.log(v());// 2

console.log(c);// 5

/*In the above example, 
the sum() function sets the value of c to 0 
and returns the increaseSum() function.

Because of the closure, even though sum() is already executed, 
increaseSum() still has access to c and can add 1 
to a every time c() is called.

And the c variable is private to the sum() function. 
It means that the c variable can only be accessed inside of the sum() function.

Even if you declare c and use it, 
it does not affect the c variable inside of the sum() function.

Note: Generally, closures are used for data privacy. */



