//<h1>JavaScript Type Conversions</h1>
//In this tutorial, you will learn about type conversions in JavaScript with the help of examples.
//JavaScript Type Conversion
//Copy Paste this file into Javascript Compiler to see Output


const x = 8;
const y = 4;
const result = x + y;

console.log(result);//Output 12

//See the diferent the value x fill with string
const x1 = '8';//adding string to
const y1 = 4;//numeric value
const result1 = x1 + y1;

console.log(result1); //Output 84, the value of string and numeric are joint togehther
console.log(typeof(result1)); //Output string, the result of variable indeed string, this is called Implicit Conversion - automatic type conversion.

//Type Conversion is the process of converting Data Type to Another Data type
//if change the string with text hello
const x2 = 'hello';
const y2 = 4;
const result2 = x2 + y2;

console.log(result2); //Output hello4
console.log(typeof(result2)); //Output string, the typeof is to check the data type

//Type Conversion is the process of converting Data Type to Another Data type
const result3 = '5' - '2';
const result4 = '5' - 2;
const result5 = '5' * 2;
const result6 = '5' / 2;

console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

console.log(typeof(result3));
console.log(typeof(result4));
console.log(typeof(result5));
console.log(typeof(result6));

// NaN = Not a Number
const result7 = '4' - 'hello';
console.log(result7);


//now will see what happened if we use addition and substraction operator with boolean value
// if boolean is used, true is 1, false is 0
const result8 = '4' - true;
console.log(result8);//Output 3

const result9 = '4' + true;
console.log(result9);//Output 4true, joint two string together

const result10 = 4 + false;
console.log(result10);//Output 4

//Explicit Conversion
//Explicit Conversion - manual type conversion
//Converting String to number
const result11 = Number('324');
console.log(result11); //Output 324, because it's converting string to number

console.log(typeof(result11));//Output number, it is to check the Data Type

//Explicit Conversion - manual type conversion
//Converting Boolean to number
const result12 = Number(true);
console.log(result12); //Output 1, because it's converting boolean to number

console.log(typeof(result12));//Output number, it is to check the Data Type

//Explicit Conversion - manual type conversion
//Converting Boolean to number
const result13 = Number(false);
console.log(result13); //Output 0, because it's converting boolean to number

console.log(typeof(result13));//Output number, it is to check the Data Type

//Explicit Conversion
//Explicit Conversion - manual type conversion
//Converting Number to String
const result14 = String(257);
console.log(result14); //Output 257, because it's converting number to string
console.log(typeof(result14));//Output string, it is to check the Data Type

//Explicit Conversion - manual type conversion
//Converting Boolean to String
const result15 = String(true);
console.log(result15); //Output true, because it's converting boolean to string
console.log(typeof(result15));//Output string, it is to check the Data Type

const result16 = String(false);
console.log(result16); //Output string, because it's converting boolean to string
console.log(typeof(result16));//Output string, it is to check the Data Type


//Converting Number to String
//Using .toString()
const result17 = (257).toString();
console.log(result17); //Output 257, because it's converting number to string
console.log(typeof(result17));//Output string, it is to check the Data Type




