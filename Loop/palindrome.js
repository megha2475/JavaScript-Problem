// Program to check if a number is palindrome


let num = parseInt(prompt('Enter the number:'));
let digit,original = num,rev = 0;
while(num!=0){
    digit = num%10;
    rev = rev*10+digit;
    num = num/10;
}
if(rev == original){
    console.log("Number is palindrome:",original);
}else{
    console.log('Number is not a palindrome');
}
