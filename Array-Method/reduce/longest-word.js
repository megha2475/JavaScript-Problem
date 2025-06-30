//Find the longest word.

let str = ["hi", "hello", "elephant", "yes"];

let longest = str.reduce((accu,word)=>word.length>accu.length?word:accu);
console.log(longest);
