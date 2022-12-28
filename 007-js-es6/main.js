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

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');


// looping through WeakMap
for (let i of weakMap) {

    console.log(i);  // TypeError
}

/*JavaScript Map and WeakMap were introduced in ES6. 
Some browsers may not support their use. 

To learn more, visit JavaScript Map support and JavaScript WeakMap support. */