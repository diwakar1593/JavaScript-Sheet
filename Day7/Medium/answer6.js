/*
Declare a function name reverseArray. It takes array as a parameter and it
returns the reverse of the array (don't use method).
*/

function reverseArray(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--;
        i++;
    }
    return arr;
}

var arr = [2,5,1,4,6,9,10,8];
console.log(arr);
let reverseArr = reverseArray(arr);
console.log(reverseArr);