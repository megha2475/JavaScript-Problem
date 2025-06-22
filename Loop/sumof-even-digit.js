//Program to find the sum of only even digits in a number

let num = parseInt(prompt('Enter the number:'));
let digit,evenSum = 0;
while(num!=0){
    digit = num%10;
    if(digit%2==0){
        evenSum += digit;
    }
    num = (num-digit)/10;
}
console.log('Sum of even digit:',evenSum);
