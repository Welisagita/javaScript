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
/*Output
Javascript
1
Javascript
2
Javascript
3
Javascript
4
*/

//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt

const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"


// ======================CREATING MULTIPLICATION TABLE=============================================

const number = parseInt(prompt("Enter a number:"));

let count1 = 1;

while (count1 <= 10) {
    const product = number * count1;
    console.log (`${number} * ${count1} = ${product}`)
    count1 = count1 + 1;
}
/* Output
Enter a number:9
9 * 1 = 9
9 * 2 = 18
9 * 3 = 27
9 * 4 = 36
9 * 5 = 45
9 * 6 = 54
9 * 7 = 63
9 * 8 = 72
9 * 9 = 81
9 * 10 = 90
*/

// ======================do while loop=============================================
/* syntax
do {
    // body of loop
} while(condition)
*/

let count2 = 1;

do {
    console.log(count2);
    count2 = count2 + 1;
} while(count2 <=5 )

/*Output
1
2
3
4
5
*/

// ====================== PROGRAMING TASK =============================================
/* Can you use the while loop to print
multiplication table for the given number.
But this time, you have to print the number
from 10 to 1.
*/

const number3 = parseInt(prompt("Enter a number: "));

let count3 = 10;

while (count3 >= 1){
    const product3 = number3 * count3;
    console.log (`${number3} * ${count3} = ${product3}`);
    count3 = count3 - 1;
}