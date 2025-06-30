//Flatten a 2D array.

let arr = [[1, 2], [3, 4], [5]];
let res = arr.reduce((accu,curr)=>accu.concat(curr),[]);
console.log(res);

