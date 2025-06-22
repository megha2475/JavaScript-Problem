// Program to print all prime numbers from 1 to 100

console.log('Prime numbers are:');
for(let num=1;num<=100;num++){
    let flag = 0;
    for(let i=2;i<num/2;i++){
        if(num%i==0){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        console.log(num);
    }
}
