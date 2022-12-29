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

proxy6.name = 'Jack';
proxy6.age = 21;