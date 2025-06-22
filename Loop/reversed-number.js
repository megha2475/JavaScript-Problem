// program to reverse the given number


 let num = parseInt(prompt('Enter the number:'));
 let digit,rev = 0;
 
 while(num!=0){
    digit = num%10;
    rev = rev*10 + digit;
    num = (num-digit)/10;
 }
console.log('Reversed number:',rev);
