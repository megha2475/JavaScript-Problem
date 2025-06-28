//Program to rotate an array to the right by k positions.

let arr = [1,2,3,4,5];
let pos = 2,array = [],i;

for(i=pos;i<arr.length;i++){
    array[array.length] = arr[i];
}
for(i=0;i<pos;i++){
    array[array.length] = arr[i];
}
console.log(array);

