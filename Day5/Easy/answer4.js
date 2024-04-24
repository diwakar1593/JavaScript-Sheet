/*
 Get the first item, the middle item and the last item of the array.
*/

const arr = ['HTML','CSS','JS','React','Node']
let firstItem = arr[0]
console.log(firstItem)
let middleIndex = Math.floor(arr.length/2);
let middleItem = arr[middleIndex]
console.log(middleItem)
let lastIndex = arr.length - 1
let lastItem = arr[lastIndex]
console.log(lastItem)