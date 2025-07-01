// Count the number of vowels in a string.

let str = 'helloiqu';
let count = 0;

for(let i=0;i<str.length;i++){
    if('aeiou'.includes(str[i])){
        count++;
    }
}
console.log(count);
