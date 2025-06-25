//Program to find the average of all elements in an array.
   
let arr = [3,9,1,4,6],sum = 0,avg;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
avg = sum/arr.length;
console.log('Average:',avg);
    
