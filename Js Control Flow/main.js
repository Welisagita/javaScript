//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"




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