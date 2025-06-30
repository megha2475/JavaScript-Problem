//Find the maximum number in an array

let arr = [5, 12, 8, 20, 3];
let max = arr.reduce((accu,value)=>accu<value ?value:accu,0);
console.log(max);
