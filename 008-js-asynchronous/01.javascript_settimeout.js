//Javascript setTimeout()
/*The setTimeout() method executes a block of code after the specified time. 
The method executes the code only once.

The commonly used syntax of JavaScript setTimeout is: */

//setTimeout(function, milliseconds);

/*Its parameters are:

1. function - a function containing a block of code
2. milliseconds - the time after which the function is executed

The setTimeout() method returns an intervalID, which is a positive integer.*/

//=================== setTimeout() =================================

//Example 1: Display a Text Once After 3 Second
function greet(){
    console.log('Hello world')
}
setTimeout(greet, 3000);
console.log('This message is shown first');

/*In the above program, 
the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).

Hence, the program displays the text Hello world only once after 3 seconds. */

/*Note: The setTimeout() method is useful when you want to execute a block of once after some time. 
For example, showing a message to a user after the specified time. */


//The setTimeout() method returns the interval id. For example,
function greet(){
    console.log('Hello world')
}
let intervalId = setTimeout(greet, 3000);
console.log('Id:' + intervalId);
/*Output:
Id:2
Hello world */


//Example 2: Display Time Every 3 Second
function showTime(){
    let dateTime = new Date();

    let time = dateTime.toLocaleTimeString();
    console.log(time);

    setTimeout(showTime, 3000);
}

showTime();

/*Output:
5:45:39 PM
5:45:43 PM
5:45:47 PM
5:45:50 PM
.................. */

/*The above program displays the time every 3 seconds.

The setTimeout() method calls the function only once 
after the time interval (here 3 seconds).

However, in the above program, since the function is calling itself, 
the program displays the time every 3 seconds.

This program runs indefinitely (until the memory runs out).*/

/*Note: If you need to execute a function multiple times, 
it's better to use the setInterval() method. */


//====================== JavaScript clearTimeout() ==================
/*As you have seen in the above example, 
the program executes a block of code after the specified time interval. 
If you want to stop this function call, you can use the clearTimeout() method.

The syntax of clearTimeout() method is:

clearTimeout(intervalID);

Here, the intervalID is the return value of the setTimeout() method. */

//Example 3: Use clearTimeout() Method

let count = 0;

function increaseCount(){
    count += 1;
    console.log(count);
}

let id = setTimeout(increaseCount, 3000);
clearTimeout(id);
console.log('setTimeout is stopped.');// Output: setTimeout is stopped.

/*In the above program, 
the setTimeout() method is used to increase the value of count after 3 seconds. 
However, the clearTimeout() method stops the function call of the setTimeout() method. 
Hence, the count value is not increased.

Note: You generally use the clearTimeout() method 
when you need to cancel the setTimeout() method call before it happens. */

function greet(name, lastName){
    console.log('Hello' + ' ' + name + ' ' + lastName);
  }
  
  setTimeout(greet, 1000, 'Weli', 'Sagita');//Output: Hello Weli Sagita

  
/*In the above program, 
two parameters Weli and Sagita are passed to the setTimeout() method. 
These two parameters are the arguments that will be passed 
to the function (here, greet() function) that is defined inside the setTimeout() method. */




