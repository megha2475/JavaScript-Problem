//Program to print all numbers between 1 to 1000 where the sum of digits is divisible by 5.

for(let num=1;num<=1000;num++){
    let digit,sumOfDigit = 0,temp = num;
    
    while(temp!=0){
        digit = temp%10;
        sumOfDigit += digit;
        temp = (temp-digit)/10;
    }
    if(sumOfDigit%5==0){
        console.log(num);
    }
}
