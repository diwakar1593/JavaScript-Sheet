//Write a function which checks if all the items of the array are the same data type.

function isSameDateType(arr){
    for(let i=0; i<arr.length-1; i++){
        if(typeof(arr[i])!==typeof(arr[i+1])){
            console.log('Not Same Data Type Array!');
            return;
        }
        }
            console.log('Same Data Type Array!');
}

const arr = [1,2,11,5,4,6,8];
isSameDateType(arr);
const arr1 = [1,2,11,5,4,6,8,'hello',6];
isSameDateType(arr1);