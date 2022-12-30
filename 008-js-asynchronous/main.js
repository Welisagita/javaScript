function greet(name, myFunction){
  console.log('Hello world');
  myFunction(name);
}

function sayName(name){
  console.log('Hi' + ' ' + name);
}

setTimeout(greet, 2000, 'Goku', sayName);
/*Output:
Hello world
Hi Goku */