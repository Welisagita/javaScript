function sum(){
    let c = 0;
    function increaseSum(){
        return c = c + 1;
    }
    return increaseSum;
}

const v = sum()
let c = 5

console.log(v());
console.log(v());

console.log(c);