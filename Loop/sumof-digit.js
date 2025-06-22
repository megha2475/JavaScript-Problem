//Program to find the sum of digits of a number


let num = parseInt(prompt('Enter the number:'));
let digit,digitSum = 0;

while(num!=0){
    digit = num%10;
    digitSum += digit;
    num = (num-digit)/10;
}
console.log('Sum of digit:',digitSum);

