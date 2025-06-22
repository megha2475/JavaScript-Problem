//Program to Count how many times a digit appears in a number.

 let num = parseInt(prompt('Enter the number:'));
 let value = parseInt(prompt('Enter the value:'));
 let digit,count = 0;
 
 while(num!=0){
    digit = num%10;
    if(digit == value){
        count++;
    }
    num = (num-digit)/10;
 }
 console.log("Count:",count);
