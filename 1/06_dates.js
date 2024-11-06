let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myDate1 = new Date(2023, 2, 25, 5, 4,58,8);
// let myDate1 = new Date("2023-01-25");
let myDate1 = new Date("01-12-24");
console.log(myDate1.toLocaleString());

let myTimeStamp = Date.now()

console.log((myTimeStamp));
console.log((myDate1.getTime()));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


let date = newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(date);

