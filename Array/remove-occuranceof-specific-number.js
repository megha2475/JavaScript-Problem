//Program to remove all occurrences of a given number from an array.

let arr = [3,2,1,5,3,6,9,3];
let target = parseInt(prompt('Enter the number:'));

for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        for(let k=i;k<arr.length;k++){
            arr[k] = arr[k+1];
        }
        arr.length--;
        i--;
    }
}
console.log(arr);
