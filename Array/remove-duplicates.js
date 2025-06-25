//Program to remove duplicate elements from an array.

let arr = [1,2,5,9,5,1]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            for(let k=j;k<arr.length;k++){
                arr[k] = arr[k+1];
            }
            arr.length--;
            j--;
        }
    }
}
console.log(arr);
