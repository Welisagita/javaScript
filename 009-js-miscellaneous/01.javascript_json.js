//JavaScript and JSON

/*JSON stands for Javascript Object Notation. 
JSON is a text-based data format that is used to store and transfer data. 
For example, */

//JSON Syntax
/*
{
    "name" : "Antonio",
    "age" : 27,
    "gender" : "male"
}
*/
/*In JSON, the data are in key/value pairs separated by a comma ,.

JSON was derived from JavaScript. 
So, the JSON syntax resembles JavaScript object literal syntax. 
However, the JSON format can be accessed and be created by other programming languages too.

Note: JavaScript Objects and JSON are not the same. 
You will learn about their differences later in this tutorial. */


//================== JSON Data ==================
/*JSON data consists of key/value pairs similar to JavaScript object properties. 
The key and values are written in double quotes separated by a colon :. For example,

// JSON data
"name": "John"

Note: JSON data requires double quotes for the key.*/

//=================== JSON Object =================
/*The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,

// JSON object
{ "name": "John", "age": 22 }
 */


//================= JSON Array ============================
/*JSON array is written inside square brackets [ ]. For example,*/

//JSON Array
["apple", "Manggo", "Banana"]

//JSON Array Containing Object
[
    {"name" : "Bambang", "age": 21},
    {"name" : "Sara", "age": 25,},
    {"name" : "Budi", "age": 20}
]

/*Note: JSON data can contain objects and arrays. 
However, unlike JavaScript objects, JSON data cannot contain functions as values. */

//========================= Accessing JSON Data =======================
/*You can access JSON data using the dot notation. For example, */

//JSON Object
const data = {
    "name" : "John 5",
    "age" : 27,
    "hobby" :{
        "reading" : true,
        "gaming" : false,
        "sport" : "football"
    },
    "class" : ["Javascript", "HTML", "CSS"]
}

//accessing JSON object
console.log(data.name); //John 5
console.log(data.hobby); //{ reading: true, gaming: false, sport: 'football' }
console.log(data.hobby.sport); //football
console.log(data.class[1]); //HTML

/*We use the . notation to access JSON data. Its syntax is: variableName.key
You can also use square bracket syntax [] to access JSON data. For example, */

const student = {
    "name" : "Sara",
    "age" : 22
}

//Accessing JSON Object
console.log(student["name"]);// Sara


//================= JavaScript Objects VS JSON =========================
/*Though the syntax of JSON is similar to the JavaScript object, 
JSON is different from JavaScript objects.*/

/*
JSON	!==  JavaScript Object

JSON, The key in key/value pair should be in double quotes.	
JavaScript, The key in key/value pair can be without double quotes.

JSON cannot contain functions.	
JavaScript objects can contain functions.

JSON can be created and used by other programming languages.	
JavaScript objects can only be used in JavaScript.*/


//============= Converting JSON to JavaScript Object =====================
/*You can convert JSON data to a JavaScript object using the built-in JSON.parse() function. 
For example,*/

//json object
const jsonData = '{"name":"Ali", "age":31}';
//converting to javaScript object
const obj = JSON.parse(jsonData);

console.log(obj.name);// Ali

//============ Converting JavaScript Object to JSON ========================
/*You can also convert JavaScript objects to JSON format 
using the JavaScript built-in JSON.stringify() function. For example,*/

//JavaScript object
const jsData = {"name":"Donny", "age":21}
//converting to JSON
const obj1 = JSON.stringify(jsData);

console.log(obj1);//{"name":"Donny","age":21}

//==================== Use of JSON ================================
/*JSON is the most commonly used format for transmitting data (data interchange) 
from a server to a client and vice-versa. 
JSON data are very easy to parse and use. 
It is fast to access and manipulate JSON data as they only contain texts.

JSON is language independent. 
You can create and use JSON in other programming languages too.*/


