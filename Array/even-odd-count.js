//Program to count the total number of even and odd numbers in an array.

let arr = [4,2,1,9,5,7],evenCount = 0,oddCount = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evenCount++;
    }else{
        oddCount++;
    }
}
console.log('Even count:',evenCount)
console.log("Odd count:",oddCount)
