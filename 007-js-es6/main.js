const person7 = {
  name7: 'Jack',
  age7: 26,
  hobbies7: {
      read7: true,
      playGame7: true
  }
}
// nested destructuring 
const {name7, hobbies7: {read7, playGame7}} = person7;

console.log(name7); // Jack
console.log(read7); // true
console.log(playGame7); // true

