//Program  to shift all zeros to the end while maintaining the order of other elements.

let arr = [9,0,3,2,0,1],index = 0;

for(let i=0;i<arr.length;i++){
  if(arr[i]!=0){
      arr[index] = arr[i];
      index++;
  }
}
for(i=index;i<arr.length;i++){
    arr[i] = 0;
}
console.log(arr);
