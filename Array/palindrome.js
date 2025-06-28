//Program to check if the array is a palindrome (reads the same forward and backward).

let arr = [1,2,3,2,1],rev = [];

for(let i=arr.length-1;i>=0;i--){
    rev[rev.length] = arr[i];
}
let isPalindrome = true;

for(let i=0;i<arr.length;i++){
    if(arr[i]!=rev[i]){
        isPalindrome = false;
        break;
    }
}
if(isPalindrome==true){
    console.log('array is palindrome');
}else{
    console.log("array is not a palindrome");
}
