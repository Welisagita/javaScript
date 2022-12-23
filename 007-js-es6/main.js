const name3 = 'Ali';
const greet = true;

function tagExample3(strings, nameValue){
    let str6 = strings[0];
    let str7 = strings[1];

    if(greet){
        return `${str6}${nameValue}${str7}`;
    }
}

const result3 = tagExample3`Hello ${name3}, How are you?`;
console.log(result3);