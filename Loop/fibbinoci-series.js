// program to print the fibbinoci numbers from 1 to 100


let num = parseInt(prompt('Enter the number:'));
let initial = 0,previous = 1,fibbinoci;

console.log('Fibbinoci series:');
for(let i=1;i<num;i++){
    console.log(initial);
    fibbinoci = initial+previous;
    initial = previous;
    previous = fibbinoci;
}
console.log(previous);
