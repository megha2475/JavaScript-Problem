//Program to find the second largest element in the array.

let arr = [4,2,1,7,5,3],largest = 0,secondlargest;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
    }else if(largest!=secondLargest && arr[i]>secondLargest){
        secondLargest = arr[i];
    }
}
console.log("Second largest number:",secondLargest);

