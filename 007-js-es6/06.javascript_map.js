//JavaScript Map

/*The JavaScript ES6 has introduced two new data structures, i.e Map and WeakMap.

Map is similar to objects in JavaScript that allows us 
to store elements in a key/value pair.

The elements in a Map are inserted in an insertion order. 
However, unlike an object, a map can contain objects, 
functions and other data types as key.*/

//============ Create JavaScript Map ============
/*To create a Map, 
we use the new Map() constructor. For example,*/

const map1 = new Map();
console.log(map1);

//============ Insert Item to Map ==============
/*After you create a map, 
you can use the set() method to insert elements to it. For example,*/


let map2 = new Map();
// insert key-value pair
map2.set('info', {name: 'Budi', age: 21});
console.log(map2);//Output: Map(1) { 'info' => { name: 'Budi', age: 21 } }

/*You can also use objects or functions as keys. 
For example, */

let map3 = new Map();
let obj = {};

map3.set(obj, {name:'jack', age: 19});
console.log(map3);//Output: Map(1) { {} => { name: 'jack', age: 19 } }

//================== Access Map Elements ========================
/*You can access Map elements using the get() method. 
For example, */

let map4 = new Map();
map4.set('info', {name:'Sara', age: 18});
console.log(map4.get('info'));//Output: { name: 'Sara', age: 18 }


//============ Check Map Elements =================
/*You can use the has() method to check if the element is in a Map. 
For example,*/

const set1 = new Set([1, 2, 3]);

let map5 = new Map();
map5.set('info', {name:'Abdul', age: 25});
// check if an element is in Set
console.log(map5.has('info'));//Output: true


//================ Removing Elements =======================
/*You can use the clear() and the delete() method to remove elements from a Map.

The delete() method returns true if a specified key/value pair exists 
and has been removed or else returns false. For example, */

let map6 = new Map();
map6.set('info', {name: 'Agus', age: 23});

map6.delete('address')// false
console.log(map6);//Output: Map(1) { 'info' => { name: 'Agus', age: 23 } }

map6.delete('info');// true
console.log(map6);//Output: Map(0) {}

/*The clear() method removes all key/value pairs from a Map object. 
For example, */

let map7 = new Map();
map7.set('info', {name:'Ali', age: 34});
map7.clear();
console.log(map7);//Output: Map(0) {}

//========================= JavaScript Map Size ===========
/*You can get the number of elements in a Map using the size property. 
For example*/


let map8 = new Map();
map8.set ('info', {name:'Sandra', age: 30});
console.log(map8.size);//Output: 1


//====================== Iterate Through a Map ====================
/*You can iterate through the Map elements using the for...of loop or forEach() method. 
The elements are accessed in the insertion order. For example,*/

let map9 = new Map();
map9.set('name', 'Rino');
map9.set('age', '29');

for(let [key, value] of map9){
    console.log(key + '- ' + value);
}
/*Output
name- Rino
age- 29 */


/*You could also get the same results as the above program 
using the forEach() method. For example, */
let map10 = new Map();
map10.set('name', 'Rino');
map10.set('age', '29');

map10.forEach(function(value, key){
    console.log(key + '- ' + value);
})
/*Output
name- Rino
age- 29 */

//============ Iterate Over Map Keys =======================
/*You can iterate over the Map and get the key using the keys() method. 
For example, */

let map11 = new Map();
map11.set('name', 'Sara');
map11.set('age','24');

for(let key of map11.keys()){
    console.log(key);
}
/*Output
name
age */

//====================== Iterate Over Map Values ===================
/*You can iterate over the Map and get the values using the values() method. 
For example,*/

let map12 = new Map();
map12.set('name', 'Abdul');
map12.set('age','20');

for (let value of map12.values()){
    console.log(value);
}
/*Output
Abdul
20 */


//============= Get Key/Values of Map ===========================
/*You can iterate over the Map and get the key/value of a Map using the entries() method. 
For example, */

let map13 = new Map();
map13.set('name', 'Sandra');
map13.set('age','23');

for (let elem of map13.entries()){
    console.log(`${elem[0]}:${elem[1]}`);
}
/*Output
name:Sandra
age:23 */


/*
JavaScript Map vs Object
Map	                |           Object
-------------------------
Maps can contain objects and other data types as keys. 
Objects can only contain strings and symbols as keys.
-----------------
Maps can be directly iterated and their value can be accessed.	
Objects can be iterated by accessing its keys.
------------------------
The number of elements of a Map can be determined by size property.	
The number of elements of an object needs to be determined manually.
----------------------------------
Map performs better for programs that require the addition or removal of elements frequently.	
Object does not perform well if the program requires the addition or removal of elements frequently. 
*/


//============================ JavaScript WeakMap ========================
/*The WeakMap is similar to a Map. 
However, WeakMap can only contain objects as keys. 
For example,*/

const weakMap = new WeakMap();
console.log(weakMap);

let obj1 = {};
weakMap.set(obj1, 'Hello');
console.log(weakMap);
/*Output
WeakMap { <items unknown> }
WeakMap { <items unknown> }
 */

/*When you try to add other data types besides objects, 
WeakMap throws an error. For example, */

const weakMap1 = new WeakMap()
weakMap1.set('obj', 'hello');    

/*Output:
// throws error
// TypeError: Attempted to set a non-object key in a WeakMap */

//=============== WeakMap Methods ===========================
/*WeakMaps have methods get(), set(), delete(), and has(). 
For example,*/

const weakMap2 = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj2 = {};

// adding object (element) to WeakMap
weakMap.set(obj2, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}

// get the element of a WeakMap
console.log(weakMap.get(obj2)); // hello

// check if an element is present in WeakMap
console.log(weakMap.has(obj2)); // true

// delete the element of WeakMap
console.log(weakMap.delete(obj2)); // true

console.log(weakMap); // WeakMap {} 

//==================== WeakMaps Are Not iterable ============================
/*Unlike Maps, WeakMaps are not iterable. For example,*/

const weakMap3 = new WeakMap();
console.log(weakMap3); // WeakMap {} 

let obj3 = {};

// adding object (element) to WeakMap
weakMap.set(obj3, 'hello');


// looping through WeakMap
for (let i of weakMap) {

    console.log(i);  // TypeError
}

/*JavaScript Map and WeakMap were introduced in ES6. 
Some browsers may not support their use. 

To learn more, visit JavaScript Map support and JavaScript WeakMap support. */



