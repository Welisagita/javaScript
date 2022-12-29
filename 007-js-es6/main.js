class Person {
  constructor(name){
      this.name = name;
      this.occupation = 'unemployed';
  }
  greet(){
      console.log(`Hello ${this.name}`)
  }
}

class Student extends Person {
  constructor(name){
      super(name);
      this.occupation = 'Student';
  }
  greet(){
      console.log(`Hello student ${this.name}`);
      console.log(`occupation: ` + this.occupation);
  }
}

let student3 = new Student('Dony');
student3.greet();

/*Output:
Hello student Dony
occupation: Student */