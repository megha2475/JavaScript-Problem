//Program to find the number of positive, negative, and zero elements.

let arr = [3,9,1,2,0,4,5,6,0],sumOfEven = 0,sumOfOdd = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        sumOfEven += arr[i];
    }else{
        sumOfOdd += arr[i];
    }
}
let difference = Math.abs(sumOfEven-sumOfOdd);
console.log(sumOfEven);
console.log(sumOfOdd);
console.log(difference);
