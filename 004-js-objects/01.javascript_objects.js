//JavaScript Objects
/*JavaScript object is 
a non-primitive data-type that allows 
you to store multiple collections of data.
*/

const person = {
    name : "john",
    age : 20
}
console.log(person); //Output: { name: 'john', age: 20 }
console.log(typeof(person)); //Output: object

/*
In JavaScript, "key: value" pairs are called properties. 
For example,

let person = { 
    name: 'John',
    age: 20
};
Here, name: 'John' and age: 20 are properties. */


//====================Accessing Object Properties==========================
//1.Using dot notation
const person1 = {
    name1 : "Kumbang",
    age1 : 31
}

console.log(person1.name1);//Output: Kumbang
console.log(person1.age1);//Output: 31

//2.Using bracket notation
const person2 = {
    name2 : "Kumbang",
    age2 : 31
}

console.log(person2["name2"]); //Output: Kumbang
console.log(person2["age2"]);//Output: 31


//=============================JavaScript Nested Objects=============================
//An object can also contain another object. For example,

// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

//================= OBJECT METHODS =================================

const person3 = {
    name3 : "Kumbang",
    age3 : 31,
    greet: function(){
        console.log("Hello");
    }
}

person3.greet();//Output: Hello;


//============================ PROGRAM TASK =============================
/*Can u create an object named student with keys
name, rollNo, totalMarks. Give any values you prefer.
also create two functions:

1. first function to print the information about student and
2. a second function to check if the student passed the exam or not.

if the totalMark is less then 40, print 'You failed'.
if the totalMark is greter then equal 40, print 'You passed'.
 */

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