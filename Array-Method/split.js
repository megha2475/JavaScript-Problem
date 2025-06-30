//Extract domain names from email addresses

let str = ["user@gmail.com", "admin@yahoo.com"];
let res = str.map((word)=>word.split('@',1));
console.log(res);
