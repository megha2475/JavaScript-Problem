//Count the number of digits in a string.

let str = 'hea1ji7h3';
let count = 0;

for(let i=0;i<str.length;i++){
    if(str[i]>='0'&&str[i]<='9'){
        count++;
    }
}
console.log(count);
