//Program to find the frequency of all elements (without using another array if possible).

let arr = [2,8,1,3,2,8];

for(let i=0;i<arr.length;i++){
    let isCounted = 0;
    
    for(let j=0;j<i;j++){
        if(arr[i]==arr[j]){
            isCounted = 1;
            break;
        }
    }
    if(isCounted == 0){
        let freq = 1;
        
        for(let k=i+1;k<arr.length;k++){
            if(arr[i]==arr[k]){
                freq++;   
            }
        }
         console.log(arr[i],  freq);
    }
}

or

let arr = [1,2,3,4,5,6,7,8,9,10,2,7];
let freq = {};

for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]] += 1;
    }else{
        freq[arr[i]] = 1;
    }
}

console.log(freq);
