/*
Declare a function name printArray. It takes array as a parameter and it prints
out each value of the array.
*/

function printArray(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

const arr = ['HTML','CSS','JS','Node js','React js'];
printArray(arr);