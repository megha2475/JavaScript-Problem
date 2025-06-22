//Program to find the product of digits in a number.

 let num = parseInt(prompt('Enter the number:'));
 let digit,product = 1;
 
 while(num!=0){
     digit = num%10;
     product *= digit;
     num = (num-digit)/10;
 }
 console.log('Product:',product);
