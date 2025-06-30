//Program to insert an element at a specific position in an array.

let pos = 2,num = 4,arr = [3,1,8,2,9];

if(pos<=arr.length){
    for(let i=arr.length;i>pos;i--){
        arr[i] = arr[i-1];
        // arr.length++;
    }
    arr[pos] = num;
    // arr.length++;
    console.log(arr);
}else{
    console.log('not a valid conditions');
}
