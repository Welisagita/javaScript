//============= JavaScript Set and WeakSet ============
/*The JavaScript ES6 has introduced two new data structures, i.e Set and WeakSet.

Set is similar to an array that allows us to store multiple items 
like numbers, strings, objects, etc. 
However, unlike an array, a set cannot contain duplicate values. */

//============= Create JavaScript Set =================
/*To create a Set, you need to use the new Set() constructor. 
For example,*/

const set1 = new Set();
console.log(set1);//Output: Set(0) {}

const set2 = new Set([1, 'hello', {count:true}]);
console.log(set2);//Output: Set(3) { 1, 'hello', { count: true } }

/*When duplicate values are passed to a Set object, 
the duplicate values are excluded. */

const set3  =new Set([1, 1, 2, 2]);
console.log(set3)//Output: Set(2) { 1, 2 }


//================ Access Set Elements ========================
/*You can access Set elements using the values() method 
and check if there is an element inside Set using has() method. 
For example, */

const set4 = new Set([1, 2, 3]);
console.log(set4.values());//Output: [Set Iterator] { 1, 2, 3 }

/*You can use the has() method to check if the element is in a Set. 
For example, */

const set5 = new Set([1, 2, 3]);
console.log(set5.has(1));//Output: true


//=============== Adding New Elements ======================

/*You can add elements to a Set using the add() method. 
For example, */

const set6 = new Set([1, 2]);
console.log(set6.values());//Output: [Set Iterator] { 1, 2 }

// adding new elements
set.add(3);
console.log(set6.values());//Output: [Set Iterator] { 1, 2, 3 }

// adding duplicate elements
// does not add to Set
set.add(1);
console.log(set6.values());//Output: [Set Iterator] { 1, 2, 3 }

//========== Removing Elements ===================
/*You can use the clear() and the delete() method to remove elements from a Set.

The delete() method removes a specific element from a Set. For example,*/

const set7 = new Set([1, 2, 3]);
set7.delete(2); 
console.log(set7);//Output: Set(2) { 1, 3 }

/*The clear() method removes all elements from a Set. For example,*/

const set8 = new Set([1, 2, 3]);
console.log(set8.values()); // Set Iterator [1, 2, 3]

// remove all elements of Set
set8.clear();
console.log(set8.values()); // Set Iterator []

//========== Iterate Sets ===========================
/*You can iterate through the Set elements using the for...of loop or forEach() method. 
The elements are accessed in the insertion order. For example,*/

const set9 = new Set([1, 2, 3]);

// looping through Set
for (let i of set9) {
    console.log(i);
}
/*Output
1
2
3 */

//============= JavaScript WeakSet ============================
/*The WeakSet is similar to a Set. 
However, WeakSet can only contain objects 
whereas a Set can contain any data types such as strings, numbers, objects, etc. 
For example,*/

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

/*
When you try to add other data types besides objects, WeakSet throws an error. 
For example,*/

// trying to add string to WeakSet
weakSet.add('hello');

// throws error
// TypeError: Attempted to add a non-object key to a WeakSet
console.log(weakSet);


//==================WeakSet Methods=====================
/*WeakSets have methods add(), delete(), and has(). For example,*/

const weakSet1 = new WeakSet();
console.log(weakSet1); // WeakSet {}

const obj1 = {a:1};

// add to a weakSet
weakSet.add(obj1);
console.log(weakSet1); // WeakSet {{a: 1}}

// check if an element is in Set
console.log(weakSet1.has(obj1)); // true

// delete elements
weakSet.delete(obj1);
console.log(weakSet1); // WeakSet {}

//==============WeakSets Are Not iterable===================
/*Unlike Sets, WeakSets are not iterable. For example,*/

const weakSet2 = new WeakSet({a:1});

// looping through WeakSet
for (let i of weakSet2) {

    // TypeError
    console.log(i);
}



//======================= Mathematical Set Operations ===========================
/*In JavaScript, Set does not provide built-in methods 
for performing mathematical operations such as union, intersection, difference, etc. 
However, we can create programs to perform those operations. */


//Example: Set Union Operation
// perform union operation
// contain elements of both sets
function union(a, b){
    let unionSet = new Set(a);
    for(let i of b){
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result = union(setA, setB);

console.log(result);//Output: Set(5) { 'apple', 'mango', 'orange', 'grapes', 'banana' }

//Example: Set Intersection Operation
// perform intersection operation
// elements of set a that are also in set b
function intersection(setC, setD){
    let intersectionSet = new Set();
    
    for (let i of setD){
        if(setC.has(i)){
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

// two sets of fruits
let setC = new Set(['apple', 'mango', 'orange']);
let setD = new Set(['grapes', 'apple', 'banana']);

let result1 = intersection(setC, setD);
console.log(result1);//Output: Set(1) { 'apple' }


//Example: Set Difference Operation
// perform difference operation
// elements of set a that are not in set b

function difference(setE, setF){
    let differenceSet = new Set(setE);
  
    for (let i of setF){
        differenceSet.delete(i);
    }
    return differenceSet
  }
  // two sets of fruits
  let setE = new Set(['apple', 'mango', 'orange']);
  let setF = new Set(['grapes', 'apple', 'banana']);
  
  let result2 = difference(setE, setF);
  console.log(result2);//Output: Set(2) { 'mango', 'orange' }


//Example: Set Subset Operation
// perform subset operation
// true if all elements of set b is in set a

function subset(setG, setH){
    for(let i of setH){
        if (!setG.has(i)){
            return false;
        }
    }
    return true;
  }
  let setG = new Set(['apple', 'mango', 'orange']);
  let setH = new Set(['orange', 'apple']);
  
  let result3 = subset(setG, setH);
  console.log(result3);//Output: true

  /*JavaScript Sets and WeakSets were introduced in ES6. 
  Some browsers may not support their use. 
  To learn more, visit JavaScript Sets support and JavaScript WeakSets support. */

  





