//Program to find the smallest digit in a number.
    
let num = parseInt(prompt('Enter the number:'));     
let digit,minValue = 9;

while(num!=0){
    digit = num%10;
    if(digit<minValue){
        minValue = digit;
    }
    num = (num-digit)/10;
}
console.log('Smallest digit:',minValue);
    
