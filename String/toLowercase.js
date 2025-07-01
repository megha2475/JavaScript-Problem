Convert all uppercase letters to lowercase (without using built-in functions).

let str = 'GETIANJ';
let result ='';

for(let i=0;i<str.length;i++){
    let code = str.charCodeAt(i);
    
    if(code>=65 && code<=90){
        result += String.fromCharCode(code+32);
    }else{
        result += str[i];
    }
}
console.log(result);
