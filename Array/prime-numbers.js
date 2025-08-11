Progran to find all prime numbers in the array.

let arr = [4,2,5,9,8,10,7,3];
for(let num=0;num<arr.length;num++){
    let flat = true;
    
    for(let i=2;i<=arr[num]/2;i++){
        if(arr[num]%i==0){
            flat = false;
            break;
        }
    }
    if(flat==true){
        console.log(arr[num]);
    }
}
