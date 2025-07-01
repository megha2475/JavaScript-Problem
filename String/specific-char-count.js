// Count how many times a specific character appears in a string.

let str = 'helooi';
let char = 'i';
let count = 0;

for(let i=0;i<str.length;i++){
    if(str[i]==char){
        count++;
    }
}
console.log(count);
