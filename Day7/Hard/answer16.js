//Write a functions which checks if all items are unique in the array.

function isUnique(arr){
    arr.sort();
    for(let i=1; i<arr.length; i++){
        if(arr[i-1]==arr[i]){
            console.log('Not Unique Array!');
            return;
        }
        }
            console.log('Unique Array!');
}

const arr = [1,2,11,5,4,6,8];
isUnique(arr);
const arr1 = [1,2,11,5,4,6,8,6];
isUnique(arr1);