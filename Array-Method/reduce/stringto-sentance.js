//Join all strings in an array into a sentence

let str = ["Hello", "world", "!"];
let res = str.reduce((accu,value)=>accu+" "+value);
console.log(res);
