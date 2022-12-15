//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"


//Object student name, rollNo, totalMarks
const student1 = {
    name: "Anthon",
    rollNo: 2467,
    totalMark: 70,
}

//Function to print student information
function studentInfo() {
    console.log(student1.name);
    console.log(student1.rollNo);
    console.log(student1.totalMark);
}

//function to check if student Pass or not
function score(){
if (student1.totalMark >= 40){
    console.log("You Passed");
}
else {
    console.log("You failed");
}
}


studentInfo(); // Output: Anthon 2467 70
score(); //Output: You Passed