//Count the total number of characters in an array of strings.

let str = ["cat", "elephant", "dog"];
let res = str.reduce((accu,val)=>accu+val.length,0);
console.log(res);
