//Program to shift all zeros to the front while maintaining the order of other elements.

let arr = [9,0,3,2,0,1],index = arr.length-1;

for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!=0){
        arr[index] = arr[i];
        index--;
    }
}
for(let i=0;i<=index;i++){
    arr[i] = 0;
}
console.log(arr);

