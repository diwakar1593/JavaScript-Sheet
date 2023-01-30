/*
Declare a function name sumOfEven. It takes a number parameter and it adds all
the even numbers in that - range.
*/

function sumOfEven(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        if(i%2==0)
        sum+=i;
    }
    console.log('Sum of all even numbers in the range',start,'and',end,':',sum);
}

sumOfEven(10,30);