//Convert all numbers to negative

let num = [1, -2, 3, -4];
let neg = num.map((num)=>num<0?num:-num);
console.log(neg);

or
let num = [1, -2, 3, -4];
let neg = num.map((num)=>{
    if(num>0){
        return -num;
    }else{
        return num;
    }
});
