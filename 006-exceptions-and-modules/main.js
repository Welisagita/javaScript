//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"

const number2 = 1;

try{
    throw new Error('This is the throw');
}
catch(error){
    console.log('An error caught');
    if(number2 + 8 > 10){
        console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else{
        throw new Error('The value is low');
    }
}
/*Output:
An error caught
Error message: Error: This is the throw
Error resolved
 */