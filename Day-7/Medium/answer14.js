/*
Write a function which takes any number of arguments and return the sum of the
arguments.
*/

const sumAllNums = (...args) => {
    let sum =0;
    for(const element of args){
        sum += element
    }
    return sum;
}

console.log(sumAllNums(10,20,13,40,10));