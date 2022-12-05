//In programming, loops are used to repeat a block of code.

//For example, if you want to show a message 100 times, then you can use a loop. 
//It's just a simple example; you can achieve much more with loops.
//This tutorial focuses on JavaScript for loop. You will learn about the other type of loops in the upcoming tutorials.


//The syntax of the for loop is:

//for (initialExpression; condition; updateExpression) {
    // for loop body
//}

//Here,
//1. The initialExpression initializes and/or declares variables and executes only once.
//2. The condition is evaluated.
//If the condition is false, the for loop is terminated.
//If the condition is true, the block of code inside of the for loop body is executed.
//3. The updateExpression updates the value of initialExpression when the condition is true.
//4. The condition is evaluated again. This process continues until the condition is false.


//Example
// i = 1; the variable is assign the value 1
// i <= 5; now this variable is tasted, since this is true (1 is smaller then 5), the body will executed and printed the body and
// give us the Output:
/*Learning JavaScript
JavaScript is Fun
1*/
// i++ ; and then the expression will executed which increases the value of i (by 1 to 2)
//This process continues from 1 to 5 because the condition is i <=5
//When the value becomes 6, this tes condition become false (i <= 5), that's why the loop process will be terminated
for (let i = 1; i <= 5; i++) {
     console.log("Learning JavaScript");
     console.log("JavaScript is Fun");

     console.log(i);
}

//Output:
/*
Learning JavaScript
JavaScript is Fun
1
Learning JavaScript
JavaScript is Fun
2
Learning JavaScript
JavaScript is Fun
3
Learning JavaScript
JavaScript is Fun
4
Learning JavaScript
JavaScript is Fun
5
*/



//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt

const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"


// ======================CREATING MULTIPLICATION TABLE=============================================

const number = parseInt(prompt("Enter a number: "))

for (let count=1; count <=10; count++){
    const product = number * count;
    console.log(`${number} x ${count} = ${product}`);
}

/*
Output: 
Enter a number: 9
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
*/

//===================for..in loop=================

const student = {
    name : "Monica",
    grade : 7,
    age : 12
}

for (let data in student) {
    console.log (`${data} => ${student[data]}`);
}

/*
Output:
name => Monica
grade => 7
age => 12
*/



