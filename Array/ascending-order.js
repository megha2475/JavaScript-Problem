//Program to find sort an array in ascending order.

let arr = [4,2,1,9,5,7];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
 }
 console.log(arr);


