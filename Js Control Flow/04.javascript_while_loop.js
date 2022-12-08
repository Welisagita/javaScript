//JavaScript while and do...while Loop
/*In programming, loops are used to repeat a block of code. 
For example, if you want to show a message 100 times, then you can use a loop. 
It's just a simple example; you can achieve much more with loops.*/

//JavaScript while Loop
//The syntax of the while loop is:

/*
while (condition) {
    // body of loop
}
*/

/*
Here,

1. A while loop evaluates the condition inside the parenthesis ().
2. If the condition evaluates to true, the code inside the while loop is executed.
3. The condition is evaluated again.
4. This process continues until the condition is false.
5. When the condition evaluates to false, the loop stops.
*/

//Example infinite loop
/*
while (1 < 5) {
    console.log ("Javascript");
}
*/


//Example loop
let count = 1;

while (count < 5) {
    console.log("Javascript");
    console.log (count);
    count = count + 1;
}

