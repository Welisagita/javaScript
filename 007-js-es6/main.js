class Person {
  constructor (name){
      this.name = name;
  }

  get personName (){
      return this.name;
  }

  set personName(x){
      this.name = x;
  }
}

let person5 = new Person('Charlie');
console.log(person5.name);//Output: Charlie

person5.personName = 'Sara';
console.log(person5.name);//Output: Sara