/*
Write a function called sumOfArrayItems, it takes an array parameter and return
the sum of all the items. Check if all the array items are number types. If not
give return reasonable feedback.
*/

function sumOfArrayItems(arr){

    let sum = 0;

    for(let i =0; i<arr.length; i++){
        if(typeof(arr[i])=="number"){
            sum += arr[i];
        }
        else{
            return 'Array not containing all item of number types.'
        }
    }
    return sum;
}

let arr1 = [10,20,30,4,34,56,12,85];
console.log(sumOfArrayItems(arr1));
let arr2 = [10,20,30,'String',34,56,12,85];
console.log(sumOfArrayItems(arr2));

