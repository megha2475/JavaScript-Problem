//Progarm to find the second smallest and second largest element.

let arr = [2,9,6,1,4,5];
let smallest = arr[0],secondSmallest;

for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        secondSmallest = smallest;
        smallest = arr[i];
    }else if(smallest!=secondSmallest && arr[i]<secondSmallest){
        secondSmallest = arr[i];
    }
}
console.log(secondSmallest);
console.log(smallest);
