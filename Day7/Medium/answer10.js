/*
Declare a function name sumOfNumbers. It takes a number parameter and it adds
all the numbers in that range.
*/

function sumOfNumbers(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=i;
    }
    console.log('Sum of all numbers in the range',start,'and',end,':',sum);
}

sumOfNumbers(10,20);