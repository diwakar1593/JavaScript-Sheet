/*
Declare a function name addItem. It takes an item parameter and it returns an
array after adding the item.
*/

function addItem(item){
    const arr = []
    arr.push(item);
    return arr;
}

const arr = addItem('HTML');
console.log(arr);