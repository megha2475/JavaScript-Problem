//Program to count the number of digit in a number


let num = parseInt(prompt('Enter the number:'));
let digit,count = 0;

while(num!=0){
    digit = num%10;
    count++;
    num = (num-digit)/10;
}
console.log('Count is:',count);
