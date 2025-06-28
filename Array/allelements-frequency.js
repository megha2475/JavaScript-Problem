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
