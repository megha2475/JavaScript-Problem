//Calculate the average of numbers in an array
let arr = [10, 20, 30];
let res = arr.reduce((accu,val)=>accu+val,0)/arr.length;
console.log(res);

or 

let arr = [10, 20, 30];
let sum = arr.reduce((accu,val,arr)=>accu+val,0);
let res = sum/arr.length;
console.log(res);
