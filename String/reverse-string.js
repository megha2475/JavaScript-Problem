//Reverse a string using a loop.

let str = 'helloo';
let res = '';

for(let i=str.length-1;i>=0;i--){
    res += str[i];
}
console.log(res);
