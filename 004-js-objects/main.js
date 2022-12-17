//If JavaScript is showing reference error “Prompt is not defined” you should do this: 
//Solution 1: The most effective solution is we have to install “prompt-sync“. 
//make sure you have also installed an updated version of npm and node, then write the below code in the terminal: npm install prompt-sync
//Example: This example will demonstrate the use of prompt on the server side by using the “prompt-sync” package:
//const prompt=require("prompt-sync")({sigint:true}); >> use this before the prompt
const prompt=require("prompt-sync")({sigint:true});//This line i use because showing "ReferenceError: prompt is not defined"

 

const student3 = {
    firstName: 'Sara'
}

//getting property
Object.defineProperty(student3, "getName", {
    get: function(){
        return this.firstName;
    }
});

//setting property
Object.defineProperty(student3, "changeName",{
    set: function(value){
        this.firstName = value;
    }
});

console.log(student3.firstName); //Output: Sara

//changing a property value
student3.changeName = 'Amy';
console.log(student3.firstName); //Output: Amy
