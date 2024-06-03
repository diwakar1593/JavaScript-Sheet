/*
Call your function factorial, it takes a whole number as a parameter and it
return a factorial of the number.
*/

function factorial(n){
    let result = 1;
    if (n==0 || n==1){
        return result;
    }
    else if(n>1){
        for(let i = n; i>=1; i--){
            result *= i;
        }
        return result;
    }
    else{
        return 'Number has to be positive.';
    }
}

let n = 4;
var fact = factorial(n);
console.log("factorial of",n,":",fact);