//Program to check is a number is an amstrong number


let num = parseInt(prompt('Enter the number:'));
let digit,original = num,amstrong = 0;
while(num!=0){
    digit = num%10;
    amstrong += (digit*digit*digit);
    num = (num-digit)/10;
}
if(original == amstrong){
    console.log('Number is Amstrong number');
}else{
    console.log('Number is not an Amstrong number');
}
