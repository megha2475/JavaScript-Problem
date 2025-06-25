//Program to count the frequency of a particular number in the array.

let arr = [1,2,1,9,5,1],freq = 0;
let num = parseInt(prompt("Enter the number:"));

for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        freq++;
    }
}
console.log("Frequency of the number:",freq);
