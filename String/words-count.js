//Count the number of words in a string (words separated by spaces).

let str = 'hello this is js';
let count = 0;

for(let i=0;i<str.length;i++){
    if((str[i]!=' '&&i==0)||(str[i]!=' '&&str[i-1]==' ')){
        count++;
    }
}
console.log(count);
