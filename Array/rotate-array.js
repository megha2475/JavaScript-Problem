//Program to rotate an array to the left by k positions.

let arr = [1,2,3,4,5];
let pos = 2,array = [],i;

for(i=pos-1;i<arr.length;i++){
    array[array.length] = arr[i];
}
for(i=0;i<pos-1;i++){
    array[array.length] = arr[i];
}
console.log('Rotated array:',array);
