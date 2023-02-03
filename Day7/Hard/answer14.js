/*
Write a function called modifyArray takes array as parameter and modifies the
fifth item of the array and return the array. If the array length is less than
five it return 'item not found'.
 */

function modifyArray(arr){
    const updateArr =[];
    if(arr.length<5){
        return "Item not found";
    }
    else{
        for(let i=0; i<arr.length;i++){
            if(i==4)
            updateArr.push(arr[i].toUpperCase());
            else
            updateArr.push(arr[i]);
        }
        return updateArr;
    }
}
console.log(modifyArray(['Avocado', 'Tomato','Potato','Mango','Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft','IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
