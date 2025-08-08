Program to find the duplicate elements in an array.

let arr = [3,1,7,2,1,7];

for(let i=0;i<arr.length;i++){
    let alreadyAdded = false;
    
    for(let k=0;k<i;k++){
        if(arr[k]==arr[i]){
            alreadyAdded = true;
            break;
        }
    }
    
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log(arr[i]);
        }
    }
}
