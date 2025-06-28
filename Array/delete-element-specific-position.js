//Program to delete an element from a specific position in an array.

let arr = [4,2,1,9,5];
let pos = parseInt(prompt("Enter the position:"));

if(pos<=arr.length&&pos>0){
    for(i=pos-1;i<arr.length;i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    
    console.log(arr);
}else{
    console.log("Invalid position");
}
