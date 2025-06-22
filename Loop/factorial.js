//Program to find the factorial of a number

let num = parseInt(prompt('Enter the number:'));
let factorial = 1,digit;

for(let i=1;i<=num;i++){
    factorial = factorial*i;
}
console.log("Factorial:",factorial);
