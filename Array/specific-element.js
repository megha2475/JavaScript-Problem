//Program to search a specific element in an array.

let i,arr = [3,9,1,4,6];
let num = parseInt(prompt("Enter the number:"));
let flat = false;

for(let i=0;i<arr.length;i++){
    if(num==arr[i]){
        flat = true;
        console.log('Tne position is :',i+1);
        break;
    }
}
if(flat==false){
    console.log('Number is not founded');


