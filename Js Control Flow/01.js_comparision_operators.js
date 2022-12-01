//JavaScript Boolean Expression
//Boolean
let value1 = true;
let value2 = false;

console.log(value1); //Output true
console.log(value2); //Output false

console.log(typeof(value1)); //Output boolean; typeof is to check the data type
console.log(typeof(value2)); //Output boolean; typeof is to check the data type

//Example if we put double quotation mark on value
//the data type will be String
let value3 = "true";
let value4 = "false";

console.log(value3); //Output true
console.log(value4); //Output false

console.log(typeof(value3)); //Output string; typeof is to check the data type
console.log(typeof(value4)); //Output string; typeof is to check the data type

//And remember javascript is case sensitive language
//let value1 = True;
//let value2 = False;
//console.log(value1); The output will be error if use Capital T
//console.log(value2); The output will be error if use Capital F

//Comparision Operators
//Operator	| Description | Examples
// ==	| Equal to: true if the operands are equal	| 5==5; //true
// !=	| Not equal to: true if the operands are not equal	| 5!=5; //false
// ===	| Strict equal to: true if the operands are equal and of the same type	| 5==='5'; //false
// !==	| Strict not equal to: true if the operands are equal but of different type or not equal at all	| 5!=='5'; //true
// >	| Greater than: true if the left operand is greater than the right operand	| 3>2; //true
// >=	| Greater than or equal to: true if the left operand is greater than or equal to the right operand	| 3>=3; //true
// <	| Less than: true if the left operand is less than the right operand	| 3<2; //false
// <=	| Less than or equal to: true if the left operand is less than or equal to the right operand	| 2<=2; //true

//Example Greater than operator
console.log(8 > 5); //Output true;
console.log(3 > 5); //Output false;

//Example Less than operator
console.log(3 < 5); //Output true;
console.log(5 < 5); //Output false;

//Example Greater than or equal operator
console.log(3 >= 5); //Output false;
console.log(5 >= 5); //Output true;

//Example Less than or equal operator
console.log(3 <= 5); //Output true;
console.log(5 <= 5); //Output true;

//Example equal to operator
console.log(3 == 5); //Output false;
console.log(5 == 5); //Output true;
console.log("5" == 5);//Output true why?Because it's only check the data or value NOT the data type

//Example Not equal to operator
console.log(3 != 5); //Output true;
console.log(5 != 5); //Output false;


//Example Strict equal to operator, it's compare the value and the data type as well
console.log("5" === 5); //Output false; because the data type is not the same


//Example Strict NOT equal to operator, it's compare the value and the data type as well
console.log("5" !== 5); //Output true; because the data type is not the same, hence strict not equal


//Comparision Between Variables
const number1 = 5;
const number2 = 9;
const result1 = number1 < number2;
console.log(result1); //Output true

//we also can use comparision like this
const number3 = 5;
const result2 = number3 < 9;
console.log(result2); //Output true


//JavaScipt Logical Operators
//Operator	| Description	| Example
// &&	| Logical AND: true if both the operands/boolean values are true, else evaluates to false	| true && false; // false
// ||	Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false	true | || false; // true
// !	Logical NOT: true if the operand is false and vice-versa. |	!true; // false

// Example Logical AND: true if both the operands/boolean values are true
const age = 18;
const height = 5.5;
let result3 = age >= 18 && height > 5;// Look at this; we used two boolean expression (age >= 18 and height > 5 )
//and used one logical operator (&&)

console.log(result3);// Output true; Because age 18 are greater than or equal which is 18,
// and height is greater than 5 which is 5.5
// to get true, two expressions must be true

//If one expression false the Output must be false
const age1 = 18;
const height1 = 5.5;
let result4 = age1 >= 18 && height1 < 5;// Look at this; we used two boolean expression (age >= 18 and height < 5 )
//and used one logical operator (&&)
console.log(result4); //Output false; Because height is not less than 5;


// Example Logical OR: true if either of the operands/boolean values is true
const age2 = 18;
const height2 = 5.5;
let result5 = age2 >= 18 || height2 < 5;// Look at this; we used two boolean expression (age >= 18 and height < 5 )
//and used one logical operator (&&)
console.log(result5); //Output true;

// Example Logical NOT: true if the operand is false and vice-versa.
const height3 = 5.5;
let result6 = height3 > 6; //The exact answer from this line is false which is 5.5 is less than 6; not greater than 6;
//so the output will be true; 
console.log(!result6); //Output true;

const height4 = 5.5;
let result7 = height4 < 6;//The exact answer from this line is true which is 5.5 is less than 6; not greater than 6;
//so the output will be false; 
console.log(!result7); //Output false;


//Boolean Expression are they very foundations of programming

