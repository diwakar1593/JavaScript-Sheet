/*
Call your function isEmpty, it takes a parameter and it checks if it is empty
or not.
*/

function isEmpty(str){
    if(str.length == 0){
        return true;  //If empty
    }
    else{
        return false;  // if not empty
    }
}

const str = '';
console.log(isEmpty(str));
const x = "Hello";
console.log(isEmpty(x));