//Program to find the minimum value in an array

let arr = [3,9,1,4,6],minValue = arr[0];    
for(let i=0;i<arr.length;i++){
    if(arr[i]<minValue){
        minValue = arr[i];
    }
}
  console.log('Minimum value',minValue);  
