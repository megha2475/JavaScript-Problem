//Program to Check if a number is a perfect number (sum of its divisors = number)

let num = parseInt(prompt('Enter the number:'));
let original = num,divisorSum = 0;

for(let i=1;i<num;i++){
    if(num%i==0){
        divisorSum += i;
    }
}
if(original == divisorSum){
    console.log('Number is a perfect number:',num);
}else{
    console.log('Number is not perfect');
}
