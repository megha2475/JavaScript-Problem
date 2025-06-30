//Program to find the maximum product of two elements in the array.

let arr = [-2,9,-6,1,-9,4,5],temp;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

let largest = arr[arr.length-1]*arr[arr.length-2];
let smallest = arr[0]*arr[1];

if(largest > smallest){
    let result = largest;
}else{
    result = smallest;
}
// console.log(Math.max(largest,smallest));
console.log(result);
