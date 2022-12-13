//JavaScript break Statement


//===============Break with for loop=================
for (let i = 1; i <= 5; i++) {
    console.log(i);
    break; //The break steatment immediately terminate the loop.

    console.log("After Break");//Anything after break will naver executed
}
/*
Output:
1
*/

//Another example
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i); 
}
/*
Output:
1
2
*/


//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt

const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"

//===============Break with while loop=================

while (true) {
    let number = parseInt(prompt("Enter a number: "));

    if (number < 0){  //number bigger then 0 will be printed; But smaller then 0 will not
        break;
    }

    console.log(number);
}
/*
Enter a number: 9 //If we input 9 the output will be 9; Because True
9
Enter a number: 5 //If we input 5 the output will be 5; Because True
5
Enter a number: -1 //If we input -1 the output will be none; Because false
*/


//===============Continue Expression with for loop=================

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; //Continue expression does not allow anything else to execute inside the loop
    }
    console.log(i);
}
/*Output:
1
2
4
5
*/


//===============Break and Continue Expression with while loop=================
// i want to print even number; if the number is odd i don't want to print;this is the code
while (true) {
    let number1 = parseInt(prompt("Enter a number: "));

    if (number1 < 0){ // Will print number bigger then 0; if smaller the 0 will break
        break;
    }
    if (number1 % 2 !=0){ //the % 2 will divided number which divisible by 2;if the result 0 than it's an even number.
                        //So since i want odd numbers, i'll say not equals operator != 0
        continue;         //if the number odd will continue
    }

    console.log(number1);
}
/*Output:
Enter a number: 4 
4
Enter a number: 9
Enter a number: 22
22
Enter a number: -2
*/

//===========================PROGRAM TASK================
/*Can you create a program that take the input from the user.
If the user enters a prime number, print the number.
If the user enters a negative or non-prime number, ask the user for the other number.
And if user enters a number greater than 100 terminate the loop.
*/

while (true){
    let number2 = parseInt(prompt("Enter a number: "));

    if (number2 > 100){
        break;
    }
    
    let isPrime = true;
    for (let i = 2; i < number2; i++){
        if (number2 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (number2 < 0 || !isPrime) {
        console.log ("Input another number");
        continue;
    }
    
    else if (isPrime) {
        console.log(number2);
    }
}

//copy the code on javascript compiler