//Program to find the maximum value in an array.
    
let arr = [3,9,1,4,6],maxValue = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>maxValue){
        maxValue = arr[i];
    }
}
console.log('Maximum value:',maxValue);
