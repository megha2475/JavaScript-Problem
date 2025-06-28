//Program to print all three-digit numbers where:The first digit + last digit == middle digit

let firstDigit,middileDigit,lastDigit;

for(let num=100;num<=999;num++){
     firstDigit = Math.floor(num/100);
     middileDigit = Math.floor((num/10)%10);
     lastDigit = num%10;
    
    if(firstDigit+lastDigit==middileDigit){
        console.log(num);
    }
}
