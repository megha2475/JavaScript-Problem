//Program to find the largest digit in a number

let num = parseInt(prompt('Enter the number:'));
let digit,maxValue = 0;

while(num!=0){
    digit = num%10;
    if(digit>maxValue){
        maxValue = digit;
    }
    num = (num-digit)/10;
}
console.log("Maximum value in a number:",maxValue);
