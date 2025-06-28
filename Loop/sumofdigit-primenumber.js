//Program to print the sum of only the prime digits of a number.

let num = parseInt(prompt("Enter a number:"));
let digit,sumOfDigit = 0,temp = num;

while(temp!=0){
    digit = temp%10;
    sumOfDigit += digit;
    temp = (temp-digit)/10;
}
let flag = 0;
for(let i=2;i<=sumOfDigit/2;i++){
    if(sumOfDigit%i==0){
        flag = 1;
        break;
    }
}
if(flag==0){
    console.log("sum of digit is prime");
}else{
    console.log("sum of digit is not prime");
}
