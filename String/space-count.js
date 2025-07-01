//Count the number of spaces in a string.

let str = 'hello this is js compiler';
let count = 0;
for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        count++;
    }
}
console.log(count);
