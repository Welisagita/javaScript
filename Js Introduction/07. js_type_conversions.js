//<h1>JavaScript Type Conversions</h1>
//In this tutorial, you will learn about type conversions in JavaScript with the help of examples.
//JavaScript Type Conversion
//Copy Paste this file into Javascript Compiler


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


