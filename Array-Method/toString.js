//Convert array of numbers to strings

let arr = [1,2,3,4,5];
let str = arr.map((num)=>num.toString());
console.log(str);

or

let arr = [1,2,3,4,5];
let str = arr.map(function(num){
    return String(num);
})
