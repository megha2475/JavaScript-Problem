//Check if a string is a palindrome.

let str = 'hello';
let reverse = '';

for(let i=str.length-1;i>=0;i--){
    reverse += str[i];
}
if(str==reverse){
    console.log('string is palindrome');
}else{
    console.log('string is not a palindrome');
}
