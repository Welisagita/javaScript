//JavaScript Template Literals (Template Strings)

/*Template literals (template strings) allow you 
to use strings or embedded expressions in the form of a string. 
They are enclosed in backticks ``. For example, */

const name = 'Jack';
console.log(`Hello ${name}`);//Output: Hello Jack

/*Note: Template literal was introduced in 2015 (also known as ECMAScript 6 or ES6 or ECMAScript 2015). 
Some browsers may not support the use of template literals. 
Visit JavaScript Template Literal support to learn more. */

//============ Template Literals for Strings ================

/*In the earlier versions of JavaScript, 
you would use a single quote '' or a double quote "" for strings. 
For example, */

const str1 = 'This is string';
/*
const str2 = 'A "code" inside a string'; //valid code
const str3 = 'A 'code' inside a string'; //error

const str4 = "Another 'quote' inside a string"; // valid code
const str5 = "Another "quote" inside a string"; // Error
*/

//To use the same quotations inside the string, 
//you can use the escape character \.

const str3 = 'A  \'code\' inside a string';//valid code
const str5 = "Another \"quote\" inside a string";//valid code

/*
Instead of using escape characters, you can use template literals. 
For example,

const str1 = `This is a string`;
const str2 = `This is a string with a 'quote' in it`;
const str3 = `This is a string with a "double quote" in it`;

As you can see, 
the template literals not only make it easy to include quotations 
but also make our code look cleaner. */

//======== Multiline Strings Using Template Literals =======
/*Template literals also make it easy to write multiline strings. 
For example,

Using template literals, you can replace */
const message1 = 'this is long message\n' + 
'that spans across multiple lines\n' +
'in the code.'

console.log(message1);

//with

const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2);
/*The output of both these programs will be the same.*/
/*Output
This is a long message
that spans across multiple lines
in the code.*/

//========= Expression Interpolation ============
/*Before JavaScript ES6, 
you would use the + operator to concatenate variables 
and expressions in a string. For example, */

const name1 = 'Jack';
console.log('Hello' + name1);//Output: Hello Jack

/*With template literals, 
it's a bit easier to include variables and expressions inside a string. 
For that, we use the ${...} syntax.
 */

const name2 = 'Sara';
console.log(`Hello ${name2}`);//Hello Sara

// template literals used with expressions
const result = 4 + 5;
console.log(`the sum of 4 + 5: ${result}`);//the sum of 4 + 5: 9
console.log(`${result < 10? 'Too Low' : 'Very High'}`);//Too Low

/*The process of assigning variables and expressions 
inside the template literal is known as interpolation. */

//========== Tagged Templates =================
/*Normally, you would use a function to pass arguments. 
For example, */

function tagExample(strings){
    return strings
}
const result1 = tagExample('Hello John!');
console.log(result1);//Hello John!

/*However, you can create tagged templates (that behave like a function) 
using template literals. 
You use tags that allow you to parse template literals with a function.

Tagged template is written like a function definition. 
However, you do not pass parentheses () when calling the literal. 
For example,
 */

function tagExample(strings){
    return strings
}
const result2 = tagExample `Hello John!`;
console.log(result2);//[ 'Hello John!' ]

/*An array of string values are passed as the first argument of a tag function. 
You could also pass the values and expressions as the remaining arguments. 
For example, */

const name3 = 'Ali';
const greet = true;

function tagExample3(strings, nameValue){
    let str6 = strings[0];//Hello
    let str7 = strings[1];//, How are you?

    if(greet){
        return `${str6}${nameValue}${str7}`;
    }
}

// creating tagged literal
// passing argument name
const result3 = tagExample3`Hello ${name3}, How are you?`;
console.log(result3);//Output: Hello Ali, How are you?

/*In this way, you can also pass multiple arguments in the tagged template. */
