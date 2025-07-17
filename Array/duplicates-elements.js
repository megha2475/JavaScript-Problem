//Program to find the duplicate elements in an array.

let arr = [2,9,0,2,1,4,3,5,2,8];
let duplicates = [];

for(let i=0;i<arr.length;i++){
    let isDuplicate = false;
    
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            isDuplicate = true;
            break;
        }
    }
    
    let alreadyAdded = false;
    for(let k=0;k<duplicates.length;k++){
        if(duplicates[k]==arr[i]){
            alreadyAdded = true;
            break;
        }
    }

if(isDuplicate==true&&!alreadyAdded){
    duplicates.push(arr[i])
    // console.log(arr[i])
}

}
console.log(duplicates);
