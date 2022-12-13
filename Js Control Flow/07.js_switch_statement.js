//Javascript Switch Statement
/*The JavaScript switch statement is used in decision making.
The switch statement evaluates an expression and executes 
the corresponding body that matches the expression's result.
*/

//the syntax
/*
switch(variable/expressiaon) {
    case value1:
        //body of case 1
        break;
    case value2:
        //body of case 2
        break;
    case valuN:
        //body of case N
        break;
    default:
        //body of default
}
*/
//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt

const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"

//Example 

const number =parseInt(prompt("Enter a number between 1 and 7: "));

switch(number){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
            console.log("Tuesday");
            break;
    case 4:
            console.log("Wednesday");
            break;
    case 5:
            console.log("Thursday");
            break;
    case 6:
            console.log("Friday");
            break;
    case 7:
            console.log("Saturday");
            break;
    default:
            console.log("Invalid");
            break;
}
/*
 Enter a number between 1 and 7: 1
 Output:
Sunday
Enter a number between 1 and 7: 8
Output:
Invalid
Enter a number between 1 and 7: 4
Output:
Wednesday
*/

//if we delete all the break statement

/*
Enter a number between 1 and 7: 4
Output:
Wednesday
Thursday
Friday
Saturday
Invalid
*/

//=================================Js With Multiple Case================


const day = prompt("Enter a day: ");

switch(day){
    case 'Monday':
    case 'Tuesday':
    case 'wednesday':
    case 'Thursday':
    case 'Friday':
        console.log("Weekday");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Weekend");
        break;
    
    default:
            console.log("Invalid Day");
            break;
}
/*
Enter a day: Monday
Output:
Weekday
Enter a day: Saturday
Output:
Weekend
Enter a day: monday //see the letter m must be Capital.
Output: //If not the output will be Invalid
Invalid Day 
*/


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

/*
Output:
Enter operator ( either +, -, * or / ): /
Enter first number: 100
Enter second number: 50
100 / 50 = 150

Output:
Enter operator ( either +, -, * or / ): +
Enter first number: 31
Enter second number: 5
31 + 5 = 36
 */