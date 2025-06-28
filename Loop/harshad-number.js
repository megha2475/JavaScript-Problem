//Program to check whether a number is a Harshad number (number divisible by sum of its digits).

let num = parseInt(prompt("Enter a number:"));
let digit,sumOfDigit = 0,temp = num;

while(temp!=0){
    digit = temp%10;
    sumOfDigit += digit;
    temp = (temp-digit)/10;
}
if(num%sumOfDigit==0){
    console.log("NUmber is an harshad number");
}else{
    console.log("Number is not an harshad number");
}
