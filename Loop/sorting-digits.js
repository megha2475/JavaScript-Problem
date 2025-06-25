//Program to check if the digits of a number are in ascending order.

let num = parseInt(prompt('Enter the number:'));
let digit,isAscending = 0,firstDigit,secondDigit;

while(num!=0){
    pair = num%100;
    firstDigit = pair%10;
    secondDigit = (pair-firstDigit)/10;
    
    if(firstDigit<secondDigit){
        isAscending = 1;
        break;
    }
    num = (num-firstDigit)/10;
}
    
    if(isAscending == 0){
        console.log("Digits are in ascending order");
    }else{
        console.log("Not in ascending order");
    }
    
