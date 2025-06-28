//Program to find the element that appears only once in an array where every other element appears twice.

let arr = [3,2,1,5,2,6,9,3];

for(let i=0;i<arr.length;i++){
    let exist = 0;
    for(let j=0;j<arr.length;j++){
        if(i!=j&&arr[i] == arr[j]){
            exist=1;
            break;
        }
    }
    if(exist==0){
    console.log("unique number:",arr[i]);
}

}
