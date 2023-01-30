/*
Declare a function name removeItem. It takes an index parameter and it returns
an array after removing an item.
*/

function removeItem(arr,index){
    if(index<0 || index>arr.length){
        console.log('Invalid Index');
        return;
    }
    else{
        delete arr[index];
        return arr;
    }

}

const arr =['HTML','CSS','JavaScript','ReactJS','NodeJS'];

console.log(arr);
console.log(removeItem(arr,2));