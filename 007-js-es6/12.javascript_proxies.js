//JavaScript Proxies

/*In JavaScript, 
proxies (proxy object) are used to wrap an object 
and redefine various operations into the object such as 
reading, insertion, validation, etc. 
Proxy allows you to add custom behavior to an object or a function.
*/

//=============== Creating a Proxy Object ============
/*The syntax of proxy is:*/

new Proxy(target, handler);

/*Here,

1. new Proxy() - the constructor.

2. target - the object/function which you want to proxy

3. handler - can redefine the custom behavior of the object

For example, */

let student1 = {
    age: 24,
    name: 'Felix'
}

const handler = {
    get: function(obj, prop){
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);
console.log(proxy.name);//Felix
console.log(proxy.age);//24
console.log(proxy.class);//property does not exist


/*Here, the get() method is used to access the object's property value.
 And if the property is not available in the object, 
 it returns property does not exist.

As you can see, 
you can use a proxy to create new operations for the object. 
A case may arise when you want to check if an object has a particular key 
and perform an action based on that key. In such cases, proxies can be used.

You can also pass an empty handler. 
When an empty handler is passed, 
the proxy behaves as an original object. For example, */

let student = {
    name: 'Ali',
    age: 21
  }
  
  const handler1 = {};
  const proxy1 = new Proxy(student, {});
  
  console.log(proxy1);//{ name: 'Ali', age: 21 }
  console.log(proxy1.name);//Ali


//=============== Proxy handlers ==================================
/*Proxy provides two handler methods get() and set(). */

/*get() handler
The get() method is used to access the properties of a target object. 
For example, */

let student2 = {
    name:'Andy',
    age: 20
  }
  
  const handler2 = {
    get (obj, prop){
        return obj[prop];
    }
  }
  
  const proxy2 = new Proxy(student2, handler2);
  console.log(proxy2);// { name: 'Andy', age: 20 }
  console.log(proxy2.name);// Andy

/*Here, the get() method takes the object and the property as its parameters.*/

/*set() handler
The set() method is used to set the value of an object. 
For example, */

let student3 = {
    name: 'Gaby'
  }
  
  let setNewValue = {
    set:function(obj, prop, value){
  
        obj[prop] = value;
        return;
    }
  }
  let person3 = new Proxy(student3, setNewValue);
  
  person3.age = 23;
  console.log(person3);//{ name: 'Gaby', age: 23 }

  /*Here, a new property age is added to the student object. */


  //========================= Uses of Proxy ==========================
  /*1. For Validation
You can use a proxy for validation. 
You can check the value of a key and perform an action based on that value.

For example,*/

let student4 ={
    name: 'Sara',
    age: 21
}

const handler4 = {
    get(obj, prop){
        if(prop == 'name'){
            return obj[prop];
        }else {
            return 'Not Allowed'
        }
    }
}

const proxy4 = new Proxy(student4, handler4);
console.log(proxy4.name);// Sara
console.log(proxy4.age);// Not Allowed

/*Here, only the name property of the student object is accessible. 
Else, it returns Not allowed. */


/*2. Read Only View of an Object
There may be times when you do not want to let others make changes in an object. 
In such cases, you can use a proxy to make an object readable only. 
For example, */

let student5 = {
    name: 'Anto',
    age: 19
}

const handler5 = {
    set:function(obj, prop, value){
        if(obj[prop]){
            console.log('Read only');
        }
    }
};

const proxy5 = new Proxy(student5, handler5);

proxy5.name = 'Anto'; // Read only
proxy5.age = 34; // Read only

/*In the above program, 
one cannot mutate the object in any way.

If one tries to mutate the object in any way, 
you'll only receive a string saying Read Only. */


/*3. Side Effects
You can use a proxy to call another function when a condition is met. 
For example, */

const myFunction = () =>{
    console.log('execute this function');
}

const handler6 = {
    set: function(target, prop, value){
        if(prop === 'name' && value === 'Jack'){
            myFunction();
        }
        else {
            console.log('Can only access name property');
        }
    }
}

const proxy6 = new Proxy({}, handler6);

proxy6.name = 'Jack';// execute this function
proxy6.age = 21;// Can only access name property

 /*JavaScript proxy was introduced from the version of JavaScript ES6. 
 Some browsers may not fully support its use.  */


 