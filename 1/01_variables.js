const num = 879413;
let fName = "Pankaj"
var email = "pankajdabgar@mail.com"
city = "Udaipur"; //Avoid using this type, this is only for understanding like js also can give us env. to define a var like this.

// num = 46213; we can't change const value.

fName = "Fusion";
email = "xyz@mail.com";
city = "Jaipur";

/* We have to avoid of using var
Because it cause issues in Block Scope and Functional Scope.*/

console.log(fName);
console.table([fName, email, city]);
