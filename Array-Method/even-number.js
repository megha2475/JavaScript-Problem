//Replace even numbers with the string "even"

let arr = [1, 2, 3, 4];
let res = arr.map((num)=>num%2==0 ? 'even':num);
console.log(res);
