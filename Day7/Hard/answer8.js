/*
Call your function shuffleArray, it takes an array as a parameter and it
returns a shuffled array.
*/

function shuffleArray(arr){
    arr.sort(() => Math.random() - 0.5);
    return arr;
}

let arr = [1, 2, 3,8,6,4,7];
console.log(shuffleArray(arr));