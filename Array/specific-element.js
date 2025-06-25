//Program to search a specific element in an array.

let i,arr = [3,9,1,4,6],flag = 0;
let num = parseInt(prompt("Enter the number:"));

for(i=0;i<arr.length;i++){
    if(arr[i]==num){
        flag = 1;
        break;
    }
}
if(flag==1){
    console.log('The position of the number :',i+1);
}else{
    console.log('number not found');
}
    
