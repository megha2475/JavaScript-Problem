// Convert all lowercase letters to uppercase (without using built-in functions).

let str = 'helooi';
let result = '';

for(let i=0;i<str.length;i++){
    let code = str.charCodeAt(i);
    
    if(code>=97 && code<=122){
        result += String.fromCharCode(code-32);
    }else{
        result += str[i];
    }
}
console.log(result);
