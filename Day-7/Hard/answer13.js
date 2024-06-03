/*
Write a function called average, it takes an array parameter and returns the
average of the items. Check if all the array items are number types. If not
give return reasonable feedback.
*/

function average(arr){

    let sum = 0;

    for(let i =0; i<arr.length; i++){
        if(typeof(arr[i])=="number"){
            sum += arr[i];
        }
        else{
            return 'Array not containing all item of number types.'
        }
    }
    let ave = sum/(arr.length - 1);
    return ave;
}

let arr1 = [10,20,30,4,34,56,12,85];
console.log(average(arr1));
let arr2 = [10,20,30,'String',34,56,12,85];
console.log(average(arr2));