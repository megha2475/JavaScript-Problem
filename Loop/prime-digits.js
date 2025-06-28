//Program to print prime digits in a number.

let num = parseInt(prompt("Enter a number:"));
let digit;

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
        console.log("Prime digits are:",digit);
    }
    num = (num-digit)/10;
}
