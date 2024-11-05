const bal = new Number(100);
// console.log(bal);
// console.log(bal.toString());
// console.log(bal.toString().length);
// console.log(bal.toFixed(2)); // Returns a string representing a number in fixed-point notation. 

const otherNum = 1235.56431;
// console.log(otherNum.toPrecision(4));

const hund = 1000000;
// console.log(hund.toLocaleString('en-IN'));

//-------------Maths-----------------
// console.log(Math);
// console.log(Math.abs(-54));
// console.log(Math.round(54.665));
// console.log(Math.ceil(4.665));
// console.log(Math.floor(4.665));
// console.log(Math.sqrt(5));
// console.log(Math.min(5,7,8,9,1));
// console.log(Math.max(5,7,8,9,1));
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max - min +1))+ min);
