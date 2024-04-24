//Write a function called isPrime, which checks if a number is prime number.

function isPrime(n){
    var flag = true;
    for(let i=2; i<=n-1; i++){
        if(n%i==0){
            flag = false;
            break;
        }
    }
    return flag;
}

console.log(isPrime(11));
console.log(isPrime(9));