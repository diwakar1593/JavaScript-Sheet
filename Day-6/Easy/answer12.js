/*
Use for loop to iterate from 0 to 100 and print the sum of all evens and the
sum of all odds. Print sum of evens and sum of odds as array
[2550, 2500]

*/

let even = 0;
let odd = 0;

for(let i=0; i<=100; i++){
    if(i%2==0){
        even += i;
    }
    else{
        odd += i;
    }
}
const sum =[even,odd];
console.log(sum);