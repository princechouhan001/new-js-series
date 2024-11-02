const fullName = "Pankaj Dabgar";
const id = 2180;
// console.log(`Hello my name is ${fullName} and my id is ${id}.`);

let heroName = new String('Deadpool-Wolverine-Thor-Hulk');
// console.log(heroName[2]);

let newString = heroName.substring(0,3);
// console.log(newString);

let newString1 = heroName.slice(-8,3);
// console.log(newString1);

let newString2 = "    Demon Slayer    ";
// console.log(newString2);
// console.log(newString2.trim());

const url = "https://pankaj.com/pankaj dabgar"
console.log(url.replace(" ", "-"));
console.log(url.includes("pankaj"));
console.log(url.includes("nothing"));
console.log(heroName.split("-",6));
