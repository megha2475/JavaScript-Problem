//Program to Check if a number is Strong (sum of factorials of digits = number).

let num = parseInt(prompt('Enter the number:'));
let digit,original = num,factSum =0;

while(num!=0){
    digit = num%10;
    
    let factorial = 1;
    for(let i=1;i<=digit;i++){
        factorial = factorial*i;
    }
    factSum += factorial;
    num = (num-digit)/10;
}
if(original == factSum){
    console.log('Number is strong:',original);
}else{
    console.log('NUmber is not strong');
}
