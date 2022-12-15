//<h1> JavaScipt Variables & Constants </h1>

//001. Textual Data Strings
//Strings: "I Love Javascript" and 'Javascript is fum'
console.log ("I Love Javascript") // Strings with double quote
console.log ('Javascript is fun') // Strings with single quote
console.log (`Learn Javascript`) // Strings with backtick

//002. Numbers
//Numbers: 7 and 70.5
console.log (7); //Integers
console.log (70.5); //Float

//If numbers with quotations mark become strings
console.log ('7');
console.log ('70.5');

//003. Variables
//003A. Let Variable
let language = "Javascript"; //Javascipt text is a value from language 
console.log (language); //Variable
console.log ("language"); //Strings

let number = 5;
console.log (number);

//003B. Var Variable
//Another variables keyword is var, in modern javascript we rarely use var

var myName = "Weli";
console.log (myName);
// let variable
let aku = "Joni";
console.log (aku);

let siapa = "Kumbang";
console.log (siapa);
// let variable, different value
let name = "Franky";
let surename = "Kupu-kupu";

name = surename; //the value of name is asign the value of surename
console.log (name);

//003C. Const Variable
//const variable
const passportNumber = 39983;//once you declare variable using const, you can not change it.
console.log (passportNumber);
//passportNumber = 44325;
//console.log (passportNumber);// will see TypeError, because once you declare variable using const, you can not change it.

//004. Undefined
let yourName; //If using let you will see undefined
console.log (yourName);

//if using const you will see typeError
//const theirName;
// console.log (theirName); 

//explicitly undefined to variable
let iName = "Weli Sagita";
console.log (iName);

iName = undefined;
console.log (iName);

//Print variables and string in single line

let city = "Jakarta";
console.log ("City:" + city);
//In other code you can use backtick and $ sign, and the output will be the same
console.log (`City:${city}`);

// Variables and String example
let city2 = "Jakarta";
let kfcLocation = 10;

console.log (`City: ${city2}, KFC Location: ${kfcLocation}` )



//<h2>Rules for Naming JavaScript Variables</h2>
//The rules for naming variables are:

//Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,
//valid
let a = 'hello';
let _a = 'hello';
let $a = 'hello';
//Variable names cannot start with numbers. For example,
//invalid
//Let 1a = 'hello'; // this gives an error
//JavaScript is case-sensitive. So y and Y are different variables. For example,
let y = "hi";
let Y = 5;

console.log(y); // hi
console.log(Y); // 5
//Keywords cannot be used as variable names. For example,
//invalid
let new = 5; // Error! new is a keyword.

//Notes:

//Though you can name variables in any way you want, it's a good practice to give a descriptive variable name. If you are using a variable to store the number of apples, it better to use apples or numberOfApples rather than x or n.
//In JavaScript, the variable names are generally written in camelCase if it has multiple words. For example, firstName, annualSalary, etc.
//JavaScript Constants
//The const keyword was also introduced in the ES6(ES2015) version to create constants. For example,

//const x = 5;
//Once a constant is initialized, we cannot change its value.

//const x = 5;
//x = 10;  // Error! constant cannot be changed.
//console.log(x)

//Simply, a constant is a type of variable whose value cannot be changed.

//Also, you cannot declare a constant without initializing it. For example,

//const x;  // Error! Missing initializer in const declaration.
//x = 5;
//console.log(x)

//Note: If you are sure that the value of a variable won't change throughout the program, it's recommended to use const. However, there are a few browsers that do not support const. Visit JavaScript const browser support to learn more.

//Now that you know about variables, you will learn about different types of data a variable can store in the next tutorial.
