//Program to find the second largest digit in a number.

let num = parseInt(prompt('Enter the number:'));      
let digit,maxValue = 0,secondmaxValue;    
    while(num!=0){
        digit =num%10;
        if(digit>maxValue){
            secondmaxValue = maxValue;
            maxValue = digit;
        }else if(secondmaxValue != maxValue && digit>secondmaxValue){
            secondmaxValue = digit;
        }
        num = (num-digit)/10;
    }
    
  console.log('Largest number:',maxValue);
  console.log("Second largets number",secondmaxValue);
