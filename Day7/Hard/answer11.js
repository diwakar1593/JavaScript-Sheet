/*
Call your function sum, it takes any number of arguments and it returns the
sum.
*/

const sum = (...args) => {
    let sum = 0;
    for (const element of args){
        sum += element
    }
    return sum;
}

console.log(sum(1, 2, 3, 4)) // 10
console.log(sum(10, 20, 13, 40, 10)) // 93
console.log(sum(15, 20, 30, 25, 10, 33, 40)) // 173