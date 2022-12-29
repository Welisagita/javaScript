function* generatorFunc(){
  yield 10;
  yield 20;
  yield 30;
}

const obj = generatorFunc();

for(let value of obj){
  console.log(value);
}
