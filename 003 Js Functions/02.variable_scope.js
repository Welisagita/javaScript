//JavaScript Variable Scope

/*
In JavaScript, a variable has two types of scope:
1. Global Scope
2. Local Scope
 */

//===================LOCAL SCOPE==============

function addNumber(n1, n2){
    let result= n1 + n2;
    console.log(result);
}
addNumber(4,13);
/*
Output:
17
 */

//=====================Example error=============================
/*
function addNumber(n1, n2){
    let result= n1 + n2;  //this result inside the function; it's LOCAL SCOPE
    console.log(result);
}
addNumber(4,13);
console.log(result); //if we print result here the output will be error
//because the result inside the function; its Call LOCAL SCOPE

*/

//================Example if result outside the function=======================

function addNumber(n1, n2){
    let result= n1 + n2; //result inside the function; LOCAL SCOPE
    console.log(result);
}

let result = 123;  //result outside the function; GLOBAL SCOPE

addNumber(4,13); //will be print result inside the function
console.log(result); //will be print result outside the function.

/*
Output:
17
123
 */


//===================GLOBAL SCOPE==============

let result1; //result1 outside the function; GLOBAL SCOPE

function addNumber(n3,n4){
    result1 = n3 + n4;
    console.log(result1);
}
addNumber(5,3);
console.log(result1); 

/*Output:
8
8
 */

//============================Example LOCAL & GLOBAL SCOPE============================

let message = "Hello!";

function changeGreeting(){
    message = "How Are You?";
}

//print outside the function;GLOBAL SCOPE
console.log(message);

//will print inside the function;LOCAL SCOPE
changeGreeting();
console.log(message);

/*Output:
Hello!
How Are You?
*/


//============================Example BLOCK SCOPE============================
//

const addNumber2 = (n5,n6) => {
    let result2 = n5 + n6;
    console.log(result2);

    if(result2 > 10){
        let result3 = "Positive";  
        console.log(result3);   //the function inside the block 
    }

}

addNumber2(4,9);

/*Output
13
Positive
 */


//========What the output of this program?============

let a = 88;
function checkValue(){
    let a = 77;
    a = a - 57;
}
checkValue();   //will not print; because There's no print statement (console.log) inside the fuction
console.log(a);  // will print a; GlOBAL SCOPE