function* generatorFunc(){
    yield 100;
    yield 200;
}

const generator5 = generatorFunc();

console.log(generator5.next());
console.log(generator5.throw(new Error('Error occured.')));
console.log(generator5.next());