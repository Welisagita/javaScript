//JavaScript CallBack Function
/*A function is a block of code that performs a certain task when called. 
For example, */

function greet(name){
    console.log('Hello' +' '+ name);
}

greet('Jhonson');// Hello Jhonson

/*In the above program, 
a string value is passed as an argument to the greet() function.

In JavaScript, 
you can also pass a function as an argument to a function. 
This function that is passed as an argument inside of another function 
is called a callback function. For example, */

function greet(name, callback){
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe(){
    console.log('I am callback function')
}

greet('Peter', callMe);
/*Output:
Hi Peter
I am callback function */

/*In the above program, 
there are two functions. 
While calling the greet() function, 
two arguments (a string value and a function) are passed.

The callMe() function is a callback function. */


//=================== Benefit of Callback Function ==========================
/*The benefit of using a callback function is that you can wait for the result 
of a previous function call and then execute another function call.

In this example, 
we are going to use the setTimeout() method to mimic the program that takes time to execute, 
such as data coming from the server.

Example: Program with setTimeout() */

function greet(){
    console.log('Hello world');
}
function sayName(name){
    console.log('Hi' + ' ' + name);
}

setTimeout(greet, 2000);
sayName('Chinmi');

/*Output:
Hi Chinmi
Hello world */

/*As you know, 
the setTimeout() method executes a block of code after the specified time.

Here, the greet() function is called after 2000 milliseconds (2 seconds). 
During this wait, the sayName('Chinmi'); is executed. 
That is why Hello Chinmi is printed before Hello world.

The above code is executed asynchronously 
(the second function; sayName() does not wait for the first function; greet() to complete). */

//== Example: Using a Callback Function
/*In the above example, 
the second function does not wait for the first function to be complete. 
However, if you want to wait for the result 
of the previous function call before the next statement is executed, 
you can use a callback function. For example,*/

function greet(name, myFunction){
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
  }
  
  // callback function
  function sayName(name){
    console.log('Hi' + ' ' + name);
  }
  
  setTimeout(greet, 2000, 'Goku', sayName);
  /*Output:
  Hello world
  Hi Goku */

  /*In the above program, 
  the code is executed synchronously. 
  The sayName() function is passed as an argument to the greet() function.

The setTimeout() method executes the greet() function only after 2 seconds. 
However, the sayName() function waits for the execution of the greet() function. */


/*Note: The callback function is helpful when you have to wait for a result that takes time. 
For example, the data coming from a server because it takes time for data to arrive. */