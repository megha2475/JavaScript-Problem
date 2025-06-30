//Extract the first character of each string.

let str = ["cat", "dog", "rabbit"];
let res = str.map((word)=>word.slice(0,1));
let res = str.map((word)=>word[0]);
console.log(res);
