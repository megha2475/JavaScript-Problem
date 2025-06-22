//Program to find sum of even numbers between 1 and n

let num = parseInt(prompt("Enter num:"));
let sum = 0;
for(let i=1;i<=num;i++){
    if(i%2==0){
        sum += i;
    }
}
console.log("Sum of even number:",sum);
