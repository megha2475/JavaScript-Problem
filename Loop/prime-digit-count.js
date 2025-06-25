//Program to count how many priime digits are present in a number.

let num = parseInt(prompt('Enter the number:'));    
let digit,count = 0;
while(num!=0){
    digit = num%10;
    
    let flag = 0;
    for(let i=2;i<=digit/2;i++){
        if(digit%i==0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        count++;
    }
    num = (num-digit)/10;
}
console.log('Count of prime numbers:',count);
