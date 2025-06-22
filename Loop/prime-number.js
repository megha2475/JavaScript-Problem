//Program to check if a number is prime number


let num = parseInt(prompt('Enter a number:'));
let flag = 0;

for(let i=2;i<num/2;i++){
    if(num%2==0){
        flag = 1;
        break;
    }
}
if(flag==0){
    console.log('Number is prime:',num);
}else{
    console.log('Number is not a prime');
}
