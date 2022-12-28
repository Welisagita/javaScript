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