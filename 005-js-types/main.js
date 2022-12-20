//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"

 
let studentData11 = [['Dony', 21], ['Ama', 20]];

for (let i = 0; i < studentData11.length; i++){
    let innerArrayLength = studentData11[i].length;

    for(let j = 0; j < innerArrayLength; j++){
        console.log(studentData11[i][j]);
    }
}







