//JavaScript Comments
// Write Comment
// program to take the user's name

let name = prompt("Enter your name: ");
console.log("Name: " + name);


//Output
//Enter your name: James
//Name: James


//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
//let name = prompt("What's your name");
//console.log("hello"+name+"!");


//Another comment example
// program to take the user's name

let nama = prompt("Enter your name: ");  // take input
console.log("Name: " + nama); // print the name variable


//Output
//Enter your name: James
//Name: James

//Prevent Executing Code Using Comments

// program to take user's name and age
let name2 = prompt("Enter a name: ");
// let age = prompt("Enter age: ");
console.log("name: " + name2);
// console.log("age:", age);

//Output
//Enter name: Sarah
//name: Sarah


//JavaScript Multiline comments
/*This program is used to take name of the user
You can get the name from the user
and display the result*/ 

let name3 = prompt("Enter your name:");
console.log("Name " + name3);

//Output
//Enter your name: Sarah
//Name Sarah


//Programmiz Quiz
//Which of the following operators is used as a comment in JavaScript?

//1. //
//2. <!-- →
//3. #
//4. **

//Answer: 1
