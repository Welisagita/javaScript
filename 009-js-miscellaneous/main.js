const currentDate = new Date();
const date10 = currentDate.getDate();
const month10 = currentDate.getMonth();
const year10 = currentDate.getFullYear();

let monthDateYear = (month10+1) + '/' + date10 + '/' + year10;
console.log(monthDateYear);