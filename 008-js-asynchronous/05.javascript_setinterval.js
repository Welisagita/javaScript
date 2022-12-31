//Javascript setInterval()

/*In JavaScript, 
a block of code can be executed in specified time intervals. 
These time intervals are called timing events.

There are two methods for executing code at specific intervals. They are:

1. setInterval()
2. setTimeout()

In this tutorial, you will learn about the setInterval() method. */

//============= JavaScript setInterval() =======================
/*The setInterval() method repeats a block of code at every given timing event.

The commonly used syntax of JavaScript setInterval is:*/

//setInterval(function, milliseconds);

/*Its parameters are:

1. function - a function containing a block of code
2. milliseconds - the time interval between the execution of the function

The setInterval() method returns an intervalID which is a positive integer. */


//==Example 1: Display a Text Once Every 1 Second
function greet (){
    console.log('Hello world');
}

setInterval(greet, 1000);

/*Output:
Hello world
Hello world
Hello world
Hello world
Hello world
.... */

/*In the above program, 
the setInterval() method calls the greet() function every 1000 milliseconds(1 second).

Hence the program displays the text Hello world once every 1 second. */

/*Note: The setInterval() method is useful when you want to repeat a block of code multiple times. 
For example, showing a message at a fixed interval. */


//==Example 2: Display Time Every 5 Seconds

function showTime (){

    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}

let display = setInterval(showTime, 5000);

/*Output:
"5:15:28 PM"
"5:15:33 PM"
"5:15:38 PM"
.... */

/*The above program displays the current time once every 5 seconds.

new Date() gives the current date and time. 
And toLocaleTimeString() returns the current time. 
To learn more about date and time, visit JavaScript Date and Time. */

//============== JavaScript clearInterval() ======================
/*As you have seen in the above example, 
the program executes a block of code at every specified time interval. 
If you want to stop this function call, then you can use the clearInterval() method.

The syntax of clearInterval() method is:

//clearInterval(intervalID);

Here, the intervalID is the return value of the setInterval() method. */

//==Example 3: Use clearInterval() Method
let count = 0;

// function creation
let interval = setInterval(function(){
    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);

/*Output:
10:00:38 AM
10:00:40 AM
10:00:43 AM
10:00:45 AM
10:00:47 AM */

/*In the above program, 
the setInterval() method is used to display the current time every 2 seconds. 
The clearInterval() method stops the function call after 5 times. */

/*You can also pass additional arguments to the setInterval() method. The syntax is:

setInterval(function, milliseconds, parameter1, ....paramenterN);

When you pass additional parameters to the setInterval() method, 
these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

For example, */

function greet(name, lastName){
    console.log('Hallo' + ' ' + name + ' ' + lastName);
}

setInterval(greet, 1000, 'Weli', 'Sagita');

/*Output:
Hello Weli Sagita
Hello Weli Sagita
Hello Weli Sagita
... */

/*In the above program, 
two parameters Weli and Sagita are passed to the setInterval() method. 
These two parameters are the arguments that will be passed 
to the function (here,  greet() function) that is defined inside the setInterval() method.

Note: If you only need to execute a function one time, 
it's better to use the setTimeout() method. */



