//Program to reverse a number using loop


let num = parseInt(prompt('Enetr the number:'));
let digit,reverse = 0;

while(num!=0){
    digit = num%10;
    reverse = reverse*10+digit;
    num = (num-digit)/10;
}
console.log('Result:',reverse);
