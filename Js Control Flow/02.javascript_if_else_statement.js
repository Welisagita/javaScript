//<h1>JavaScript if else statement is use to make decision in programing</h1>

//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt

const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"


//NOTE: If you want Run the Output copy SCRIPT one by one, don't copy paste all script together;
//Example: copy Script 1 and paste on JavaScript Compiler then hit Run to see the Output;

//Script 1 -----------------------------------------------------------------------
//now look at the syntax below:
// if (test_condition) {
      // this empty line is (if) statement body
//  }

//(if) is keyword syntax followed by test_condition;
//this (test_condition) is boolean expression that result output true are false;
//if (test_condition) is true; the code inside statement body is executed;
//However if (test_condition) is false; the code inside statement body is skip the execution;

//Let see the example
const score = parseInt(prompt("Enter your marks: "))

if (score >=50){
    console.log("You have passed the exam")
    console.log("Congratulations!")
}
if (score < 50){
    console.log("Sorry, you failed your exam")
}



//NOTE: If you want Run the Output copy SCRIPT one by one, don't copy paste all script together;
//Example: copy Script 2 and paste on JavaScript Compiler then hit Run to see the Output;

//Script 2 -------------------------------------------------------------------------------------------
//now look at the syntax below:
// if (condition) {
      //code inside if block
//  }
// else {
      //code inside else block
//  }
//if (condition) is true; the code inside if block are executed;
//and if it's false; the code inside else block is executed;
//let see example
const score1 = 40

if (score1 >=50){
    console.log("You have passed the exam")
    console.log("Congratulations!")
}
else {
    console.log("Sorry, you failed your exam")
}


//NOTE: If you want Run the Output copy SCRIPT one by one, don't copy paste all script together;
//Example: copy Script 3 and paste on JavaScript Compiler then hit Run to see the Output;

//Script 3 -------------------------------------------------------------------------------------------
//now look at the syntax below:
// if (test_condition1) {
      // statements1
//  }
//else if (test_condition2) {
    // statements2
//  }
//else {
    // statements3
//  }
//if (test_condition1) is true; the code inside statements1 is executed, statements2 and statements3 are skip;
//and if (test_condition1) false; the programme will jump to (test_condition2) and if is true the statements2 is executed;
//and if (test_condition1) and (test_condition2) false, statements3 is executed;
//Let see example

const score2 = 60 //Output: "You have passed the exam", "Congratulations"

if (score2 > 100){
    console.log("Score is invalid")
}
else if (score2 < 0){
    console.log("Score is invalid")
}
else if (score2 >= 50){
    console.log("You have passed the exam")
    console.log("Congratulations!")
}
else {
    console.log("Sorry, you failed your exam")
}

//Script 4 -------------------------------------------------------------------------------------------
const score3 = 40 //Output: "Sorry, you failed your exam"

if (score3 > 100){
    console.log("Score is invalid")
}
else if (score3 < 0){
    console.log("Score is invalid")
}
else if (score3 >= 50){
    console.log("You have passed the exam")
    console.log("Congratulations!")
}
else {
    console.log("Sorry, you failed your exam")
}

//Script 5 -------------------------------------------------------------------------------------------
const score4 = 120 //Output: "Score is invalid"

if (score4 > 100){
    console.log("Score is invalid")
}
else if (score4 < 0){
    console.log("Score is invalid")
}
else if (score4 >= 50){
    console.log("You have passed the exam")
    console.log("Congratulations!")
}
else {
    console.log("Sorry, you failed your exam")
}

//Script 5 -------------------------------------------------------------------------------------------
const score5 = -10 //Output: "Score is invalid"

if (score5 > 100){
    console.log("Score is invalid")
}
else if (score5 < 0){
    console.log("Score is invalid")
}
else if (score5 >= 50){
    console.log("You have passed the exam")
    console.log("Congratulations!")
}
else {
    console.log("Sorry, you failed your exam")
}
