//Program to check  anumber has repeated elements.

let num = parseInt(prompt("Enter the number:"));
let digit,digitCount=[],isRepeated=false;

for(let i=0;i<10;i++){
    digitCount[i] = 0;
}

while(num!=0){
    digit = num%10;
    digitCount[digit]++;
    if(digitCount[digit]>1){
        isRepeated = true;
        break;
    } 
    num = (num-digit)/10;
}
if(isRepeated==true){
    console.log("repeated digit exist");
}else{
    console.log("no repeated digits");
}
