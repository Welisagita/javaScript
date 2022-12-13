//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"


//Take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

//Take the operand input
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result;
switch(operator){
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 + number2;
        break;
    case '*':
        result = number1 + number2;
        break;
    case '/':
        result = number1 + number2;
        break;
    default:
        console.log("Invalid operator");
}

console.log(`${number1} ${operator} ${number2} = ${result}`);